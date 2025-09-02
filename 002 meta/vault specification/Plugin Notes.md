# Plugins

> [!info]-
> This folder contains information about the plugins used in this Obsidian vault. It may include a list of recommended plugins, installation instructions, configuration settings, and usage tips to help users enhance their experience with Obsidian.

1. [[#Getting Started]]
2. [[#🔍 Discovering Plugin Documentation]]
3. [[#🔩 Properties]]
4. [[#✨ Installing a New Plugin]]
5. [[#⛔Removing A Plugin]]

## Getting Started

This vault is designed to work with several community plugins. Install these from the Community Plugins section in Obsidian Settings:

All (adopted or testing) plugins marked as `Core Functionality` on the [[Plugins.base]] view should be installed to ensure the core features of the vault work.

Next it's recommended to install any plugins marked as `Quality of Life` and `Style`. These plugins will make some features of the vault easier to use and modify the style and display of the notes respectively.

Finally, you may choose to install the `Vault Management` plugins if you need to do large scale administration tasks.

## 🔃Workflow

### 🔍 Discovering Plugin Documentation

Start with the [[Plugins.base]].

### ✨ Installing a New Plugin

1. Create a new note in `002 meta/pugins/plugins`
	1. It should be named according to the Plugin Name
2. Set the following properties on the Notes
	1. `note_type`: `meta_plugin`
	2. `meta_plugin_status`: 
		1. ✔️ - Adopted
		2. ❌ - Disabled
		3. 🧪 - Testing

#### 📃Plugin Note Template

See [[plugin_template]].

#### 🧪 Testing a Plugin

Set the `meta_plugin_status` property to be 🧪(testing). Add a note explaining what is being tested using the following styling:

> [!tip] Testing
> Still working on getting the right configuration that doesn't add too much friction.

### ⛔Removing A Plugin

Update the `meta_plugin_status` property to be ❌ (disabled). Add a note explaining why the plugin was removed using the following styling:

> [!danger] Uninstalled or Disabled
> Removed because it wasn't working well for me.

## ⚙️Meta

### 🔩 Properties

| Property                  | Values                                 | Description                                                               |
| ------------------------- | -------------------------------------- | ------------------------------------------------------------------------- |
| Plugin Status             | ✔️ Adopted<br>❌ Disabled<br>🧪 Testing | Identifies the status of the plugin, either Testing, Adopted, or Disabled |
| Plugin Core Functionality | true/false                             | Plugin provides core functionality for the vault to work                  |
| Plugin QoL                | true/false                             | Plugin provides quality of life features                                  |
| Plugin Style              | true/false                             | Plugin provides style enhancements or changes                             |
| Plugin Vault Management   | true/false                             | Plugin provides tools for managing vault data                             |
|                           |                                        |                                                                           |

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
- [[plugin_template]]
