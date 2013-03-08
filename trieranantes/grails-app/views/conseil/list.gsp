
<%@ page import="com.van.trieranantes.dechet.Conseil" %>
<!doctype html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'conseil.label', default: 'Conseil')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-conseil" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-conseil" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
				<thead>
					<tr>
					
						<g:sortableColumn property="code" title="${message(code: 'conseil.code.label', default: 'Code')}" />
					
						<g:sortableColumn property="description" title="${message(code: 'conseil.description.label', default: 'Description')}" />
					
						<g:sortableColumn property="nom" title="${message(code: 'conseil.nom.label', default: 'Nom')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${conseilInstanceList}" status="i" var="conseilInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${conseilInstance.id}">${fieldValue(bean: conseilInstance, field: "code")}</g:link></td>
					
						<td>${fieldValue(bean: conseilInstance, field: "description")}</td>
					
						<td>${fieldValue(bean: conseilInstance, field: "nom")}</td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${conseilInstanceTotal}" />
			</div>
		</div>
	</body>
</html>
