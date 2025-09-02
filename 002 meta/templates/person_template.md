<%* 
	let filename = tp.file.title;
	let alias = filename.split(" ")[0];
	let tag = "people/" + filename.replaceAll(" ", "_").toLowerCase();
%>---
created: <% tp.file.creation_date() %>
aliases: 
tags: [<% tag %>]
note_type: person
person_org:
person_title:
person_reports_to:
person_team:
person_specialty:
person_timezone: MST / MDT
---
# 🧍 <% filename %>

**Org:**
**Title:** 
**Reports To:** 
**Team:** 
**Specialty:** 
**Time Zone:** 

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