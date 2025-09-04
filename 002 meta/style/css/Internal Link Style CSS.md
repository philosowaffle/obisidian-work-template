---
Navigate:
  - "[[Custom CSS.base|Go to all Custom CSS]]"
Enabled: true
Source File: .obsidian\snippets\internal_link_style.css
tags: [style/css]
---
# Internal Link Style CSS

[Source File](file:///C:/Users/baile/SourceControl/obisidian-work-template/.obsidian/snippets/remove_link_underline.css)

- Internal links have underline
- External links have no underline

```css
.cm-s-obsidian span.cm-link:not(:has(~ .external-link)) .cm-underline
{
  text-decoration: none !important;
}

span.cm-hmd-internal-link a
{
  text-decoration: none !important;
}
```

## Example

- [[README]] - local link
- [Google](https://www.google.com)

## From Old Mac

```css
.markdown-preview-view .external-link {
    text-decoration: none;
}

/* << Live Preview >> */
.markdown-source-view.mod-cm6.is-live-preview .cm-link .cm-underline {
    text-decoration: none;
}
```
