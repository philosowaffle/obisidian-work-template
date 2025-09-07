# Link Syntax

Obsidian supports a few different syntaxes for building links.  

- Absolute Path
- Relative Path
- Wikilinks

This vault using **relative path links** for a few reasons:

- Natively supported in the Markdown spec, meaning they are most readily supported by other markdown editors and will work on GitHub
- Preserves links even on other systems with different file structures relative to the vault (absolute path would break if hosted on a non-C drive for example)

New links can be created using any link syntax and Obsidian will automatically convert it to a relative path link.

> [!danger]
> There are some cases where wikilinks must be used. The main one is the [Dataview Plugin](../plugins/plugins/Dataview%20Plugin.md), especially when querying for all files that link back to the current file.

## ⚠️Must Use WikiLinks

- [Dataview Plugin](../plugins/plugins/Dataview%20Plugin.md) queries
- [Note Properties](Note%20Properties.md)
- Links to files that don't exist yet
- [Templates](../templates/Templates.base) will also use wikilinks since we don't want to be hardcoding paths that could change in the template

## 🟢When You Can Use This Plugin

- Current note does not use a [Dataview](../plugins/plugins/Dataview%20Plugin.md) query that depends on links
- Current note does not have links in the [Note Properties](Note%20Properties.md)
- Current note does not link to non-existing notes
- Current note does not use `#heading` to link to specific heading within another noe

If a note does not meet all of this criteria then you *may* still use the plugin, just know that you will need to manually fix these cases within the note after the fact.
