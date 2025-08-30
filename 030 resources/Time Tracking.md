# Time Tracking Methodology

[Confluence](https://wiki.i.mct360.com/display/~Bailey.Belvis/Tracking+Time)

Before beginning the endeavor of tracking my time, I first needed to define a methodology for tracking and measuring the time. This methodology needed to meet some criteria:

1. **Flexible** enough to track all types of work
2. **Fast** to track so it minimally interrupts my work flow
3. **Simple** enough for me to remember and remain consistent in how I categorize work
4. **Open** in terms of both extensibility and access to the raw tracking data

With these goals in mind, I next needed to identify what tools to use for this project.

## Tools

For tracking time I chose Traggo which is an open source, self-hostable, web-based time tracking application.  

Traggo keeps things **simple**, you start a timer, add some tags to it, then stop the timer. Traggo's tagging system allows it to remain **flexible** for adding new ways of categorizing work and the time data is stored in a SQLite database making the raw data **open** for consumption by a variety of different visualization and analysis tools. Traggo's UI also supports a basic auto-complete feature when you are typing in tags which means creating and tagging timers can be **fast**.

Since Traggo stores the raw time data in a SQLite database, I chose to use [Grafana](https://grafana.com/grafana/) for my visualization and analysis.

Traggo's approach to associating tags with time spans meant I needed to plan out what tags I would use to help categorize my time. Picking the right tags is important as it would impact my ability to slice and dice the data.

## Time Span Tags

In my opinion, any task I spend time on should be able to be described using the following sentence:

> As a \<role> I did \<planned/unplanned> work on \<project> for \<stakeholder> at \<location>

While this sentence structure has limitations in what it can measure, it does let me answer quite a few different types of questions. Such as:

1. How much time do I spend in each of my roles? Is it balanced?
2. How much time do I spend doing planned vs. unplanned work?
3. Which projects ate up the most time?
4. Which stakeholders do I dedicate the most time to?
5. Which projects generated the most unplanned work?
6. Which stakeholders generate the most unplanned work?
7. Which projects span across multiple roles?
8. How much work do I do outside of my role?

### Tags

Let's lay some ground rules for these tags.

Traggo's tags use the following structure `tag_key:value`. In order to keep the time tracking **fast** I opted to use short hand abbreviations for the `tag_key`'s. For some tags, the list of valid `values` is known and can be defined up front, while others (like `project`) are more open. In all cases `none` is a valid value.

But let's talk about `none` as a valid value for a second. In a perfect world, all work I do should have valid values for all of my chosen tags.....but the world isn't perfect is it? So `none` acts a marker for any time I did a task that I didn't know how to categorize, or maybe it truly didn't fit inside one of my pre-defined valid values. With this approach, when we get to the analysis portion of this discussion, `none` should be a red flag.

#### Role Tag

Another way to think of role is as an "area of responsibility". If you ever feel like you wear more than one hat in your job, then each of these proverbial hats is a role or area of responsibility.

- Tag Key: aor
- Valid Values:
	- Architect for CoreApi team
	- Discovery Engineer for Brand Product
	- Delivery Engineer for Brand Product
	- all
	- none

##### aor:all

> [!note] Introduced 11/13/23

When I started this project `all` was not a valid value. This meant any work I did that I could not associate with a single role would fall into the `none` bucket. After analyzing some of this early data I felt that the `none` category was inaccurately inflated because I was tracking things like checking slack/email or organizing my priorities for the day under the `none` role. In reality, some of the work I do is core to my ability to be successful or effective in all of my roles. So I introduced the `all` role for these cases.

#### Planned vs. Unplanned Tag

All work is either planned or unplanned. How I chose to define planned work is any task that was on my todo list at the start of that day. Any new tasks that get added, interruptions, priority changes, last minute meetings, these would all be categorized as unplanned work.

- Tag Key: t (for type)
- Valid Values:
	- Planned
	- Unplanned
	- none

#### Project Tag

The project tag is the most flexible as ultimately it needs to answer the question "what did you work on". While it is the most open ended tag, it does come with a few catch-all values I defined up front to help capture work that may otherwise be hard to categorize. I'll list those pre-defined categories below.

- Tag Key: p
- Tag Values:
	- \<projectName>
	- commute
	- commCheck - checking slack/email
	- documentation
	- lunch
	- prep - planning/prep
	- query - answering a question
	- none

##### p:meeting

> [!note] Changed 01/01/2024

Will no longer track meetings under the `p:` tag, instead this tracking has moved to it's own dedicated tag `m:`.

> [!note] Changed 11/13/23

This tags rules changed part way through tracking. Originally, anytime I was in any meeting I tracked that as `p:meeting`, however if the meeting was directly associated with an actual project that information was lost. So after a few weeks of tracking I switched to the following rule:

- If the meeting was directly related to another project I was already tracking, then the project tag should be the project name. We will not track this as a meeting.
- If the meeting is not directly related to a project I'm already tracking, then the project tag will be meeting

For example, a team Retro gets tracked as a Meeting, while a design meeting with leads about Project X would get tracked as Project X.

#### Stakeholder Tag

All work should be done for the benefit of someone. The ultimate stakeholder is of course the company, but practically speaking, our work is usually done for someone or some entity in our more immediate vicinity. Its also valid that some work is done for the benefit of ourselves in order to make sure we are prepared or more effective in our day. For this reason, the stakeholder tag can be yourself, a specific person, a team, or maybe even another project.

1. Tag Key: s
	1. me
	2. \<stakeholderName>
	3. none

#### Location Tag

> [!note] Introduced 11/27/23
> Backfilled all Tues/Wed/Thurs with `l:office`

The location tag helps keep track of "where did this work take place", which is useful in looking at patterns in time use across different location such as working from home vs. when working in the office.

- Tag Key: l
- Tag Values:
	- home
	- office
	- hto
	- oth

> [!note] Introduced 01/01/2024

`hto` and `oth` were introduced to help measure commute time from "home to office" vs. "office to home".

#### Meeting Tag

> [!note] Introduced 01/01/2024

The meeting tag is a boolean designating if this time was spent in a meeting.

- Tag Key: m
- Tag Values:
	- true
	- false

## Applying the Method

With the above tools and methodology defined, lets look at a few practical examples to help show how these would be applied.

| Scenario | Timer Tags |
|----------|--------------|
|You work on a PR you had planned to work on that day for Mark at home.| `aor:architect t:planned p:PR s:mark l:home`|
|You get a question in slack from Jake about delivery for SuperCool project in the office.| `aor:delivery t:unplanned p:superCool s:jake l:office` |
|Lunch at Office| `aor:none t:none p:lunch s:none l:office`|
|Commute to/from Office| `aor:none t:none p:commute s:none l:hto` |
