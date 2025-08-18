---
tags:
  - meeting/1_1
---
<%*
	let filename = tp.file.title;
	let splitOnSpaces = filename.split(" ");
	 let personName = splitOnSpaces[1] + " " + splitOnSpaces[2];
%># 📆 <%filename%>
**Description:** 1:1
**People:** [[<%personName%>]]

## 🔮Outcomes


## 📢Agenda

<%tp.file.cursor()%>

## ✍ Notes