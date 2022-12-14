# How to set up future-proof event tracking (fast)

[code.talks](https://codetalks.de/)

Teams need behavioral data to build better products. A solid implementation is crucial for any analytics tool to run. But it annoys engineers.
Learn how to see tracking as a central part of the whole product development process as a techie and manager. Find out how we created a descriptive approach to optimize your analytics implementation workflow to achieve sustainable setups and plenty of testing & monitoring possibilities.
We’ll walk through real-world examples to give you not just inspiration but also hands-on practices to get started.

20 minutes (15 mins talk, 5 mins Q&A)

[walker.js](https://github.com/elbwalker/walker.js) · [elbwalker.com](https://www.elbwalker.com) · [Alexander](https://www.linkedin.com/in/alexanderkirtzel/)

> Wath the recording: [https://www.youtube.com/watch?v=KUqrZ4WJjDs](https://www.youtube.com/watch?v=KUqrZ4WJjDs)

## The problem

To most organizations tracking implementation today is a highly error-prone downstream task that nobody likes. Most of the time there is no universal approach to it. It just grows historically and hysterically with the number of new marketing tools and features. The lack of strategy and documentation creates data, that is neither reliable nor sustainable. It also makes it hard to govern data collection in terms of data privacy. Instead of installing another plugin, or fixing the next tracking error and be annoyed, what about starting with a new approach?

### Data lifecycle

0. Using
1. Reporting
2. Analyzing
3. Storing
4. Distributing
5. Collecting
6. Implementing
7. Planning <-- Start here

## Measurement plan

This is all about **achieving data ownership** as one step towards **becoming data-driven**. How does a measurement plan help?

- It creates **transparency** over what is being measured and why
- It simplifies **communication** between teams, especially between tech and marketing
- It ensures tracking **data quality**
- It creates a foundation to **scale** your analytics implementation

Start **together**: Product managers, marketeers, engineers etc. need a **common understanding**: What's being measured where, when & why.

- Define **goals**: The why of your current and future data activities (helps to focus)
- Describe the business **entities**: General objects of your site you want to learn more about (product, order, feature, article)
- Specify the **properties**: Important attributes to define and differentiate an entity (name, revenue, cta, author)
- Name the **actions**: What can be done actively with an entity (add, complete, click, read)
- Discuss the **destinations**: Which destination for wich purpose (GA4 for segmentation, Plausible for reporting, Ads for akquisition)
- Event **mapping**: How to transform and use previous definitions in each destinations ("order complete" to purchase on Facebook Pixel with marketing consent)

> Recommendation: Have a plan. Work with it and iterate.

## Implementation layer

How about **data collection as code**?

- central source of truth
- documentation
- living standard
- vendor-agnosticism
- destination mapping

See [measurementplan.ts](./measurementplan.ts) as a declarative example.

> Recommendation: Create an implementation layer as a part of your data collection. Make it easy to contribute.

## Event 'n' context

```json5
{
  event: "article view", // combination of entity and action
  data: {
    // arbitrary set properties
    list: "analytics_hacks",
    position: "overlay",
  },
  globals: {
    language: "en",
    test: "darkmode",
  },
  user: {
    id: "userid",
    device: "cookieid",
  },
  nested: [], // all nested entities within the article
  id: "1647968113641-01b5e2-5", // timestamp, group & count of the event
  trigger: "load", // name of the trigger that fired
  entity: "article", // entity name
  action: "read", // entity action
  timestamp: 1647968113641, // time when the event fired
  timing: 13.37, // how long it took from the page load to trigger the event
  group: "01b5e2", // random group id for all events on a page
  count: 2, // incremental counter of the events on a page
  version: {
    // Helpful when working with raw data
    walker: 1.4, // used walker.js version
    config: 42, // a custom configuration version number
  },
}
```

> Recommendation: Listen to the **Meet the analytics stack** episode "[Why tracking implementation is still hard work and how to improve](../220907-meet_the_analytics_stack/))" with [Timo Dechau](https://www.linkedin.com/in/timo-dechau/) for a deep dive on event contexts.

## @elbwalker/walker.js

Descriptive markup language based on HTML-attributes.

- Creates the **event context**
- Handles the **triggers**
- Orders the **race conditions**
- Distributes to **destinations**
- It's **open source**

1. entity (`data-elb="article"`)
2. action (`data-elbaction="load:view"`)
3. property (`data-elb-article="title:How to ..."`)

> Recommendation: Use the walker.js. Feel free to contribute :)

## Testing

Benefits of a descriptive approach
Selectors and action

```js
// Test the article impression event
document
  .querySelector('[data-elb="article"][data-elbaction="visible:impression"]')
  .scrollIntoView();

document.querySelector('[data-elb="article"] [data-elbaction="click"]').click();
```

See [query_events.js](./query_events.js) for a code example to list all events and properties.

> Recommendation: Constant monitoring. No legacy code.

## Discussion

> Start your data setup with a reliable, growing foundation everyone trusts.

Share your thoughts

Thank you!
