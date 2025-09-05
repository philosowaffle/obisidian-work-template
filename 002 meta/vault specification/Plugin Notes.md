---
aliases: [Plugin Note]
cssclasses:
  - HideProps
---
# Plugins

1. [[#🔍 Discovering Plugin Documentation]]
2. [[#🔩 Properties]]
3. [[#✨ Installing a New Plugin]]
4. [[#⛔Removing A Plugin]]

This vault is designed to work with several community plugins. See [[Vault Plugins#Initial Setup|Initial Setup.]]

## 🔃Workflow

### 🔍 Discovering Plugin Documentation

- See all documented plugins: [[Plugins.base]].

### ✨ Installing a New Plugin

1.  `ctrl+shft+n` to launch [[QuickAdd Plugin]] and choose Plugin
2. Set the properties specified by the template

### ⛔Removing A Plugin

Disable the `Enabled` property on the note. Add a note explaining why the plugin was removed using the following styling:

> [!danger] Uninstalled or Disabled
> Removed because it wasn't working well for me.

## ⚙️Meta

### 🔩 Properties

| Property                  | Values     | Description                                                     |
| ------------------------- | ---------- | --------------------------------------------------------------- |
| Enabled                   | true/false | Identifies the status of the plugin, either enabled or disabled |
| Plugin Core Functionality | true/false | Plugin provides core functionality for the vault to work        |
| Plugin QoL                | true/false | Plugin provides quality of life features                        |
| Plugin Style              | true/false | Plugin provides style enhancements or changes                   |
| Plugin Vault Management   | true/false | Plugin provides tools for managing vault data                   |
|                           |            |                                                                 |

### 🪧Fields

| Fields                        | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| Notes                         | General notes dumping ground                        |
| Settings                      | Settings and configuration specifics                |
| Dependencies and Integrations | Keep track of what features make use of this plugin |
| Log                           | Log of changes                                      |
|                               |                                                     |
|                               |                                                     |

### 🪟Dynamic Views

A dynamic view of the plugin dependencies is used to show all notes that refer back to that specific plugin.

### ⚠️ Dependencies

- [[Dataview Plugin]]
- [[Templater Plugin]]
- [[QuickAdd Plugin]]
- [[plugin_template]]
