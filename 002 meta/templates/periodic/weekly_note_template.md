---
tags:
  - periodic/weekly_note
created: <% tp.file.creation_date() %>
cssclasses:
  - HideProps
---
<%* 
	let currentDate = moment();
	let start = currentDate.clone().startOf('week').format("YYYY-MM-DD");
	let end = currentDate.clone().endOf('week').format("YYYY-MM-DD");

	let icon = '📂';
%># <% icon %> <% tp.file.title %>
````tabs
top,one
tab: ___

tab: ⭐ All Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_status as "Status", project_aor as "AOR", join(project_stakeholder, ", ") as "Stakeholder", project_started as "Started"
FROM #project
WHERE (project_started >= date(<% start %>) and project_started <= date(<% end %>)) or (project_archived >= date(<% start %>) and project_archived <= date(<% end %>)) or (project_status = "In Progress" or project_status = "Blocked"  or (project_status = "Standby"))
```

tab: 🆕 Started Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_next_steps as "Next Steps", project_status as "Status", project_aor as "AOR", join(project_stakeholder, ", ") as "Stakeholder", dateformat(project_started, "yyyy-MM-dd") as "Started"
FROM #project
WHERE project_started >= date("<% start %>") and project_started <= date("<% end %>")
```

tab: 🛸 Inflight Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_next_steps as "Next Steps", project_status as "Status", project_aor as "AOR", join(project_stakeholder, ", ") as "Stakeholder", dateformat(project_started, "yyyy-MM-dd") as "Started"
FROM #project
WHERE (project_status = "In Progress" or project_status = "Blocked"  or (project_status = "Standby"))
```

tab: 🛑 Stopped Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project_aor as "AOR", join(project_stakeholder, ", ") as "Stakeholder", dateformat(project_started, "yyyy-MM-dd") as "Started", dateformat(project_archived, "yyyy-MM-dd") as "Archived"
FROM #project
WHERE project_archived >= date("<% start %>") and project_archived <= date("<% end %>")
```

tab: 🔄 Daylies
```dataview
LIST WITHOUT ID file.link
FROM #periodic/daily_note 
WHERE file.ctime >= date("<% start %>") and file.ctime <= date("<% end %>")
sort file.name ascending
```

tab: 🕐 Log
```dataviewjs
let weekStart = "<% start %>";
let weekEnd = "<% end %>";
let days = dv
	.pages()
	//.pages('"010 projects"')
	//.limit(3)
	.where(p => !p.file.path.includes("001 attachments"))
	.where(p => !p.file.path.includes("004 meta"))
	.where(p => p.file.lists)
	.flatMap(p => p.file.lists)
	.where(l => l.section.toString().includes("log"))
	.where(l => l.children && !l.parent)
	.groupBy(d => d.text);

let journalDays = dv
			.pages('"020 areas/000 journal 🪴"')
			//.limit(10)
			.groupBy(p => p.file.link);

function recursiveListChildren(listItem, root)
{
	var firstLevelRoot = dv.el("li", listItem.text, { container: root })
	if (listItem.children)
	{
		const secondLevelRoot = dv.el("ul", "", { container: firstLevelRoot });
		listItem.children.forEach(c => 
		{		
			recursiveListChildren(c, secondLevelRoot);
		});
	}
}

const dateRegex = /2025-[0-9][0-9]-[0-9][-0-9]/g;

journalDays.forEach(day => 
{
	let date = day.key.path.match(dateRegex)?.[0];
	if (!date) return;
	if (date < weekStart) return;
	if (date > weekEnd) return;

	dv.el("h5", date);
	
	let dayLogs = days.where(d => d.key.match(dateRegex)?.[0] == date);
	let childrenByFile = dayLogs
						.rows
						.children
						.groupBy(c => c.link);
	const listRoot = dv.el("ul", "");
	childrenByFile.forEach(c => 
		{
		    // File Title			
			var firstLevelRoot = dv.el("li", c.key, { container: listRoot });
			var secondLevelRoot = dv.el("ul", "", { container: firstLevelRoot });
			c.rows.forEach(c => recursiveListChildren(c, secondLevelRoot));
		});
});

```

tab: 📆 Meetings
```dataview
LIST
from #meeting 
where file.ctime >= date("<% start %>") and file.ctime <= date("<% end %>")
sort file.name ascending
```
````

# Summary of the Week
<%tp.file.cursor()%>

# Notes & Reflections

  
# Plan for Next Week


# Cleanup

- [l] Clean up Browser tabs
- [l] Clean up Todo's 
- [l] Clean up Projects 
- [l] Clean up Inbox
- [l] Clean local Git branches
- [l] Send [[Kudos]]