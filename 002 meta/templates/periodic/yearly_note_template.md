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

	let icon = '📂';
%># <% icon %> <% tp.file.title %>
````tabs
top,one
tab: ___

tab: ⭐ All Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_status as "Status", project_aor as "AOR", join(project_stakeholder, ", ") as "Stakeholder", project_started as "Started"
FROM #project
WHERE (project_started >= date(<% start %>) and project_started <= date(<% end %>)) or (project_archived >= date(<% start %>) and project_archived <= date(<% end %>))
```

tab: 🆕 Started Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_next_steps as "Next Steps", project_status as "Status", join(project_stakeholder, ", ") as "Stakeholder", project_aor as "AOR", project_started as "Started"
FROM #project
WHERE project_started >= date(<% start %>) and project_archived <= date(<% end %>)
```

tab: 🛸 Inflight Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_next_steps as "Next Steps", project_status as "Status", join(project_stakeholder, ", ") as "Stakeholder", project_aor as "AOR", project_started as "Started"
FROM #project
WHERE (project_status = "In Progress" or project_status = "Blocked" or (project_status = "Standby"))
```

tab: 🛑 Stopped Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_status as "Status", project_aor as "AOR", join(project_stakeholder, ", ") as "Stakeholder", project_started as "Started"
FROM #project
WHERE project_archived >= date(<% start %>) and project_archived <= date(<% end %>)
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
# Summary
<%tp.file.cursor()%>

# Notes & Reflections

  
# Plan for Next Year
