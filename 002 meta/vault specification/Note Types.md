---
aliases: [Note Type]
cssclasses:
  - HideProps
---
# Note Types

"Note Types" describe the different categories of notes that are created in the vault. These types can be used to help create filtered views, queries, and bases focusing on only certain categories.

The type of a note is defined using a `tag`. A given Note Type may have additional properties, these properties should follow the naming convention of `<Note Type Name <Property>`.

## Defined Note Types

| Note Type | Description                                                                          | Reference                             | Tag         |
| --------- | ------------------------------------------------------------------------------------ | ------------------------------------- | ----------- |
| Codebase  | A note describing a deployable unit of code                                          | [Codebase Notes](Codebase%20Notes.md) | `#codebase` |
| Feature   | A note describing a user facing feature                                              | [Feature Notes](Feature%20Notes.md)   | `#feature`  |
| Meeting   | A note capturing information from a meeting                                          | [Meeting Notes](Meeting%20Notes.md)   | `#meeting`  |
| Person    | A note representing a person                                                         | [Person Notes](Person%20Notes.md)     | `#person`   |
| Plugin    | A Plugin note for documenting settings and other information about Obsidian Plugins. | [Plugin Notes](Plugin%20Notes.md)     | `#plugin`   |
| Project   | A note representing a project or deliverable                                         | [Project Notes](Project%20Notes.md)   | `#project`  |
| Resource  | A generic wiki style note capturing any information                                  | [Resource Notes](Resource%20Notes.md) | none        |
| Team      | A note representing a team of people                                                 | [Team Notes](Team%20Notes.md)         | `#team`     |
| Periodic  | Notes created to represent a time frame such as a day, week, month, quarter, or year | [Periodic Notes](Periodic%20Notes.md) | `#periodic` |

## ✨ Creating a New Note Type

1. Choose a name
2. Add the new type to [#Defined Note Types](#Defined%20Note%20Types)
3. Create a specification file similar to [Meeting Notes](Meeting%20Notes.md) and [Person Notes](Person%20Notes.md)
4. Document
	1. CRUD for this type of note
	2. Properties, Fields, and Dynamic Views
	3. See [meta_documentation_template](../templates/meta_documentation_template.md)
