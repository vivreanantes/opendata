
<%@ page import="van.socle.geolocalisation.Adresse" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="mainTri">
		<g:set var="entityName" value="${message(code: 'adresse.label', default: 'Adresse')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-adresse" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-adresse" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
				<thead>
					<tr>
					
						<g:sortableColumn property="adresse1" title="${message(code: 'adresse.adresse1.label', default: 'Adresse1')}" />
					
						<g:sortableColumn property="adresse2" title="${message(code: 'adresse.adresse2.label', default: 'Adresse2')}" />
					
						<g:sortableColumn property="adresse3" title="${message(code: 'adresse.adresse3.label', default: 'Adresse3')}" />
					
						<g:sortableColumn property="adresse4" title="${message(code: 'adresse.adresse4.label', default: 'Adresse4')}" />
					
						<g:sortableColumn property="codePostal" title="${message(code: 'adresse.codePostal.label', default: 'Code Postal')}" />
					
						<th><g:message code="adresse.ville.label" default="Ville" /></th>
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${adresseInstanceList}" status="i" var="adresseInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${adresseInstance.id}">${fieldValue(bean: adresseInstance, field: "adresse1")}</g:link></td>
					
						<td>${fieldValue(bean: adresseInstance, field: "adresse2")}</td>
					
						<td>${fieldValue(bean: adresseInstance, field: "adresse3")}</td>
					
						<td>${fieldValue(bean: adresseInstance, field: "adresse4")}</td>
					
						<td>${fieldValue(bean: adresseInstance, field: "codePostal")}</td>
					
						<td>${fieldValue(bean: adresseInstance, field: "ville")}</td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${adresseInstanceTotal}" />
			</div>
		</div>
	</body>
</html>
