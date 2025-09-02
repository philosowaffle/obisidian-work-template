<%* 
	let filename = tp.file.title;
	let splitOnSpaces = filename.split(" ")
	let personName = splitOnSpaces[1] + " " + splitOnSpaces[2]
%>---
Description: 1:1 with <%personName%>]
Meeting Datetime: <% tp.file.creation_date() %>
Meeting Attendees:
  - "[[<%personName%>]]"
tags:
  - meeting/recurring/1_1
---
# 📆 <%filename%>

## 🔮 Outcomes

## 📢 Agenda

## ✍ Notes
