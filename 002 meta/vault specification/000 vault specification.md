# Vault Specification

> [!info]-
> The standards and practices to follow for maintaining this vault.

1. [[Creating Note Files]]
	1. [[Callouts]]
	2. [[Log Sections]]
	3. [[Note Properties]]
	4. [[Note Tags]]
	5. [[Note Types]]
2. [[Folder Organization]]
3. [[Note Discoverability]]
4. [[Recurring Meetings]]
5. [[Todo Tasks]]

## Proposed

> [!info]-
> A place to list ideas to try out.

### Ideas

1. see if Templater has ability to auto collapse sections
	1. has Templater support: https://github.com/liamcain/obsidian-creases

### Previous Plugins

#### Broken Links

Helps identify broken links. Have it pinned in right side bar.

#### Copy as HTML

Have this bound to `Cmd+Shft+C`. This solves the problem of copying out of obisdian over to slack or Jira where the formatting gets completely lost. 

#### 🧪 Day Planner

[Repo](https://github.com/ivan-lednev/obsidian-day-planner?tab=readme-ov-file#where-to-get-a-google-calendar-link)

Testing out for visually time blocking my day, especially for cases where I don't need to block focus time. Unfortunately does not integrate with Google calendar, for now I'm just manually adding my meeting blocks,

#### 🧪 List Callouts

Adds callout highlighting to a list item based on the first character. See [list callouts](style.md#list%20callouts) style guide.

![list callouts](style.md#list%20callouts)

#### Meta Bind

Provides inline UI elements that are directly bound to file properties.

#### Obsidian Broken Links

Useful for auditing broken links in the vault.

#### Obsidian Web Clipper

Not a plugin but a web browser extension. Allows clipping content from the web and saving to the vault. Currently just using the default template and sending to `000 inbox/`.

#### OmniSearch

Testing this out for more robust search.

`ctrl+S`

`ctrol+shft+S`

#### Jira Issue

[Docs](https://github.com/marc0l92/obsidian-jira-issue)

Convenience plugin for linking Jira Issues with their titles. Uses a [personal access token](https://e2p.atlassian.net/secure/ViewProfile.jspa?selectedTab=com.atlassian.pats.pats-plugin:jira-user-personal-access-tokens) to authenticate. This token expires every year and needs to be re-created.

```sql
codeblock:jira-search

type: TABLE
limit: 50
columns: KEY, SUMMARY, TYPE, UPDATED, STATUS, ASSIGNEE, FIX_VERSIONS, NOTES, 
query: "Epic Link" in (PRODUCT-2458) and Project not in (PRODUCT) ORDER BY Project, status DESC, Rank
```

#### Style Setttings

Advanced style settings that work with many community Themes.

#### Various Complements

Used for auto-complete. Can provide custom dictionary entries in [dictionary](dictionary.md).

### In Progress

> [!info]-
> A place to document new proposed specifications while in progress.

1. 🧪 Folder per active project
	1. Project index file with `project` tag
	2. This allows building dataview for projects worked over time even as they move to archived
	3. When project is done, most file can be reorganized into ARA, but Project Index file will always go to archived
