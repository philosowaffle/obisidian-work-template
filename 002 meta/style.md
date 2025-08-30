# Callouts

> [!info] +/- can be used to default the expand state of a callout

> [!note]-
> this is a note

> [!abstract]

> [!todo]

> [!tip]

> [!success]

> [!question]

> [!warning]

> [!failure]

> [!danger]

> [!bug]

> [!example]

> [!quote]

```
> [!note]+ Title
> content
```

If no content is provided then you get a Title only callout.

> block quotes 
> example

# List Callouts

- Here is a list
	- !: warning
	- !!: stronger warning
	- !!!: danger
	- Q: question
	- A: answer
	- &: decision
	- %: these can be customized in settings

# Tasks

- [ ] `space` Unchecked #task/ignore
- [/] `/` In Progress #task/ignore
- [x] #task `x` Checked 

**Non_Tasks**
- [>] #task `>` Rescheduled 
- [<] #task `<` Scheduled 
- [!] #task `!` Important #task/ignore
- [-] #task `-` Cancelled 
- [?] #task `?` Question 
- [*] #task `*` Star 
- [n] #task `n` Note 
- [l] #task `l` Location
- [i] #task `i` Information 
- [I] #task `I` Idea 
- [S] #task `S` Amount 
- [p] #task `p` Pro 
- [c] #task `c` Con 
- [b] #task `b` Bookmark 
- ["] #task `"` Quote 
- [0] adsfdsf
- [1] asdfasdf
- [2] asfasdf 

Extra styling provided by the [AnuPpucin](#AnuPpucin) theme.

# Text

Provided by Theme configuration.

**bold**
*italics*

# H1

Provided by Theme configuration.

## H2

### H3

#### H4

##### H5

###### H6

# Link Styles

Provided by `remove_link_underline.css`

[preview example](vault%20plugins/plugins.md)

# Theme Notes

## AnuPpucin

Currently using AnuPpuccin.

# Custom Css

Custom styles live in: `.obsidian/snippets`

## MCL Multi-Column CSS

> [!info] [Source](https://github.com/efemkay/obsidian-modular-css-layout)

Used heavily in [Daily Note](Note%20Specification/Daily%20Note.md) template.

### Multi-column Callouts

> [!multi-column]
> 
> > [!note]+ Use Case
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> > ##### User Case Background
> > Vitae nunc sed velit dignissim sodales. In cursus turpis massa tincidunt dui ut ornare lectus.
> 
> > [!warning]+ Resources
> > #### Requirement
> > - Lorem ipsum dolor sit amet
> > - Vitae nunc sed velit dignissim sodales.
> > - In cursus turpis massa tincidunt dui ut ornare lectus.
> 
> > [!todo]+
> > - [x] Define Use Case
> > - [x] Craft User Story
> > - [x] Develop draft sketches

```
> [!multi-column]
>
>> [!note]+ Use Case
>> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
>> ##### User Case Background
>> Vitae nunc sed velit dignissim sodales. In cursus turpis massa tincidunt dui ut ornare lectus.
>
>> [!warning]+ Resources
>> #### Requirement
>> - Lorem ipsum dolor sit amet
>> - Vitae nunc sed velit dignissim sodales.
>> - In cursus turpis massa tincidunt dui ut ornare lectus.
>
>> [!todo]+
>> - [x] Define Use Case
>> - [ ] Craft User Story
>> - [ ] Develop draft sketches
```

### List column/grid

> [!blank]
> - #### Core Work #mcl/list-grid
>   - Collaboration with Jane
>   - adfadf
> - #### Learning & System
>   - adfadf
> - #### Personal
>   - adsfadf

```
> [!blank]
> - #### Core Work #mcl/list-grid
>   - [[00 Home|Main Goal 1]]
>   - [[00 Home|Main Goal 2]]
>   - [[00 Home|Main Goal 3]]
>       - Collaboration with Jane
>   - [[00 Home|Main Goal 4]]
> - #### Learning & System
>   - [[00 Home|Learning Goal 1]]
>   - [[00 Home|Initiative 1]]
>   - [[00 Home|Initiative 2]]
> - #### Personal
>   - [[00 Home|Personal Goal 1]]
>   - [[00 Home|Personal Goal 2]]
```

### With Dataview

```
> [!multi-column]
> 
> > [!warning]- Past Due
> > ```tasks
> > not done
> > due before today
> > folder includes journal
> > sort by priority, due
> > hide edit button
> > short mode
> > ```
>
> > [!todo]- Due Today
> > ```tasks
> > not done
> > due today
> > folder includes journal
> > sort by priority, due
> > hide edit button
> > short mode
> > ```
```
