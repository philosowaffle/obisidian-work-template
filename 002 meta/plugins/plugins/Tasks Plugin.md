---
Navigate: "[[Plugins.base|Go to all Plugins]]"
Enabled: true
Pugin Core Functionality: true
Plugin QoL: true
Plugin Style:
Plugin Vault Management:
tags: [plugin]
---
# 🔌 Tasks Plugin

- Provides auto-complete and metadata for Task items such as `Due Date`, `Start Date`, and `Priority`. 
- Provides a query language for Tasks across your vault.
- Provides custom task definitions that can be styled by the theme
- [Docs](https://publish.obsidian.md/tasks/Quick+Reference)
- [[Todo Tasks]]
- [[Tasks Style Preview]]

## 📝 Notes

Globally applied rules:

```
tags do not include #task/ignore
path does not include 002 meta/templates
```

### Example Queries

```tasks
not done
folder includes journal
sort by due
group by filename
hide edit button
short mode
```

## ⚙️ Settings

## ⚠️ Dependencies and Integrations

- `002 meta/vault data/recurring tasks`

### 🔗Referenced By

```dataview
LIST
from [[Tasks Plugin]]
sort file.name descending
```

## 🕒Log

- [[2025-08-30]]
	- Plugin Installed
