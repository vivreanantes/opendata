
<%@ page import="van.socle.geolocalisation.Adresse" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'adresse.label', default: 'Adresse')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-adresse" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-adresse" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list adresse">
			
				<g:if test="${adresseInstance?.adresse1}">
				<li class="fieldcontain">
					<span id="adresse1-label" class="property-label"><g:message code="adresse.adresse1.label" default="Adresse1" /></span>
					
						<span class="property-value" aria-labelledby="adresse1-label"><g:fieldValue bean="${adresseInstance}" field="adresse1"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.adresse2}">
				<li class="fieldcontain">
					<span id="adresse2-label" class="property-label"><g:message code="adresse.adresse2.label" default="Adresse2" /></span>
					
						<span class="property-value" aria-labelledby="adresse2-label"><g:fieldValue bean="${adresseInstance}" field="adresse2"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.adresse3}">
				<li class="fieldcontain">
					<span id="adresse3-label" class="property-label"><g:message code="adresse.adresse3.label" default="Adresse3" /></span>
					
						<span class="property-value" aria-labelledby="adresse3-label"><g:fieldValue bean="${adresseInstance}" field="adresse3"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.adresse4}">
				<li class="fieldcontain">
					<span id="adresse4-label" class="property-label"><g:message code="adresse.adresse4.label" default="Adresse4" /></span>
					
						<span class="property-value" aria-labelledby="adresse4-label"><g:fieldValue bean="${adresseInstance}" field="adresse4"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.codePostal}">
				<li class="fieldcontain">
					<span id="codePostal-label" class="property-label"><g:message code="adresse.codePostal.label" default="Code Postal" /></span>
					
						<span class="property-value" aria-labelledby="codePostal-label"><g:fieldValue bean="${adresseInstance}" field="codePostal"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.ville}">
				<li class="fieldcontain">
					<span id="ville-label" class="property-label"><g:message code="adresse.ville.label" default="Ville" /></span>
					
						<span class="property-value" aria-labelledby="ville-label"><g:link controller="ville" action="show" id="${adresseInstance?.ville?.id}">${adresseInstance?.ville?.encodeAsHTML()}</g:link></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form>
				<fieldset class="buttons">
					<g:hiddenField name="id" value="${adresseInstance?.id}" />
					<g:link class="edit" action="edit" id="${adresseInstance?.id}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
