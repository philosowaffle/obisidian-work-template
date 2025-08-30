---
created: <% tp.file.creation_date() %>
tags: []
aliases: []
---

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

%># <% icon %> <% filename %>  
<%tag%> **luProdFeatureId:** (luProdFeatureId:: <% featureId %>)

A [feature](../../030%20resources/User%20Features.md) that ..... <%tp.file.cursor()%>

> [!example]- links
> - FFS Link
> - Epic Link

# 🕐 Log

- [[<% tp.file.creation_date("YYYY-MM-DD")%>]]
	- **Feature Created**
