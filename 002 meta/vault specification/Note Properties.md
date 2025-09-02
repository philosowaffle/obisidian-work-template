# Note Properties

1. All Notes *may* have properties that
	1. Describe the note
	2. Change behavior of the note
2. Properties **must**
	1. Be all lower case
	2. Use snake case

This Specification captures global properties honored by the vault.

| Property         | Default | Description                                                                                                                    |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Bookmarked       | false   | When true, this note will appear in the [[Bookmarks.base]]                                                                     |
| Navigate         |         | Create a back link to a parent or top level note, handy for navigation convenience.  ex. `[[Plugins.base\|Go to all Plugins]]` |
| Description      |         | Short description of the note file, most often used for display in Bases.                                                      |
| created          |         | Typically provided by templater templates and tracks the file create date                                                      |
| archived         |         | Tracks the date when a file was archived                                                                                       |
| Related Projects |         | A list of links to related Project Notes.                                                                                      |
