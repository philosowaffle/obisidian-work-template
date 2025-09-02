<%*
	let yesterday = tp.date.yesterday("YYYY-MM-DD");
	let thisToday = tp.date.now('YYYY-MM-DD');
	let tomorrow = tp.date.tomorrow("YYYY-MM-DD");

	let icon = '🪴';

	const dow = tp.date.now("dd");
	if (dow == 'Su') icon = '🌞';
	if (dow == 'Mo') icon = '⛰️';
	if (dow == 'Tu') icon = '🏃‍♀️‍➡️';
	if (dow == 'We') icon = '🐫';
	if (dow == 'Th') icon = '🥑';
	if (dow == 'Fr') icon = '🚴‍♀️';
	if (dow == 'Sa') icon = '🦕';
%>---
tags:
  - periodic/daily_note
created: <% tp.file.creation_date() %>
cssclasses:
  - HideProps
---
# <% icon %> <% tp.date.now("dddd") %>
[[<% yesterday %>|<< <% yesterday %>]] | <%tp.file.title%> | [[<% tomorrow %>|<% tomorrow %>>>]] 

````tabs
top,one
tab: ___

tab: 📦 Projects
```dataview
TABLE WITHOUT ID file.link AS "Project", project-next-steps as "Next Steps", project-status as "Status", join(project-stakeholders, ", ") as "Stakeholder", dateformat(created, "MM/dd/yyyy") as "Started"
FROM #project
WHERE (project-status = "In Progress") or (project-status = "Blocked") or (project-status = "Paused") and (!project-archived)
SORT project-status, file.name
```

tab: ✅ Tasks
```tasks
not done
tags do not include #task/idea
(due before <% tomorrow %>) OR (no due date)
sort by function task.isRecurring
sort by priority, due
hide edit button
short mode
```

tab: ✨ Ideas
```tasks
not done
tags include #task/idea
tags do not include #task/ignore
(due before <% tomorrow %>) OR (no due date)
sort by priority, due
hide edit button
short mode
```

tab: 📦 By Project
 ```tasks
not done
tags do not include #task/ignore
tags include #project
sort by tag, priority, due
group by function task.tags.map( (tag) => tag.split('/')[1].replaceAll('_', ' ') )
hide edit button
short mode
```

tab: 📆 Meetings
```dataview
LIST
from #meeting 
where contains(file.name, "<% thisToday %>") 
sort file.name ascending
```

tab: 🕐 Log
```dataviewjs
let today = "<% thisToday %>";
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

let allDailyNotes = dv
			.pages("#periodic/daily_note")
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

//dv.el("h2","count");
//dv.el("h2",days.length);

const dateRegex = /2025-[0-9][0-9]-[0-9][-0-9]/g;

allDailyNotes.forEach(dailyNote => 
{
	let date = dailyNote.key.path.match(dateRegex)?.[0];
	if (!date) return;
	if (date != today) return;
	
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
````
### ✨ New Tasks

## 📝 Notes


## ✍️ jot

```

```
