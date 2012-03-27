<%@ page import="com.van.socle.Town" %>



<div class="fieldcontain ${hasErrors(bean: communeInstance, field: 'nomCommune', 'error')} ">
	<label for="nomCommune">
		<g:message code="commune.nomCommune.label" default="Nom Commune" />
		
	</label>
	<g:textField name="nomCommune" value="${communeInstance?.nomCommune}"/>
</div>

