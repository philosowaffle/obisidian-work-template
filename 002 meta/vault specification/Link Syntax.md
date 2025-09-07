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
