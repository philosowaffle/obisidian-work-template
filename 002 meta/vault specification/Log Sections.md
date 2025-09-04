---
aliases: [Log Section]
---
# Log Sections

1. A Note *may* contain a log section
2. This section **must** be an H2 heading with the word "Log" in it
	1. Log sections *may* be created using one of the following template
		1. [[Log Section Template]]
3. This section **must** contain an unordered list
	1. The root list item **must** be a date
		1. The date **must** be a link that links to that days [Periodic Notes](Periodic%20Notes.md)
		2. The children list items **must** document things that happened related to this note on that day
4. A log entry *may* contain milestones
	1. A milestone **must** be bold
	2. A milestone *may* be 
		1. Project Created
		2. Project Archived

## Sample Template

Sample template for Published notes.

```
## 🕒 Log

- [[{{date}}]]
	- **Log Section Created**
```

### ⚠️ Dependencies

- [[Log Section Template]]

## 🕒 Log

- [[06-11-2025]]
	- **Log Section Created**
	- *#2* 
		- Changed from H1 to H2 per new linting standards
		- Changed from "log" to "Log" per new linting standards
