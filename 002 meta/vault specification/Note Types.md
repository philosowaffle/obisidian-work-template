# Note Types

"Note Types" describe the different categories of notes that are created in the vault. These types can be used to help create filtered views, queries, and bases focusing on only certain categories.

The type of a note is defined using the `note_type` property. A given Note Type may have additional properties for that categories, these properties should follow the naming convention of `<note_type_name>_<property>`.

## Defined Note Types

| Note Type | Description                                                                          | Reference         |
| --------- | ------------------------------------------------------------------------------------ | ----------------- |
| Plugin    | A Plugin note for documenting settings and other information about Obsidian Plugins. | [[Plugin Notes]]  |
| Meeting   | A note capturing information from a meeting                                          | [[Meeting Notes]] |
| Person    | A note representing a person                                                         | [[Person Notes]]  |

## ✨ Creating a New Note Type

1. Choose a name
2. Add the new type to [[#Defined Note Types]]
3. Create a specification file similar to [[Meeting Notes]] and [[Person Notes]]
4. Document
	1. CRUD for this type of note
	2. Properties, Fields, and Dynamic Views
