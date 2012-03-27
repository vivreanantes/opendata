
<%@ page import="com.van.socle.Adress" %>
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
			
				<g:if test="${adresseInstance?.adresseCompleteRenseignee}">
				<li class="fieldcontain">
					<span id="adresseCompleteRenseignee-label" class="property-label"><g:message code="adresse.adresseCompleteRenseignee.label" default="Adresse Complete Renseignee" /></span>
					
						<span class="property-value" aria-labelledby="adresseCompleteRenseignee-label"><g:fieldValue bean="${adresseInstance}" field="adresseCompleteRenseignee"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.codePostal}">
				<li class="fieldcontain">
					<span id="codePostal-label" class="property-label"><g:message code="adresse.codePostal.label" default="Code Postal" /></span>
					
						<span class="property-value" aria-labelledby="codePostal-label"><g:fieldValue bean="${adresseInstance}" field="codePostal"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.commune}">
				<li class="fieldcontain">
					<span id="commune-label" class="property-label"><g:message code="adresse.commune.label" default="Commune" /></span>
					
						<span class="property-value" aria-labelledby="commune-label"><g:link controller="town" action="show" id="${adresseInstance?.commune?.id}">${adresseInstance?.commune?.encodeAsHTML()}</g:link></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.nomVoie}">
				<li class="fieldcontain">
					<span id="nomVoie-label" class="property-label"><g:message code="adresse.nomVoie.label" default="Nom Voie" /></span>
					
						<span class="property-value" aria-labelledby="nomVoie-label"><g:fieldValue bean="${adresseInstance}" field="nomVoie"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${adresseInstance?.numero}">
				<li class="fieldcontain">
					<span id="numero-label" class="property-label"><g:message code="adresse.numero.label" default="Numero" /></span>
					
						<span class="property-value" aria-labelledby="numero-label"><g:fieldValue bean="${adresseInstance}" field="numero"/></span>
					
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
