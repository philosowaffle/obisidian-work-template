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

## 🔗 links

- **Repo Urls:** 
- **Admin Tools:** 
- **Jira Boards:** 
- **Wikis:** 
- **Google Drive:** 
- **Slack Channels: 

## 🧭 moc
> [!info]-
> Map of Content to more notes.

## 📓 notes
> [!info]-
> A place to start top level notes if individual note files are not needed or ready yet.

## 🔍 observability
> [!info]-
> Links to dashboards, logs, and sql queries.

## 🛳 releases
> [!info]-
> Release schedule and processes.


## 📆 meetings
> [!info]-
> Working group meetings, and others.

```dataview
LIST
from #meeting and [[<% filename %>]]
sort file.name ascending
```

## 🕐 log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Codebase Created**