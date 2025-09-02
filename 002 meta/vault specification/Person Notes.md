# Person Notes

Person notes represent people, there is one note created per person. This note may hold information about a person and provides an anchor point for linking notes this person is involved with.

## ✨Creating A Person

1. Use `ctrl+shft+n` to launch the [[QuickAdd Plugin]] Wizard
2. Choose `Person`
3. Enter the persons first and last name
4. The person note will be created in `020 areas/people` 

## 🔩Properties

| Properties        | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| aliases           | Add aliases or nicknames for this person                    |
| person_org        | The Organization within the Company this person belongs to  |
| person_title      | The persons title                                           |
| person_reports_to | A link to the person this person reports to in the org tree |
| person_team       | Link to the Team this person is part of                     |
| person_specialty  | List areas this person is a SME in                          |
| person_timezone   | The timezone this person is in                              |
|                   |                                                             |

## 🪧Fields

| Fields | Description                                        |
| ------ | -------------------------------------------------- |
| Notes  | Generic place to take notes related to this person |
| Log    | Log updates and changes made to this person        |
|        |                                                    |

## 🪟Dynamic Views

| Dynamic Views | Description                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| Tasks         | All todo tasks with this person tagged, or added specifically to this persons Note file will show up here |
| Meetings      | All [[Meeting Notes]] that include a link to this person note will show here                              |

## ⚠️Dependencies

- [[Tabs Plugin]]
- [[Dataview Plugin]]
