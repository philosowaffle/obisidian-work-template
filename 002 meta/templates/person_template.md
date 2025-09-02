<%* 
	let filename = tp.file.title;
	let alias = filename.split(" ")[0];
	let tag = "#people/" + filename.replaceAll(" ", "_").toLowerCase();
%>---
created: <% tp.file.creation_date() %>
aliases: 
tags: <% tag %>
---
# 🧍 <% filename %>

**Org:**
**Title:** 
**Reports To:** 
**Team:** 
**Speciality:** 
**Timezone:** 

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