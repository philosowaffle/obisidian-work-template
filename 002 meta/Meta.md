# Meta

This folder contains meta information about the vault such as Standards and Practices, Templates, Views, Usage Documentation, and other information that is not directly related to the content of the vault. See [002 Meta](vault%20specification/Folder%20Organization.md#002%20Meta).

| Folder                | Base                        | Description                                                                              |
| --------------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| `plugins`             | [Plugins](plugins/Plugins.base)            | All notes related to plugins used in this vault                                          |
| `style`               | [Vault Style](style/Vault%20Style.md)             | Notes related to the style of the vault including custom css, themes, and icons.         |
| `templates`           | [Templates](templates/Templates.base)          | All templates used for creating notes in the vault                                       |
| `vault data`          | [Vault Data](vault%20data/Vault%20Data.md)              | Any data files used by other plugins or components to drive behavior can be stored here. |
| `vault specification` | [000 Vault Specification](vault%20specification/000%20Vault%20Specification.md) | Notes about how the vault is maintained and operated.                                    |
| `vault views`         | [Vault Views](vault%20views/Vault%20Views.md)             | For storing dynamic views that span across multiple areas of the vault.                  |

## Backup and Sync

1. Backed up via [Git Plugin](plugins/plugins/Git%20Plugin.md)
2. Backed up to private repo on GitHub enterprise
