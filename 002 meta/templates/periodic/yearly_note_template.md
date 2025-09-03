---
tags:
  - periodic/yearly_note
created: <% tp.file.creation_date() %>
cssclasses:
  - HideProps
---
<%* 
	let currentDate = moment();
	let start = currentDate.clone().startOf('year').format("YYYY-MM-DD");
	let end = currentDate.clone().endOf('year').format("YYYY-MM-DD");
	let lastYear = currentDate.clone().subtract(1, 'Y').format("YYYY");
	let nextYear = currentDate.clone().add(1, 'Y').format("YYYY");

	let icon = '📂';
%># <% icon %> <% tp.file.title %>

[[<% lastYear %>|<< <% lastYear %>]] | <%tp.file.title%> | [[<% nextYear %>|<% nextYear %> >>]]

````tabs
top,one
tab: ___

tab: ⭐ All Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project-status as "Status", join(project-stakeholders, ", ") as "Stakeholder", created as "Started", archived as "Archived"
FROM #project
WHERE (created >= date(<% start %>) and created <= date(<% end %>)) or (archived >= date(<% start %>) and arcphived <= date(<% end %>)) or (project-status = "In Progress" or project-status = "Blocked"  or (project-status = "Standby"))
```

tab: 🔄 Quarerlies
```dataview
LIST WITHOUT ID file.link
FROM #periodic/quarterly_note 
WHERE file.ctime >= date(<% start %>) and file.ctime <= date(<% end %>)
```

tab: 🔄 Monthlies
```dataview
LIST WITHOUT ID file.link
FROM #periodic/monthly_note 
WHERE file.ctime >= date(<% start %>) and file.ctime <= date(<% end %>)
```

````

## 🌳Summary


## 🪞Notes & Reflections

  
## 🌱Plan for Next Year
