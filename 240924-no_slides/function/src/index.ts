import { createNodeClient } from "@elbwalker/client-node";
import { destinationBigQuery } from "@elbwalker/destination-node-bigquery";
import {
  anonymizeIP,
  getHashNode,
  parseUserAgent,
  tryCatchAsync,
} from "@elbwalker/utils";
import { HttpFunction } from "@google-cloud/functions-framework";

export const collect: HttpFunction = async (req, res) => {
  // CORS
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");

  if (req.method === "OPTIONS") {
    res.status(204).send();
    return;
  }

  return await tryCatchAsync(
    async (body: string) => {
      const event = JSON.parse(body);

      // Don't run any commands
      if (String(event.event).startsWith("walker "))
        return res.send({ status: "nope" });

      const { elb, instance } = createNodeClient({});
      const dayOfMonth = new Date().getDate();
      const origin = req.get("origin");
      const userAgent = req.get("User-Agent");
      const language = req.get("Accept-Language");
      const userAgentUser = parseUserAgent(userAgent);
      const ipAddress = anonymizeIP(req.ip || "");

      // Temporarily fingerprint the user
      event.user.hash = await getHashNode(
        "" + dayOfMonth + origin + userAgent + language + ipAddress
      );

      // Enrich session start events
      if (event.event == "session start") {
        // Location information
        const country = req.get("X-AppEngine-Country");
        if (country) event.user.country = country;
        const region = req.get("X-AppEngine-Region");
        if (region) event.user.region = region;
        const city = req.get("X-AppEngine-City");
        if (city) event.user.city = city;

        delete userAgentUser.userAgent;
        event.user = { ...userAgentUser, ...event.user };
      }

      // Log destination
      await elb("walker destination", { push: console.log });

      await elb("walker destination", destinationBigQuery, {
        custom: {
          projectId: "playground-388912",
          datasetId: "walkerOS",
          tableId: "events",
          location: "EU",
        },
      });

      const result = await instance.push(event);

      // Custom "preview" mode
      if (event.globals?.debug) console.dir(result, { depth: 4 });

      res.set("Content-Type", "application/json");
      res.send("thx");
    },
    (error) => {
      console.error(error);
      res.status(418).send("broken");
    }
  )(req.body);
};
