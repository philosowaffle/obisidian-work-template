# Person Notes

Person notes represent people, there is one note created per person. This note may hold information about a person and provides an anchor point for linking notes this person is involved with.

## 🔃 Workflow

### 🔍 Discovery

- [People Base](../../020%20areas/people/People.base)

### ✨Creating A Person

1. Use `ctrl+shft+n` to launch the [QuickAdd Plugin](../plugins/plugins/QuickAdd%20Plugin.md) Wizard
2. Choose `Person`
3. Enter the persons first and last name
4. The person note will be created in `020 areas/people` 

### ⛔ Removing A Person

1. Delete the person file

## ⚙️ Meta

### 🔩Properties

| Properties        | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| aliases           | Add aliases or nicknames for this person                    |
| Person Org        | The Organization within the Company this person belongs to  |
| Person Title      | The persons title                                           |
| Person Reports To | A link to the person this person reports to in the org tree |
| Person Team       | Link to the Team this person is part of                     |
| Person Specialty  | List areas this person is a SME in                          |
| Person Time Zone  | The timezone this person is in                              |
|                   |                                                             |

### 🪧Fields

| Fields | Description                                        |
| ------ | -------------------------------------------------- |
| Notes  | Generic place to take notes related to this person |
| Log    | Log updates and changes made to this person        |
|        |                                                    |

### 🪟Dynamic Views

| Dynamic Views   | Description                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| Tasks           | All todo tasks with this person tagged, or added specifically to this persons Note file will show up here |
| Meetings        | All [Meeting Notes](Meeting%20Notes.md) that include a link to this person note will show here                              |
| [People](../../020%20areas/people/People.base) | People Base                                                                                               |

### ⚠️Dependencies

- [Tabs Plugin](../plugins/plugins/Tabs%20Plugin.md)
- [Dataview Plugin](../plugins/plugins/Dataview%20Plugin.md)
- [QuickAdd Plugin](../plugins/plugins/QuickAdd%20Plugin.md)
- [Templater Plugin](../plugins/plugins/Templater%20Plugin.md)
- [Tasks Plugin](../plugins/plugins/Tasks%20Plugin.md)
- [person_template](../templates/person_template.md)
