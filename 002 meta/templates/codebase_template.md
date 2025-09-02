---
Description:
Codebase Owners:
Codebase SMEs:
aliases: []
created: <% tp.file.creation_date() %>
tags: [codebase]
Navigate:
  - "[[Codebases.base|Go to all Codebases]]"
---
<%* 
	let filename = tp.file.title;
%># 💾 <% filename %>  

## 🔗 Links

- **Repo Urls:** 
- **Admin Tools:** 
- **Jira Boards:** 
- **Wikis:** 
- **Google Drive:** 
- **Slack Channels: 

## 🧭 MOC
> [!info]-
> Map of Content to more notes.

## 📓 Notes
> [!info]-
> A place to start top level notes if individual note files are not needed or ready yet.

## 🔍 Observability
> [!info]-
> Links to dashboards, logs, and sql queries.

## 🛳 Releases
> [!info]-
> Release schedule and processes.


## 📆 Meetings
> [!info]-
> Working group meetings, and others.

```dataview
LIST
from #meeting and [[<% filename %>]]
sort file.name ascending
```

## 🕒 Log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Codebase Created**