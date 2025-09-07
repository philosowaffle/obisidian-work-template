---
aliases: [Daily Note, Daily Notes]
cssclasses:
  - HideProps
---
# Periodic Notes

There are several types of supported Periodic Notes, all of which follow the same general structure.

| Period          | Description                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Daily Notes     | These serve as the home page for any given day.  Each one provides spaces for capturing new TODOs, jotting down notes, and also several dynamic views for reviewing active Projects and the current days meetings. |
| Weekly Notes    | A weekly review note for summarizing the week and planning goals for the next.                                                                                                                                     |
| Monthly Notes   | A monthly review note for summarizing the month and planning goals for the next.                                                                                                                                   |
| Quarterly Notes | A quarterly review note for summarizing the quarter and planning goals for the next.                                                                                                                               |
| Yearly Notes    | A yearly review note for summarizing the year and planning goals for the next.                                                                                                                                     |

## 🔃Workflow

### 🔍 Discovery

- Use the [Calendar Plugin](../plugins/plugins/Calendar%20Plugin.md) to find Days, Weeks, or Months
- Use the command palette to open the current timeframes periodic note
- Browse `050 gitignore/journal`

### ✨ Creating the Daily Note

1. `ctrl+h` (for home) to open today's Daily Note

### ✨Creating Other Periodic Notes

1. Use the command palette and search for the period you would like to create a note for

### ⛔Removing

1. Delete the given note

## ⚙️Meta

### 🔩 Properties

| Property          | Values      | Description                                              |
| ----------------- | ----------- | -------------------------------------------------------- |
| Banner Properties | meta_plugin | Various properties in use by the [Pixel Banner Plugin](../plugins/plugins/Pixel%20Banner%20Plugin.md) |

### 🪧Fields

| Fields                        | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| Notes                         | General notes dumping ground                        |
| Settings                      | Settings and configuration specifics                |
| Dependencies and Integrations | Keep track of what features make use of this plugin |
| Log                           | Log of changes                                      |
|                               |                                                     |
|                               |                                                     |

### 🪟Dynamic Views

A dynamic view of the plugin dependencies is used to show all notes that refer back to that specific plugin.

### ⚠️ Dependencies

- [Dataview Plugin](../plugins/plugins/Dataview%20Plugin.md)
- [Tabs Plugin](../plugins/plugins/Tabs%20Plugin.md)
- [Periodic Notes](.md)
- [Calendar Plugin](../plugins/plugins/Calendar%20Plugin.md)
- [Templater Plugin](../plugins/plugins/Templater%20Plugin.md)
- [Tasks Plugin](../plugins/plugins/Tasks%20Plugin.md)
- [Pixel Banner Plugin](../plugins/plugins/Pixel%20Banner%20Plugin.md)
- [daily_note_template](../templates/periodic/daily_note_template.md)
- [weekly_note_template](../templates/periodic/weekly_note_template.md)
- [monthly_note_template](../templates/periodic/monthly_note_template.md)
- [quarterly_note_template](../templates/periodic/quarterly_note_template.md)
- [yearly_note_template](../templates/periodic/yearly_note_template.md)
