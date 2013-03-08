<%@ page import="com.van.trieranantes.dechet.Dechet" %>



<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'code', 'error')} ">
	<label for="code">
		<g:message code="dechet.code.label" default="Code" />
		
	</label>
	<g:textField name="code" value="${dechetInstance?.code}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'nom', 'error')} ">
	<label for="nom">
		<g:message code="dechet.nom.label" default="Nom" />
		
	</label>
	<g:textField name="nom" value="${dechetInstance?.nom}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'description', 'error')} ">
	<label for="description">
		<g:message code="dechet.description.label" default="Description" />
		
	</label>
	<g:textField name="description" value="${dechetInstance?.description}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'categorieTraitement', 'error')} required">
	<label for="categorieTraitement">
		<g:message code="dechet.categorieTraitement.label" default="Categorie Traitement" />
		<span class="required-indicator">*</span>
	</label>
	<g:select id="categorieTraitement" name="categorieTraitement.id" from="${com.van.trieranantes.dechet.CategorieTraitement.list()}" optionKey="id" required="" value="${dechetInstance?.categorieTraitement?.id}" class="many-to-one"/>
</div>

<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'categorieUsuelle', 'error')} required">
	<label for="categorieUsuelle">
		<g:message code="dechet.categorieUsuelle.label" default="Categorie Usuelle" />
		<span class="required-indicator">*</span>
	</label>
	<g:select id="categorieUsuelle" name="categorieUsuelle.id" from="${com.van.trieranantes.dechet.CategorieUsuelle.list()}" optionKey="id" required="" value="${dechetInstance?.categorieUsuelle?.id}" class="many-to-one"/>
</div>

<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'nomFichier', 'error')} ">
	<label for="nomFichier">
		<g:message code="dechet.nomFichier.label" default="Nom Fichier" />
		
	</label>
	<g:textField name="nomFichier" value="${dechetInstance?.nomFichier}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'conseils', 'error')} ">
	<label for="conseils">
		<g:message code="dechet.conseils.label" default="Conseils" />
		
	</label>
	<g:select name="conseils" from="${com.van.trieranantes.dechet.Conseil.list()}" multiple="multiple" optionKey="id" size="5" value="${dechetInstance?.conseils*.id}" class="many-to-many"/>
</div>

<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'estRecyclable', 'error')} ">
	<label for="estRecyclable">
		<g:message code="dechet.estRecyclable.label" default="Est Recyclable" />
		
	</label>
	<g:checkBox name="estRecyclable" value="${dechetInstance?.estRecyclable}" />
</div>

<div class="fieldcontain ${hasErrors(bean: dechetInstance, field: 'estVerifie', 'error')} ">
	<label for="estVerifie">
		<g:message code="dechet.estVerifie.label" default="Est Verifie" />
		
	</label>
	<g:checkBox name="estVerifie" value="${dechetInstance?.estVerifie}" />
</div>

