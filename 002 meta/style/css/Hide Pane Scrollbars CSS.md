---
Navigate:
  - "[[Custom CSS.base|Go to all Custom CSS]]"
Enabled: true
Source File: .obsidian\snippets\hide-pane-scrollbars.css
tags: [style/css]
---
# Hide Pane Scrollbars CSS

Hides the scroll bars on the left and right panes.

```css
div.mod-left-split:not(.native-scrollbars) ::-webkit-scrollbar {
width: 0px;
    height: 0px;
}

div.mod-right-split:not(.native-scrollbars) ::-webkit-scrollbar {
width: 0px;
    height: 0px;
}
```
