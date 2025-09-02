<%* 

	let filename = tp.file.title;
	let tag = "#feature";
	let icon = "🧱";
	let folder = "030 resources/";
	if ( filename.startsWith("Untitled") ) 
	{ 	
		name = await tp.system.prompt("Feature Name: ");	
		tag = "feature/" + name.toLowerCase().replaceAll(' ', '_');

		filename = name + " Feature";		
		await tp.file.rename(filename);
		tp.file.move(folder + filename);
	}
	featureId = await tp.system.prompt("luProdFeatureId: ");
	tag = "#feature/" + filename.replaceAll(" Feature", "").replaceAll(" ", "_").toLowerCase();

%>---
Description:
aliases: []
created: <% tp.file.creation_date() %>
tags: [<%tag%> ]
Navigate:
  - "[[Features.base|Go to all Features]]"
aliases: []
---
# <% icon %> <% filename %>  

A feature that ....

> [!example]- links
> - FFS Link
> - Epic Link

# 🕐 Log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Feature Created**
