
<%@ page import="com.van.trieranantes.dechet.CategorieUsuelle" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-categorieUsuelle" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-categorieUsuelle" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
				<thead>
					<tr>
					
						<g:sortableColumn property="code" title="${message(code: 'categorieUsuelle.code.label', default: 'Code')}" />
					
						<g:sortableColumn property="nom" title="${message(code: 'categorieUsuelle.nom.label', default: 'Nom')}" />
					
						<g:sortableColumn property="description" title="${message(code: 'categorieUsuelle.description.label', default: 'Description')}" />
					
						<g:sortableColumn property="estSousCategorie" title="${message(code: 'categorieUsuelle.estSousCategorie.label', default: 'Est Sous Categorie')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${categorieUsuelleInstanceList}" status="i" var="categorieUsuelleInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${categorieUsuelleInstance.id}">${fieldValue(bean: categorieUsuelleInstance, field: "code")}</g:link></td>
					
						<td>${fieldValue(bean: categorieUsuelleInstance, field: "nom")}</td>
					
						<td>${fieldValue(bean: categorieUsuelleInstance, field: "description")}</td>
					
						<td><g:formatBoolean boolean="${categorieUsuelleInstance.estSousCategorie}" /></td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${categorieUsuelleInstanceTotal}" />
			</div>
		</div>
	</body>
</html>
