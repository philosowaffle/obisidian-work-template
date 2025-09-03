<%*
	let currentDate = moment(tp.file.title, "YYYY-[W]WW");
	let start = currentDate.clone().startOf('week').format("YYYY-MM-DD");
	let end = currentDate.clone().endOf('week').format("YYYY-MM-DD");
	let lastWeek = tp.date.now("WW", -7);
	let nextWeek = tp.date.now("WW", 7);

	let icon = '📂';
%>---
tags:
  - periodic/weekly_note
created: <% end %>
cssclasses:
  - HideProps
---
# <% icon %> <% tp.file.title %>

[[2025-W<% lastWeek %>|<< W<% lastWeek %>]] | <%tp.file.title%> | [[2025-W<% nextWeek %>|W<% nextWeek %> >>]]

````tabs
top,one
tab: ___

tab: ⭐ All Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project-status as "Status", join(project-stakeholders, ", ") as "Stakeholder", created as "Started"
FROM #project
WHERE (created >= date(<% start %>) and created <= date(<% end %>)) or (archived >= date(<% start %>) and archived <= date(<% end %>)) or (project-status = "In Progress" or project-status = "Blocked"  or (project-status = "Standby"))
```

tab: 🔄 Daylies
```dataview
LIST WITHOUT ID file.link
FROM #periodic/daily_note 
WHERE created >= date("<% start %>") and created <= date("<% end %>")
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
	.where(l => l.section.toString().includes("Log"))
	.where(l => l.children && !l.parent)
	.groupBy(d => d.text);

let journalDays = dv
			.pages('"050 gitignore/journal/2025"')
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

## 🌳 Summary of the Week


## 🪞 Notes & Reflections

  
## 🌱 Plan for Next Week


## 🧹 Cleanup

- [l] Clean up Browser tabs
- [l] Clean up Todo's 
- [l] Clean up Projects 
- [l] Clean up Inbox
- [l] Clean local Git branches