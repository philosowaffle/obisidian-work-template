# Todo Tasks

1. A Task is created using the syntax: `- [ ] something to do`
	1. A native Task can have the following statuses:
		1. `- [ ]` todo
		2. `- [x]` done
	2. The theme [[Tasks Plugin]] provides additional statuses that may be style based on the chosen theme:
		1. `- [/]` in progress
		2. `- [-]` cancelled
		3. `- [!]` important
		4. `- [?]` question
		5. A full list can be found in the [Tasks](Vault%20Plugins.md#Tasks) plugin settings page under `Custom Statuses`
	3. The [Tasks](Vault%20Plugins.md#Tasks) plugin will provide auto-complete suggestions. 
		1. The following **must** be specified when creating a task
			1. `priority` - `[highest, high, medium, low, lowest]`
		2. The following *may* be specified on a task
			1. `due`
	4. On completion, the [Tasks](Vault%20Plugins.md#Tasks) plugin will automatically add a Completed date to the task
2. A Task **must** be organized in one of the following ways
	1. [[Periodic Notes#✨ Creating the Daily Note|Daily Notes]]
		1. These are the tasks that come up every day and will require action or re-organization within the next 1-2weeks
	2. Tagged to a [[Project Notes]]
		1. These are tasks associated directly with completing an active Project
		2. The task **must** include `#project_projectName`
	3. Area Note
		1. Added to an Area Note
		2. This are reserved for lowest priority tasks that you have no immediate intent to act on
		3. Think of these like Backlog items
	4. Scheduled Tasks
		1. Scheduled tasks may live in `002 meta/vault data/recurring tasks`
