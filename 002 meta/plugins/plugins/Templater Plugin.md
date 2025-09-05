---
Navigate: "[[Plugins.base|Go to all Plugins]]"
Enabled: true
Pugin Core Functionality: true
Plugin QoL: true
Plugin Style:
Plugin Vault Management:
tags: [plugin]
---
# 🔌 Templater Plugin

Used for advanced note templating.

## 📝 Notes

## ⚙️ Settings

### Custom Scripts

[Documentation](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html)

Custom Scripts are defined in `002 meta/templater scripts`.

| Script                  | Example                                                     |
| ----------------------- | ----------------------------------------------------------- |
| [[sanitize_for_tag.js]] | `let tag = "project/" + tp.user.sanitize_for_tag(filename)` |


## ⚠️ Dependencies and Integrations

### 🔗Referenced By

```dataview
LIST
from [[Templater Plugin]]
sort file.name descending
```

## 🕒Log

- [[2025-08-30]]
	- Plugin Installed
