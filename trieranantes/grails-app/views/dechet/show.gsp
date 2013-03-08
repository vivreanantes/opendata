
<%@ page import="com.van.trieranantes.dechet.Dechet" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'dechet.label', default: 'Dechet')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-dechet" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-dechet" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list dechet">
			
				<g:if test="${dechetInstance?.code}">
				<li class="fieldcontain">
					<span id="code-label" class="property-label"><g:message code="dechet.code.label" default="Code" /></span>
					
						<span class="property-value" aria-labelledby="code-label"><g:fieldValue bean="${dechetInstance}" field="code"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${dechetInstance?.nom}">
				<li class="fieldcontain">
					<span id="nom-label" class="property-label"><g:message code="dechet.nom.label" default="Nom" /></span>
					
						<span class="property-value" aria-labelledby="nom-label"><g:fieldValue bean="${dechetInstance}" field="nom"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${dechetInstance?.description}">
				<li class="fieldcontain">
					<span id="description-label" class="property-label"><g:message code="dechet.description.label" default="Description" /></span>
					
						<span class="property-value" aria-labelledby="description-label"><g:fieldValue bean="${dechetInstance}" field="description"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${dechetInstance?.categorieTraitement}">
				<li class="fieldcontain">
					<span id="categorieTraitement-label" class="property-label"><g:message code="dechet.categorieTraitement.label" default="Categorie Traitement" /></span>
					
						<span class="property-value" aria-labelledby="categorieTraitement-label"><g:link controller="categorieTraitement" action="show" id="${dechetInstance?.categorieTraitement?.id}">${dechetInstance?.categorieTraitement?.encodeAsHTML()}</g:link></span>
					
				</li>
				</g:if>
			
				<g:if test="${dechetInstance?.categorieUsuelle}">
				<li class="fieldcontain">
					<span id="categorieUsuelle-label" class="property-label"><g:message code="dechet.categorieUsuelle.label" default="Categorie Usuelle" /></span>
					
						<span class="property-value" aria-labelledby="categorieUsuelle-label"><g:link controller="categorieUsuelle" action="show" id="${dechetInstance?.categorieUsuelle?.id}">${dechetInstance?.categorieUsuelle?.encodeAsHTML()}</g:link></span>
					
				</li>
				</g:if>
			
				<g:if test="${dechetInstance?.nomFichier}">
				<li class="fieldcontain">
					<span id="nomFichier-label" class="property-label"><g:message code="dechet.nomFichier.label" default="Nom Fichier" /></span>
					
						<span class="property-value" aria-labelledby="nomFichier-label"><g:fieldValue bean="${dechetInstance}" field="nomFichier"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${dechetInstance?.conseils}">
				<li class="fieldcontain">
					<span id="conseils-label" class="property-label"><g:message code="dechet.conseils.label" default="Conseils" /></span>
					
						<g:each in="${dechetInstance.conseils}" var="c">
						<span class="property-value" aria-labelledby="conseils-label"><g:link controller="conseil" action="show" id="${c.id}">${c?.encodeAsHTML()}</g:link></span>
						</g:each>
					
				</li>
				</g:if>
			
				<g:if test="${dechetInstance?.estRecyclable}">
				<li class="fieldcontain">
					<span id="estRecyclable-label" class="property-label"><g:message code="dechet.estRecyclable.label" default="Est Recyclable" /></span>
					
						<span class="property-value" aria-labelledby="estRecyclable-label"><g:formatBoolean boolean="${dechetInstance?.estRecyclable}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${dechetInstance?.estVerifie}">
				<li class="fieldcontain">
					<span id="estVerifie-label" class="property-label"><g:message code="dechet.estVerifie.label" default="Est Verifie" /></span>
					
						<span class="property-value" aria-labelledby="estVerifie-label"><g:formatBoolean boolean="${dechetInstance?.estVerifie}" /></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form>
				<fieldset class="buttons">
					<g:hiddenField name="id" value="${dechetInstance?.id}" />
					<g:link class="edit" action="edit" id="${dechetInstance?.id}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
