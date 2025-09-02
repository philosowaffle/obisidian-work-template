---
created: <% tp.file.creation_date() %>
tags: []
---

<%* 

	let filename = tp.file.title;

	let aor = "";

	let tag = "#project/unknown";

	let icon = "📦";

	
	aor = tp.file.folder(true);
	if (aor == '010 projects/Architect 📐')
	{
		icon = "📐";
	} 
	else if (aor == "010 projects/Discovery 🔭")
	{
		icon = "🔭";
	} 
	else if (aor == "010 projects/Delivery 🚚")
	{
		icon = "🚚";
	} 
	
	tag = "#project/" + filename.replaceAll(" Project", "").replaceAll(" ", "_").replaceAll(".", "_").replaceAll("-", "").replaceAll("+", "_").toLowerCase();

%># <% icon %> <% filename %>  
**Created:** `INPUT[dateTime(defaultValue(null)):project_started]` **Archived:** `INPUT[dateTime(defaultValue(null)):project_archived]` **Status:** `INPUT[inlineSelect(option(In Progress), option(Blocked), option(Standby), option(Done)):project_status]` **AOR:** `INPUT[inlineSelect(option(Discovery), option(Delivery), option(Architect), option(Unknown)):project_aor]` **Tag:** <%tag%> **CAPEX:** `INPUT[toggle(offValue(no), onValue(yes)):project_is_capex]`

**Stakeholder:** `INPUT[inlineListSuggester(optionQuery(#people),optionQuery("020 areas/Org 🌎"), optionQuery("020 areas/Teams ⚽")):project_stakeholder]`

**Next Steps:** `INPUT[text():project_next_steps]`

<%tp.file.cursor()%>

````tabs
top,one
tab: ___

tab: <div style="color: orange;"> 🔗 Links</div>

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
