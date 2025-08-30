---
aliases: 
created: <% tp.file.creation_date() %>
---
<%* 
	let filename = tp.file.title;
	let alias = filename.split(" ")[0];
	let tag = "#people/" + filename.replaceAll(" ", "_").toLowerCase();
%># 💾 <% filename %>  

**Owner:** `INPUT[inlineListSuggester(optionQuery(#people),optionQuery("020 areas/Org 🌎"), optionQuery("020 areas/Teams ⚽")):codebase_owner]`
**SME:** `INPUT[inlineListSuggester(optionQuery(#people),optionQuery("020 areas/Org 🌎"), optionQuery("020 areas/Teams ⚽")):codebase_sme]`
**QA:** `INPUT[inlineListSuggester(optionQuery(#people),optionQuery("020 areas/Org 🌎"), optionQuery("020 areas/Teams ⚽")):codebase_qa]`
**CodebaseId:** `INPUT[text():codebase_id]`
**CodebaseGroupId:** `INPUT[text():codebase_groupId]`

# 🔗 links

- **Repo Urls:** 
- **Admin Tools:** 
- **Jira Boards:** 
- **Wikis:** 
- **Google Drive:** 
- **Slack Channels: 

# 🧭 moc
> [!info]-
> Map of Content to more notes.

# 📓 notes
> [!info]-
> A place to start top level notes if individual note files are not needed or ready yet.

# 🔍 observability
> [!info]-
> Links to dashboards, logs, and sql queries.

# 🛳 releases
> [!info]-
> Release schedule and processes.


# 📆 meetings
> [!info]-
> Working group meetings, and others.


# 🕐 log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Codebase Created**