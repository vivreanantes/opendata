<%@ page import="com.van.trieranantes.dechet.Conseil" %>



<div class="fieldcontain ${hasErrors(bean: conseilInstance, field: 'code', 'error')} ">
	<label for="code">
		<g:message code="conseil.code.label" default="Code" />
		
	</label>
	<g:textField name="code" value="${conseilInstance?.code}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: conseilInstance, field: 'description', 'error')} ">
	<label for="description">
		<g:message code="conseil.description.label" default="Description" />
		
	</label>
	<g:textField name="description" value="${conseilInstance?.description}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: conseilInstance, field: 'nom', 'error')} ">
	<label for="nom">
		<g:message code="conseil.nom.label" default="Nom" />
		
	</label>
	<g:textField name="nom" value="${conseilInstance?.nom}"/>
</div>

