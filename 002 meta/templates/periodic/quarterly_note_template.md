---
tags:
  - periodic/quarterly_note
created: <% tp.file.creation_date() %>
cssclasses:
  - HideProps
---
<%* 
	let currentDate = moment();
	let start = currentDate.clone().startOf('quarter').format("YYYY-MM-DD");
	let end = currentDate.clone().endOf('quarter').format("YYYY-MM-DD");
	let lastQuarter = currentDate.clone().subtract(1, 'Q').format("Q");
	let nextQuarter = currentDate.clone().add(1, 'Q').format("Q");

	let icon = '📂';
%># <% icon %> <% tp.file.title %>

[[2025-Q<% lastQuarter %>|<< Q<% lastQuarter %>]] | **<% start %>** - **<% end %>** | [[2025-Q<% nextQuarter %>|Q<% nextQuarter %> >>]]

````tabs
top,one
tab: ___

tab: ⭐ All Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project-status as "Status", join(project-stakeholders, ", ") as "Stakeholder", created as "Started", archived as "Archived"
FROM #project
WHERE (created >= date(<% start %>) and created <= date(<% end %>)) or (archived >= date(<% start %>) and arcphived <= date(<% end %>)) or (project-status = "In Progress" or project-status = "Blocked"  or (project-status = "Standby"))
```

tab: 🔄 Monthlies
```dataview
LIST WITHOUT ID file.link
FROM #periodic/monthly_note 
WHERE file.ctime >= date(<% start %>) and file.ctime <= date(<% end %>)
```
````

## 🌳Summary of the Month


## 🪞Notes & Reflections

  
## 🌱Plan for Next Quarter


## 🧹 Cleanup

- [l] Clean up Slack Channels