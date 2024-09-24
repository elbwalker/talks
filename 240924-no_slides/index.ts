import type { Output } from "@pulumi/pulumi";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import * as synced from "@pulumi/synced-folder";

// Configuration settings
const env = pulumi.getStack();
const config = new pulumi.Config();
const functionName = "collect";
const wwwSrc = "./www/dist";
const indexDocument = "index.html";
const funcSrc = "./function/dist";

const gcpConfig = new pulumi.Config("gcp");
const location = gcpConfig.require("region") || "europe-west3";

function getName(suffix: string) {
  return `${config.name}-${env}-${suffix}`;
}

// Create a storage bucket and configure it as a website.
const wwwBucket = new gcp.storage.Bucket(getName("www-bucket"), {
  location,
  website: {
    mainPageSuffix: indexDocument,
  },
});

// Create an IAM binding to allow public read access to the bucket.
const wwwBucketIAMBinding = new gcp.storage.BucketIAMBinding(
  getName("www-bucket-iam-binding"),
  {
    bucket: wwwBucket.name,
    role: "roles/storage.objectViewer",
    members: ["allUsers"],
  }
);

// Use a synced folder to manage the files of the website.
const funcSyncedFolder = new synced.GoogleCloudFolder(
  getName("function-synced-folder"),
  {
    path: wwwSrc,
    bucketName: wwwBucket.name,
  }
);

// Create another storage bucket for the function.
const funcBucket = new gcp.storage.Bucket(getName("function-bucket"), {
  location,
});

// Upload the function to the storage bucket.
const funcArchive = new gcp.storage.BucketObject(getName("function-archive"), {
  bucket: funcBucket.name,
  source: new pulumi.asset.FileArchive(funcSrc),
});

// Create a Cloud Function that returns some data.
const func = new gcp.cloudfunctions.Function(getName("function"), {
  sourceArchiveBucket: funcBucket.name,
  sourceArchiveObject: funcArchive.name,
  runtime: "nodejs20",
  entryPoint: functionName,
  triggerHttp: true,
});

// Create a Network Endpoint Group (NEG) for the Cloud Function.
const neg = new gcp.compute.RegionNetworkEndpointGroup(getName("neg"), {
  region: location,
  networkEndpointType: "SERVERLESS",
  cloudFunction: {
    function: func.name,
  },
});

// Create a Backend Service to manage traffic to the Cloud Function.
const funcService = new gcp.compute.BackendService(
  getName("function-backend"),
  {
    backends: [
      {
        group: neg.id,
      },
    ],
  }
);

// Create a Backend Bucket for the website bucket.
const wwwBackendBucket = new gcp.compute.BackendBucket(
  getName("www-backend-bucket"),
  {
    bucketName: wwwBucket.name,
  }
);

// Create an IAM member to invoke the function.
const funcInvoker = new gcp.cloudfunctions.FunctionIamMember(
  getName("function-invoker"),
  {
    project: func.project,
    region: func.region,
    cloudFunction: func.name,
    role: "roles/cloudfunctions.invoker",
    member: "allUsers",
  }
);

// Export the URLs.
export const wwwURL = pulumi.interpolate`https://storage.googleapis.com/${wwwBucket.name}/`;
export const funcURL = func.httpsTriggerUrl;
