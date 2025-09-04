---
aliases: [Meeting Note]
cssclasses:
  - HideProps
---
# Meeting Notes

 Individual note files are created for each Meeting. This is primarily to help keep [[Project Notes]] shorter and notes in general more atomic.

There are currently three types of meeting notes:

| Meeting Type | Description                                                                                             | Read More                 |
| ------------ | ------------------------------------------------------------------------------------------------------- | ------------------------- |
| Generic      | Default meeting note template suitable for all kinds of meetings unless a more specific template exists | [[meeting_note_template]] |
| 1:1          | For capturing 1:1 meeting notes with another person                                                     | [[meeting_person_sync]]   |
| Recurring    | For capturing recurring meetings that happen with a group of people, a team, or related to a project    | [[Recurring Meetings]]    |

## 🔃Workflow

### 🔍 Discovery

- To browse all meetings across the vault use the [[Meetings.base|Meetings Base]]
- On a given [[Project Notes|Project Note]] there is a `Meetings` tab where you can find all linked Meetings
- On the [[Periodic Notes|Daily Note]] there is a `Meetings` tab where you can find all Meetings that happened on that day

### ✨Creating A New Generic Meeting

1. If this meeting is related to an ongoing Project or other Note, then navigate to that Notes [[Log Sections|Log Section]] and place your cursor on a new log entry
2. Use `ctrl+shft+n` to launch the [[QuickAdd Plugin]] Wizard
	1. 🔥Or use slash command `/meeting`
3. Choose `Meeting > Generic`
4. Enter the name of the meeting, do not add `Meeting` to the end
5. The meeting will be created in `040 archives/meetings` and a link to the note will be created at the current position of your cursor (see step 1)

### ✨Creating A New 1:1 Meeting

1. Use `ctrl+shft+n` to launch the [[QuickAdd Plugin]] Wizard
	1. 🔥Or use slash command `/meeting`
2. Choose `Meeting > 1:1`
3. Enter the first and last name of the person you are meeting with
4. The meeting will be created in `050 gitignore/people/supplemental/1_1s`

### ⛔Removing A Meeting

1. Delete the meeting note

## ⚙️Meta

### 🔩 Properties

| Properties               | Description                                   |
| ------------------------ | --------------------------------------------- |
| Description              | One line description of the meeting           |
| Meeting Attendees        | People who attended the meeting.              |
| Meeting Related Projects | A list of links to related Project Notes      |
| Meeting Datetime         | Date and time of meeting                      |

### 🪧Fields

| Fields   | Description                                   |
| -------- | --------------------------------------------- |
| Outcomes | The outcomes and next steps from the meeting. |
| Agenda   | The planned agenda for the meeting            |
| Notes    | Notes taken during the meeting                |

### ⚠️ Dependencies

- [[QuickAdd Plugin]]
- [[Templater Plugin]]
- [[meeting_note_template]]
- [[meeting_person_sync]]
