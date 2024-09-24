# NO SLIDES

by [Timo Dechau](https://noslides.wtf/conference)

The NO SLIDES Conference is a two-day virtual event. Each day of our conference is focused on hands-on education, knowledge sharing and real-time interaction with the data community – packed with live demo sessions from industry experts. AND NO SLIDES (obviously).

**Journey start! An event is worth a thousand words.**

An event is worth a thousand words. And we should use its full potential. We'll build a single collection to unify marketing & product analytics for all our tools. But with this time, with complete control.

[LinkedIn Event](https://www.linkedin.com/events/7243532241736220672/)

## Setup

The example is based on [walkerOS](https://github.com/elbwalker/walkerOS) and [Pulumi Serverless Application](https://www.pulumi.com/templates/serverless-application/gcp/).

[Temporary live demo](https://storage.googleapis.com/collect-noslides-www-bucket-e2827ea/index.html)

- (Optional) Open this folder in VSCode as a `.devcontainer` to install everything automatically
- Create a service account, assign IAM role "Owner", add a key, and copy id to `credentials/pulumi.json`
- Enable GCP APIs (Compute Engine, Cloud Functions, Artifact Registry, Cloud Build)
- Create a [BigQuery table](https://github.com/elbwalker/walkerOS/tree/main/packages/destinations/node/bigquery#setup)
