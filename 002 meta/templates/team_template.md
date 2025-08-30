---
created: <% tp.file.creation_date() %>
---

<%* 

	let filename = tp.file.title;

	let alias = filename.split(" ")[0];

	let tag = "#people/" + filename.replaceAll(" ", "_").toLowerCase();

%># ⚽ <% filename %>  

**Team Lead/Manager:** <%tp.file.cursor()%>
**Product Lead:** 
**Org/Brand:** 
**Primary Responsibility:** 

# 🔗 Links

- **Jira Boards:** 
- **Repo Urls:**
- **Admin Tools:**
- **Wikis:**
- **Google Drive:**
- **Slack Channels:

# 🧭 Moc

> [!info]-
> Map of Content to more notes.

# 📓 Notes

> [!info]-
> A place to start top level notes if individual note files are not needed or ready yet.

# 🛳 Processes

> [!info]-
> Release schedule and processes.

# 📆 Meetings

> [!info]-
> Working group meetings, and others.

# 🕐 Log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Team Created**
