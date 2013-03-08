
<%@ page import="com.van.trieranantes.dechet.Dechet" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'dechet.label', default: 'Dechet')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-dechet" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-dechet" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
				<thead>
					<tr>
					
						<g:sortableColumn property="code" title="${message(code: 'dechet.code.label', default: 'Code')}" />
					
						<g:sortableColumn property="nom" title="${message(code: 'dechet.nom.label', default: 'Nom')}" />
					
						<g:sortableColumn property="description" title="${message(code: 'dechet.description.label', default: 'Description')}" />
					
						<th><g:message code="dechet.categorieTraitement.label" default="Categorie Traitement" /></th>
					
						<th><g:message code="dechet.categorieUsuelle.label" default="Categorie Usuelle" /></th>
					
						<g:sortableColumn property="nomFichier" title="${message(code: 'dechet.nomFichier.label', default: 'Nom Fichier')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${dechetInstanceList}" status="i" var="dechetInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${dechetInstance.id}">${fieldValue(bean: dechetInstance, field: "code")}</g:link></td>
					
						<td>${fieldValue(bean: dechetInstance, field: "nom")}</td>
					
						<td>${fieldValue(bean: dechetInstance, field: "description")}</td>
					
						<td>${fieldValue(bean: dechetInstance, field: "categorieTraitement")}</td>
					
						<td>${fieldValue(bean: dechetInstance, field: "categorieUsuelle")}</td>
					
						<td>${fieldValue(bean: dechetInstance, field: "nomFichier")}</td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${dechetInstanceTotal}" />
			</div>
		</div>
	</body>
</html>
