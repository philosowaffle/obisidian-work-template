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
WHERE project_started >= date(<% start %>) and project_started <= date(<% end %>)
```

tab: 🛸 Inflight Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_next_steps as "Next Steps", project_status as "Status", project_aor as "AOR", join(project_stakeholder, ", ") as "Stakeholder", project_started as "Started"
FROM #project
WHERE (project_status = "In Progress" or project_status = "Blocked" or (project_status = "Standby"))
```

tab: 🛑 Stopped Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_status as "Status", project_aor as "AOR", join(project_stakeholder, ", ") as "Stakeholder", project_started as "Started"
FROM #project
WHERE project_archived >= date(<% start %>) and project_archived <= date(<% end %>)
```

tab: 🔄 Weeklies
```dataview
LIST WITHOUT ID file.link
FROM #periodic/weekly_note 
WHERE file.ctime >= date(<% start %>) and file.ctime <= date(<% end %>)
```
````
# Summary of the Month
<%tp.file.cursor()%>

# Notes & Reflections

  
# Plan for Next Month


# Todo

- [l] Send [[Kudos]]
- [l] Clean out Obsidian Workspaces 