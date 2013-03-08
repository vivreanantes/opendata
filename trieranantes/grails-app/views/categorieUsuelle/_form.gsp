<%@ page import="com.van.trieranantes.dechet.CategorieUsuelle" %>



<div class="fieldcontain ${hasErrors(bean: categorieUsuelleInstance, field: 'code', 'error')} ">
	<label for="code">
		<g:message code="categorieUsuelle.code.label" default="Code" />
		
	</label>
	<g:textField name="code" value="${categorieUsuelleInstance?.code}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: categorieUsuelleInstance, field: 'nom', 'error')} ">
	<label for="nom">
		<g:message code="categorieUsuelle.nom.label" default="Nom" />
		
	</label>
	<g:textField name="nom" value="${categorieUsuelleInstance?.nom}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: categorieUsuelleInstance, field: 'description', 'error')} ">
	<label for="description">
		<g:message code="categorieUsuelle.description.label" default="Description" />
		
	</label>
	<g:textField name="description" value="${categorieUsuelleInstance?.description}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: categorieUsuelleInstance, field: 'sousCategories', 'error')} ">
	<label for="sousCategories">
		<g:message code="categorieUsuelle.sousCategories.label" default="Sous Categories" />
		
	</label>
	<g:select name="sousCategories" from="${com.van.trieranantes.dechet.CategorieUsuelle.list()}" multiple="multiple" optionKey="id" size="5" value="${categorieUsuelleInstance?.sousCategories*.id}" class="many-to-many"/>
</div>

<div class="fieldcontain ${hasErrors(bean: categorieUsuelleInstance, field: 'conseils', 'error')} ">
	<label for="conseils">
		<g:message code="categorieUsuelle.conseils.label" default="Conseils" />
		
	</label>
	<g:select name="conseils" from="${com.van.trieranantes.dechet.Conseil.list()}" multiple="multiple" optionKey="id" size="5" value="${categorieUsuelleInstance?.conseils*.id}" class="many-to-many"/>
</div>

<div class="fieldcontain ${hasErrors(bean: categorieUsuelleInstance, field: 'estSousCategorie', 'error')} ">
	<label for="estSousCategorie">
		<g:message code="categorieUsuelle.estSousCategorie.label" default="Est Sous Categorie" />
		
	</label>
	<g:checkBox name="estSousCategorie" value="${categorieUsuelleInstance?.estSousCategorie}" />
</div>

