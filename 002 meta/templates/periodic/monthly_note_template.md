---
tags:
  - periodic/monthly_note
created: <% tp.file.creation_date() %>
cssclasses:
  - HideProps
---
<%* 
	let currentDate = moment();
	let start = currentDate.clone().startOf('month').format("YYYY-MM-DD");
	let end = currentDate.clone().endOf('month').format("YYYY-MM-DD");
	let lastMonth = tp.date.now("MM", "P-1M");
	let nextMonth = tp.date.now("MM", "P+1M");

	let icon = '📂';
%># <% icon %> <% tp.file.title %>

[[2025-M<% lastMonth %>|<< M<% lastMonth %>]] | <%tp.file.title%> | [[2025-M<% nextMonth %>|M<% nextMonth %> >>]]

````tabs
top,one
tab: ___

tab: ⭐ All Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project-status as "Status", join(project-stakeholders, ", ") as "Stakeholder", created as "Started", archived as "Archived"
FROM #project
WHERE (created >= date(<% start %>) and created <= date(<% end %>)) or (archived >= date(<% start %>) and arcphived <= date(<% end %>)) or (project-status = "In Progress" or project-status = "Blocked"  or (project-status = "Standby"))
```

tab: 🔄 Weeklies
```dataview
LIST WITHOUT ID file.link
FROM #periodic/weekly_note 
WHERE file.ctime >= date(<% start %>) and file.ctime <= date(<% end %>)
```
````

## 🌳Summary of the Month


## 🪞Notes & Reflections

  
## 🌱Plan for Next Month


## 🧹 Cleanup

- [l] Send [[Kudos]]
- [l] Clean out Obsidian Workspaces 