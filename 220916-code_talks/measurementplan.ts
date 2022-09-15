import { Measurement } from "./types";

const plan: Measurement.Plan = {
  version: 1,
  sources: {
    web: {
      name: "elbwalker.com",
      type: "web",
      owners: ["alexander"],
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
          description: "Get users to try out our library",
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
              description: "Click button 'Check it out on GitHub'",
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
        article: {
          name: "Article",
          description: "Educational content about the usage of our tools",
          actions: {
            impression: {
              name: "Article impression",
              description: "",
              properties: [{ id: "id", required: true }],
              sources: { web: { required: true } },
              trigger: { type: "visible" },
              type: "additional",
            },
            click: {
              name: "Article click",
              description: "",
              properties: [{ id: "id", required: true }],
              sources: { web: { required: true } },
              trigger: { type: "click" },
              type: "additional",
            },
            view: {
              name: "Article view",
              description: "Load of blog article page",
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
              name: "Article read",
              description:
                "As soon as the last paragraph of an article is visible to the user",
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
              name: "Main content category the blog article belongs to",
              type: "string",
              example: "Product",
            },
            author: {
              name: "Name of the author",
              type: "string",
              example: "Ayla",
            },
            readingTime: {
              name: "Estimated reading time in minutes",
              type: "number",
              example: "6",
            },
          },
          owners: ["alexander"],
        },
      },
      globals: {
        pagetype: {
          name: "Pagetype",
          type: "string",
          example: "Blog",
        },
      },
    },
    app_backend: {
      name: "WebApp",
      type: "server",
      owners: ["alexander"],
      entities: {},
      globals: {},
    },
  },
  destinations: {
    datalake: {
      name: "Our central place for all raw data",
      type: "event-pipe",
      owners: ["alexander"],
      config: {
        custom: {
          projectId: "xxxxxx",
        },
        events: {
          "*": {
            "*": {
              consent: ["statistic"],
            },
          },
        },
      },
    },
  },
  owners: {
    alexander: { name: "Alexander" },
    ayla: { name: "Ayla" },
  },
};

export default plan;
