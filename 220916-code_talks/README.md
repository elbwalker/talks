# How to set up future-proof event tracking (fast)

[code.talks](https://codetalks.de/)

Teams need behavioral data to build better products. A solid implementation is crucial for any analytics tool to run. But it annoys engineers.
Learn how to see tracking as a central part of the whole product development process as a techie and manager. Find out how we created a descriptive approach to optimize your analytics implementation workflow to achieve sustainable setups and plenty of testing & monitoring possibilities.
We’ll walk through real-world examples to give you not just inspiration but also hands-on practices to get started.

20 minutes (15 mins talk, 5 mins Q&A)

[walker.js](https://github.com/elbwalker/walker.js) · [elbwalker.com](https://www.elbwalker.com) · [Alexander](https://www.linkedin.com/in/alexanderkirtzel/)

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
- It ensures tracking data **quality**
- It creates a foundation to **scale** your analytics implementation

Start **together**: Product managers, marketeers, engineers etc. need a **common understanding**: What's being measured where, when & why.

- Define **goals**: The why of your current and future data activities
- Describe the business **entities**: XXX
- Name the **actions**: XXX
- Specify the **properties**: XXX
- Discusse the **destinations**: XXX
- Event **mapping**: XXX. And also a huge GDPR bonus.

XXX result of a measurement plan overview

> Recommendation: Have a plan. Work with it and iterate.

## Implementation layer

How about **data collection as code**

- central source of truth
- documentation
- living standard
- vendor-agnosticism
- destination mapping

See [measurementplan.ts](./measurementplan.ts) as a declarative example.

> Recommendation: Create an implementation layer as a part of your data collection. Make it easy to contribute.

## Event 'n' context

XXX Update to real Blog or Article example

```json5
{
  event: "newsletter signup", // combination of entity and action
  data: {
    // arbitrary set properties with the data-elb-newsletter attribute
    list: "analytics_hacks",
    position: "overlay",
  },
  globals: {
    // all set properties with the data-elbglobals attribute
    // Not shown in example usage snippet (data-elbglobals="language:en;test:darkmode")
    language: "en",
    test: "darkmode",
  },
  user: {
    // stored user ids (manually added once)
    id: "userid",
    device: "cookieid",
  },
  nested: [], // all nested entities within the newsletter
  id: "1647968113641-01b5e2-5", // timestamp, group & count of the event
  trigger: "click", // name of the trigger that fired
  entity: "newsletter", // entity name
  action: "signup", // entity action
  timestamp: 1647968113641, // time when the event fired
  timing: 13.37, // how long it took from the page load to trigger the event
  group: "01b5e2", // random group id for all events on a page
  count: 2, // incremental counter of the events on a page
  version: {
    // Helpful when working with raw data
    walker: 1.4, // used walker.js version
    config: 42, // a custom configuration version number
  },
  walker: true, // flag to filter events
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

1. entity (`data-elb="XXX"`)
2. action (`data-elbaction="XXX"`)
3. property (`data-elb-XXX=""`)

> Recommendation: Use the walker.js. Feel free to give a star :)

## Testing

Benefits of a descriptive approach
Selectors and action

```js
// Test the ENTITY ACTION event
[data-elb="ENTITY"][data-elbaction="visible:ACTION"]
document.querySelector('[data-elb="ENTITY"][data-elbaction="visible:ACTION"]').scrollIntoView();

document.querySelector('[data-elb="ENTITY"][data-elbaction="visible:ACTION"]').click();

```

See [query_events.js](./query_events.js) for a code example to list all events and properties.

> Recommendation: Constant monitoring. No legacy code.

## Discussion

> Start your data setup with a reliable, growing foundation everyone trusts.

Share your thoughts

Thank you!
