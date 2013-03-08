
<%@ page import="com.van.trieranantes.dechet.CategorieUsuelle" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-categorieUsuelle" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-categorieUsuelle" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list categorieUsuelle">
			
				<g:if test="${categorieUsuelleInstance?.code}">
				<li class="fieldcontain">
					<span id="code-label" class="property-label"><g:message code="categorieUsuelle.code.label" default="Code" /></span>
					
						<span class="property-value" aria-labelledby="code-label"><g:fieldValue bean="${categorieUsuelleInstance}" field="code"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${categorieUsuelleInstance?.nom}">
				<li class="fieldcontain">
					<span id="nom-label" class="property-label"><g:message code="categorieUsuelle.nom.label" default="Nom" /></span>
					
						<span class="property-value" aria-labelledby="nom-label"><g:fieldValue bean="${categorieUsuelleInstance}" field="nom"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${categorieUsuelleInstance?.description}">
				<li class="fieldcontain">
					<span id="description-label" class="property-label"><g:message code="categorieUsuelle.description.label" default="Description" /></span>
					
						<span class="property-value" aria-labelledby="description-label"><g:fieldValue bean="${categorieUsuelleInstance}" field="description"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${categorieUsuelleInstance?.sousCategories}">
				<li class="fieldcontain">
					<span id="sousCategories-label" class="property-label"><g:message code="categorieUsuelle.sousCategories.label" default="Sous Categories" /></span>
					
						<g:each in="${categorieUsuelleInstance.sousCategories}" var="s">
						<span class="property-value" aria-labelledby="sousCategories-label"><g:link controller="categorieUsuelle" action="show" id="${s.id}">${s?.encodeAsHTML()}</g:link></span>
						</g:each>
					
				</li>
				</g:if>
			
				<g:if test="${categorieUsuelleInstance?.conseils}">
				<li class="fieldcontain">
					<span id="conseils-label" class="property-label"><g:message code="categorieUsuelle.conseils.label" default="Conseils" /></span>
					
						<g:each in="${categorieUsuelleInstance.conseils}" var="c">
						<span class="property-value" aria-labelledby="conseils-label"><g:link controller="conseil" action="show" id="${c.id}">${c?.encodeAsHTML()}</g:link></span>
						</g:each>
					
				</li>
				</g:if>
			
				<g:if test="${categorieUsuelleInstance?.estSousCategorie}">
				<li class="fieldcontain">
					<span id="estSousCategorie-label" class="property-label"><g:message code="categorieUsuelle.estSousCategorie.label" default="Est Sous Categorie" /></span>
					
						<span class="property-value" aria-labelledby="estSousCategorie-label"><g:formatBoolean boolean="${categorieUsuelleInstance?.estSousCategorie}" /></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form>
				<fieldset class="buttons">
					<g:hiddenField name="id" value="${categorieUsuelleInstance?.id}" />
					<g:link class="edit" action="edit" id="${categorieUsuelleInstance?.id}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
