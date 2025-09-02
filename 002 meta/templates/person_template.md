<%* 
	let filename = tp.file.title;
	let alias = filename.split(" ")[0];
	let tag = "person/" + filename.replaceAll(" ", "_").toLowerCase();
%>---
Person Org:
Person Title:
Person Reports To:
Person Team:
Person Specialty:
Person Time Zone: MST / MDT
created: <% tp.file.creation_date() %>
tags: [<% tag %>]
aliases: []
Navigate:
  - "[[People.base|Go to all People]]"
---
# 🧍 <% filename %>

````tabs
top,one
tab: ✅ Tasks
```tasks
not done
(tags include <% tag %>) OR (path includes <% filename %>) 
sort by due, priority
hide edit button
short mode
```

tab: 📆 Meetings
```dataview
LIST
from #meeting and [[<% filename %>]]
sort file.name descending
```
````
# 📓 notes


# 🕐 log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Person Created**