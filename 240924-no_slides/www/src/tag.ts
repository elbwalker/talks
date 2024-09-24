import { destinationWebAPI } from "@elbwalker/destination-web-api";
import { destinationGoogleGA4 } from "@elbwalker/destination-web-google-ga4";
import { elb, Walkerjs } from "@elbwalker/walker.js";

// Create a walker.js instance with custom config
Walkerjs({
  default: true, // Automatically start running and use dataLayer
  session: {
    // Enable session detection and the usage of user ids
    consent: "marketing", // Require marketing consent for storage access
    storage: true,
    // length: 2, // 2 Minutes session length
  },
  instance: "walkerjs", // Instance name
  tagging: 1, // Versioning
});

// Destination API
elb("walker destination", destinationWebAPI, {
  consent: { functional: true },
  custom: {
    url: "https://europe-west3-playground-388912.cloudfunctions.net/collect-noslides-function-0126794",
    transport: "beacon",
  },
});

// Destination GA4
elb("walker destination", destinationGoogleGA4, {
  consent: { marketing: true, ga4: true },
  custom: {
    measurementId: "G-4WP1Y3GPLW", // ga4 direct
    snakeCase: false,
    include: ["all"],
  },
  loadScript: true,
});
