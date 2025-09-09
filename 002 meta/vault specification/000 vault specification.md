# Vault Specification

> [!info]
> The standards and practices to follow for maintaining this vault.

1. [Vault Usage](Vault%20Usage.md)
2. [Creating Notes](Creating%20Notes.md)
3. [Folder Organization](Folder%20Organization.md)
4. [Note Discoverability](Note%20Discoverability.md)
5. [Todo Tasks](Todo%20Tasks.md)

## Proposed

> [!info]-
> A place to list ideas to try out.

### Ideas

1. see if Templater has ability to auto collapse sections
	1. has Templater support: https://github.com/liamcain/obsidian-creases

### Previous Plugins

#### 🧪 Day Planner

[Repo](https://github.com/ivan-lednev/obsidian-day-planner?tab=readme-ov-file#where-to-get-a-google-calendar-link)

Testing out for visually time blocking my day, especially for cases where I don't need to block focus time. Unfortunately does not integrate with Google calendar, for now I'm just manually adding my meeting blocks,

#### 🧪 List Callouts

Adds callout highlighting to a list item based on the first character.

#### Meta Bind

Provides inline UI elements that are directly bound to file properties.

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

#### Various Complements

Used for auto-complete. Can provide custom dictionary entries in dictionary.

### In Progress

> [!info]-
> A place to document new proposed specifications while in progress.
