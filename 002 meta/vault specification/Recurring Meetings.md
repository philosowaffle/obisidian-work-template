# Recurring Meetings

## ✨ Creating a New Recurring Meeting

1. Create a Meeting Template in `004 meta/templates/meeting_template`
	1. It should be named `meeting_recurring_<meeting name>`
	2. Follow the existing examples
2. Add a Quick Add action for this meeting
	1. Place it under the Meeting Group
	2. Ensure it uses the 🔄 Icon
3. Create a Folder note in `040 archives/Meetings/Recurring/<Meeting Name>`
4. Create a MOC note in `020 areas/Recurring Meetings/<Meeting Name>`

### 🗒 Recurring Meeting Template

```
---
tags:
  - meeting/recurring/<meeting_name>
---
// use rest of template from Generic Meeting


```

### 🗒 Recurring Meeting Moc Template

```
# <Meeting Name>
> [!info]-
> Weekly sync owned by [Person].
> I setup a weekly meeting for us to talk about any subjects that are important. I'll send an agenda ahead of time. And cancel if we don't need it.

```dataview
TABLE WITHOUT ID file.link AS "Meetings", dateformat(file.ctime, "yyyy-MM-dd") as "Date"
from #meeting/recurring/internal_meetic_convergence_weekly
sort file.name ascending
```

## ⛔ Removing a Recurring Meeting

1. Delete the template from `004 meta/templates/meeting_template`
2. Delete the Quick Add option
3. Move the Moc note `020 areas/Recurring Meetings/<Meeting Name>` into `040 archives/Meetings/Recurring/<Meeting Name>`
