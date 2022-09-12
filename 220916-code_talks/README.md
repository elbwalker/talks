# How to set up future-proof event tracking (fast)

Teams need behavioral data to build better products. A solid implementation is crucial for any analytics tool to run. But it annoys engineers.
Learn how to see tracking as a central part of the whole product development process as a techie and manager. Find out how we created a descriptive approach to optimize your analytics implementation workflow to achieve sustainable setups and plenty of testing & monitoring possibilities.
We’ll walk through real-world examples to give you not just inspiration but also hands-on practices to get started.

20 minutes (15 mins talk, 5 mins Q&A)

[walker.js](https://github.com/elbwalker/walker.js) · [elbwalker.com](https://www.elbwalker.com) · [alexander](https://www.linkedin.com/in/alexanderkirtzel/)

## measurement plan

It's all about **achieving data ownership** as one step towards **becoming data driven**.

- Creating **transparence** for all stakeholders
- Encourage **communication** between teams
- Ensure data **quality** in general
- Basis to **scale** your analytics

Start **together**: PMs/POs, Marketeers, Engineers etc. need a **common understanding**: What's being measured where, when & why.

- Defining **goals**: The general and current why of your data activities
- Describing the **entities**: XXX
- Naming the **actions**: XXX
- Specifying the **properties**: XXX
- Discussing the **Destinations**: XXX
- Event **mapping**: XXX. And also a huge GDPR bonus.

XXX result of a measurement plan overview

> Recommendation: Have a plan. Work with it.

## implementation layer

- central source of truth
- documentation
- living standard
- vendor agnostic
- destination mapping

XXX example measurement.json

> Recommendation: Part of your data collection. Easy to contribute.

## event 'n' context

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

> Recommendation: Listen to the **Meet the analytics stack** episode "[Why tracking implementation is still hard work and how to improve](https://share.transistor.fm/s/261a952c)" with [Timo Dechau](https://www.linkedin.com/in/timo-dechau/) for a deep dive.

## walker.js

Benefits XXX

1. entity (`data-elb="XXX"`)
2. action (`data-elbaction="XXX"`)
3. property (`data-elb-XXX=""`)

> Recommendation: Use the walker.js. Feel free to give a star :)

## testing

Benefits of a descriptive approach
Selectors and action

> Recommendation: Constant monitoring. No legacy code.

## discussion

> Start your data setup with a reliable, growing foundation everyone trusts.

Share your thougts

Thank you!
