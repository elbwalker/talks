import { Measurement } from "./types";

const plan: Measurement.Plan = {
  entities: {
    page: {
      name: "Page",
      description: "A regular page that can be called diretly",
      actions: {
        view: {
          name: "Pageview",
          description: "The well known pageview on each route change",
          properties: [],
          sources: { web: { required: true } },
          trigger: { type: "load" },
          type: "core",
        },
      },
      properties: {},
      owners: ["alexander"],
    },
    cta: {
      name: "CTA",
      description: "Engage users to use our products and services",
      actions: {
        impression: {
          name: "CTA impression",
          description: "",
          properties: [
            { id: "title", required: true },
            { id: "position", required: true },
          ],
          sources: { web: { required: true } },
          trigger: { type: "visible" },
          type: "core",
        },
        start: {
          name: "CTA start",
          description: "Click 'get started' button",
          properties: [
            { id: "title", required: true },
            { id: "position", required: true },
          ],
          sources: { web: { required: true } },
          trigger: { type: "click" },
          type: "core",
        },
        github: {
          name: "CTA github",
          description: "Click button 'Check it out on GithHub'",
          properties: [
            { id: "title", required: true },
            { id: "position", required: true },
          ],
          sources: { web: { required: true } },
          trigger: { type: "click" },
          type: "core",
        },
      },
      properties: {
        title: {
          name: "Title headline",
          type: "string",
          example: "Ready to dive in?",
        },
        position: {
          name: "Placement of the CTA on a page",
          type: "string",
          example: "footer",
        },
      },
      owners: ["alexander"],
    },
    blog: {
      name: "Blog",
      description: "Educational content about the  usage of out tools",
      actions: {
        impression: {
          name: "Blog impression",
          description: "",
          properties: [{ id: "id", required: true }],
          sources: { web: { required: true } },
          trigger: { type: "visible" },
          type: "additional",
        },
        click: {
          name: "Blog click",
          description: "",
          properties: [{ id: "id", required: true }],
          sources: { web: { required: true } },
          trigger: { type: "click" },
          type: "additional",
        },
        view: {
          name: "Blog view",
          description: "Load of a fully detailed blog article",
          properties: [
            { id: "id", required: true },
            { id: "title", required: true },
            { id: "date", required: true },
            { id: "category", required: true },
            { id: "author", required: true },
            { id: "readingTime", required: true },
          ],
          sources: { web: { required: true } },
          trigger: { type: "load" },
          type: "core",
        },
        read: {
          name: "Blog read",
          description: "As soon as someone sees the end of an article",
          properties: [{ id: "id", required: true }],
          sources: { web: { required: true } },
          trigger: { type: "visible" },
          type: "core",
        },
      },
      properties: {
        id: {
          name: "Path of the article",
          type: "string",
          example: "/blog/elbwalker-event-concept",
        },
        title: {
          name: "Catchy title",
          type: "string",
          example: "The elbwalker event concept",
        },
        date: {
          name: "When the article was published",
          type: "string",
          example: "2022-03-09T00:00:00.000Z",
        },
        category: {
          name: "The main category the blog article belongs to",
          type: "string",
          example: "Product",
        },
        author: {
          name: "Name of the author",
          type: "string",
          example: "Ayla",
        },
        readingTime: {
          name: "The estimated reading time",
          type: "number",
          example: "6",
        },
      },
      owners: ["alexander"],
    },
  },
  sources: {
    web: {
      name: "elbwalker.com",
      type: "web",
      owners: ["alexander"],
    },
  },
  destinations: {
    datalake: {
      name: "",
      type: "event-pipe",
      owners: ["alexander"],
      events: {
        "*": {
          "*": {
            consent: ["statistic"],
          },
        },
      },
    },
  },
  globals: {},
  version: 1,
  users: {
    alexander: { name: "Alexander" },
    ayla: { name: "Ayla" },
  },
};
