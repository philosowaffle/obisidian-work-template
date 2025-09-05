<%* 

	let filename = tp.file.title;
	let icon = "🧱";
	let tag = "feature/" + tp.user.sanitize_for_tag(filename);

%>---
Description:
aliases: []
created: <% tp.file.creation_date() %>
tags: [<%tag%> ]
Navigate:
  - "[[Features.base|Go to all Features]]"
---
# <% icon %> <% filename %>  

A feature that ....

````tabs
top,one
tab: ___

tab: <div style="color: orange;"> 🔗 Links</div>

- Some Link

tab: 📆 Meetings
```dataview
LIST
from #meeting and [[<% filename %>]]
sort file.name ascending
```
````

# 🕐 Log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Feature Created**
