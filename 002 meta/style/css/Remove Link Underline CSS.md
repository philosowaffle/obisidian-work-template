---
Navigate:
  - "[[Custom CSS.base|Go to all Custom CSS]]"
Enabled: ✔️
Source File: C:\Users\baile\SourceControl\obisidian-work-template\.obsidian\snippets\remove_link_underline.css
tags: [style/css]
---
# Remove Link Underline CSS

[Source File](file:///C:/Users/baile/SourceControl/obisidian-work-template/.obsidian/snippets/remove_link_underline.css)

- Internal links have no underline
- External links have underline

```css
.markdown-preview-view .external-link {
    text-decoration: none;
}

/* << Live Preview >> */
.markdown-source-view.mod-cm6.is-live-preview .cm-link .cm-underline {
    text-decoration: none;
}
```


## Example

- [[README]] - local link
- ()_