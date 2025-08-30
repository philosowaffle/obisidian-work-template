# Folder Organization

Folder structure is inspired by [PARA](https://dannb.org/blog/2022/obsidian-daily-note-template/).

## 000 Inbox

1. This is the default landing location for all new content in the vault until it can be organized to a more appropriate place.
2. Content in this folder *should* be short lived.
3. Content in this folder **must** eventually be organized to an appropriate location.

## 001 Attachments

1. All vault attachments (such as images) are placed here by default.
2. Images *may* be relocated to a folder closer to the content that references it
3. Image files *should* be named in a meaningful and discoverable way

## 002 Meta

1. Notes about this vault
2. Decisions about vault workflows and usage *should* be documented here
3. Vault plugins *should* be documented here
4. Vault configuration *may* be documented here
5. Additional content, config, or rules that make the vault work *may* be placed here

> [!info]
> Documenting your note taking process may seem like a waste of time, but I think it satisfies one of my guiding principles: "*A notes system should be simple enough to empower you, not inhibit you."*
> 
> If your system is so complicated that you are overwhelmed by the idea of writing it down, then that's a red flag. If your system is so simple that you can't imagine why you'd need to write it down, then what's the harm in documenting it? Should take 5min.
> 
> I think there's a lot of value in trying to concretely describe how and why you do something. It can be very revealing as in introspective exercise and you might be surprised at what you find when you start retro-ing on your own perception of things.

## 010 Projects

1. Active [Project Note](Project%20Note.md)'s **must** be organized here
2. Supplemental content for an active project *may* be placed here
3. When a project requires more than one note, a subfolder for that project **must** be made and all of the project content placed inside of it
4. Upon completion, content **must** be organized to either [020 areas](#020%20areas), [030 resources](#030%20resources), or [040 archives](#040%20archives).

> [!info]
> The projects folder is definitely where I spend most of my time. Many of the projects I work on fall into one of three Categories so I like to organize them as such in sub folders. I have a template I use for these project notes that I'm continuing to iterate on, but I'll cover that in more detail in a later section.
> 
> The point of this folder is to always have quick access to the things I am currently, actively, responsible for in some fashion. "Responsible for" can be fairly broad, but generally if anything I work on is expected to take more than a day AND I expect someone will be asking me follow up questions about it, it get's a project note.
> 
> When a project is no longer active it leaves this folder and moves to the Archives folder. Sometimes, as a preliminary step I may refactor some information out to Resource notes. For example, if the project was to create a net new feature or to enhance an existing feature, I may go create a dedicated resource note for that Feature or update the existing one with information from this project before I archive the project.

## 020 Areas

1. Area folders **must** be organized here
2. Area's *may* represent any sphere of interest but generally represent areas of the company such as
	1. Teams, Codebases, Pods, etc.
3. Each Area **must** be represented by a single subfolder
4. Area's *should* represent jumping off points or home pages (such as MOC's and higher order notes), organizing resources from across the entire vault instead of attempting to store all relevant material in the Area's folder

| Area      | Description                                                                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Codebases | "Home Page" notes for various code bases. These tend to have things like links to their Repos, Builds, Wikis, and Admin tools. And sometimes they document specific codebase processes that should be followed. |
| Org       | Couple home page notes for our new fancy Org. E&E, E&E Core Product, E&E Platform Technology, various Brand Orgs, etc.                                                                                          |
| People    | One note per person, my own personal org chart                                                                                                                                                                  |
| Teams     | Similar to Codebases and People, Teams are an entity and I make home page notes for them too with relevant links and information about their processes.                                                         |

## 030 Resources

1. All content *may* live here
2. Notes from 3rd party (source material or literature) *may* live here

## 040 Archives

1. Any content that is no longer actively maintained or useful, or that is otherwise inactive, but is not ready to be deleted *may* be placed here
2. Completed [Project Note](Project%20Note.md)'s *should* be placed here

## 050 Gitignore

1. Any content that should not be made publicly available and checked into git
