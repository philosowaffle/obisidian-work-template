---
Description:
Team Manager:
Team Members:
aliases: []
created: <% tp.file.creation_date() %>
tags: [team]
Navigate:
  - "[[Team.base|Go to all Teams]]"
---
<%* 
	let filename = tp.file.title;
%># ⚽ <% filename %>  


## 🔗 Links

- **Jira Boards:** 
- **Repo Urls:**
- **Admin Tools:**
- **Wikis:**
- **Google Drive:**
- **Slack Channels:

## 🧭 Moc

> [!info]-
> Map of Content to more notes.

## 📓 Notes

> [!info]-
> A place to start top level notes if individual note files are not needed or ready yet.

## 🛳 Processes

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

## 🕐 Log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Team Created**
