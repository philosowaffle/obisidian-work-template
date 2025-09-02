<%* 

	let filename = tp.file.title;
	let icon = "📦";
	let tag = "#project/" + filename.replaceAll(" Project", "").replaceAll(" ", "_").replaceAll(".", "_").replaceAll("-", "").replaceAll("+", "_").toLowerCase();

%>---
created: <% tp.file.creation_date() %>
Description: Update the thing
Project Next Steps: reach out to
Project Status: In Progress
created: 2025-09-02 13:33
archived:
Project Stakeholders:
  - "[[Bailey Belvis]]"
tags:
  - project/the_first_thing
Navigate:
  - "[[Projects.base|Got to all Projects]]"
---

# <% icon %> <% filename %>  

A project to...

````tabs
top,one
tab: ___

tab: <div style="color: orange;"> 🔗 Links</div>

- Some Link

tab: <div style="color: green;"> ☑ Todo</div>
```tasks
(tags include <% tag %>) OR (path includes <% filename %>) AND (status.type is not NON_TASK)
sort by due
hide edit button
short mode
```

tab: 📆 Meetings
```dataview
LIST
from #meeting and [[<% filename %>]]
sort file.name ascending
```
````

# 📓 Notes

# 🕐 Log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Project Created**
