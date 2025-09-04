---
aliases: [Project Note]
cssclasses:
  - HideProps
---
# Project Notes

Project notes are used to track deliverable items. These can be large projects spanning months or even small projects spanning just a single day or task. These notes become the "hub" note for all things related to that Project. Any note with relevance to this project can create links to it.

## 🔃Workflow

### 🔍 Discovery

- Active Projects can be found in `010 projects/`
- Inactive Projects can be found in `040 archives/`
- All projects in the vault can be discovered in the [[Projects.base|Projects Base]]

### ✨ Creating a New Project Note

1. `ctrl+shft+n` to launch [[QuickAdd Plugin]]
2. Choose `Project`
3. Fill out the Project name, leave off the word `Project`
4. The note will be created in `010 projects`
5. Fill out the Property metadata

### 🗄️Archive

1. Set **Project Status** to `Done`
2. Set **Archived** date
3. Add **Archived** note to log
4. Polish note, remove irrelevant info, add missing links
5. Move the note to `040 archives/`

### ⛔Removing

1. Delete the project

## ⚙️Meta

### 🔩 Properties

| Property             | Values                                     | Description                                       |
| -------------------- | ------------------------------------------ | ------------------------------------------------- |
| Description          |                                            | Short description of the project                  |
| Project Status       | `In Progress`, `Blocked`, `Paused`, `Done` | Current status of my involvement with the project |
| Project Next Steps   |                                            | Next steps or action needed                       |
| Archived             | Date                                       | The date the project was archived                 |
| Project Stakeholders | Links to People, Teams, or other Entities  | List of those who are stakeholders in the project |

### 🪧Fields

| Fields | Description                  |
| ------ | ---------------------------- |
| Notes  | General notes dumping ground |
| Log    | Log of changes               |

### 🪟Dynamic Views

- Links - 
- Todo - any task with this project tag
- Meetings - any Meeting that links back to this Project Note

| View     | Description                                                                                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Links    | A place to add links to relevant things, these can be either internal or external resources                                                                                        |
| Todo     | Any task that uses this projects tag                                                                                                                                               |
| Meetings | Any [[Meeting Notes\|Meeting Note]] that links back to this Project.  Most often this will be filled out in the `Related Projects` property on the [[Meeting Notes\|Meeting Note]] |

### ⚠️ Dependencies

- [[Dataview Plugin]]
- [[Tabs Plugin]]
- [[Templater Plugin]]
- [[Tasks Plugin]]
- [[project_template]]
