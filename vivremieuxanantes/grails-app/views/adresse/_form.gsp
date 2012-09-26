<%@ page import="van.socle.geolocalisation.Adresse" %>



<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'adresse1', 'error')} ">
	<label for="adresse1">
		<g:message code="adresse.adresse1.label" default="Adresse1" />
		
	</label>
	<g:textField name="adresse1" value="${adresseInstance?.adresse1}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'adresse2', 'error')} ">
	<label for="adresse2">
		<g:message code="adresse.adresse2.label" default="Adresse2" />
		
	</label>
	<g:textField name="adresse2" value="${adresseInstance?.adresse2}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'adresse3', 'error')} ">
	<label for="adresse3">
		<g:message code="adresse.adresse3.label" default="Adresse3" />
		
	</label>
	<g:textField name="adresse3" value="${adresseInstance?.adresse3}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'adresse4', 'error')} ">
	<label for="adresse4">
		<g:message code="adresse.adresse4.label" default="Adresse4" />
		
	</label>
	<g:textField name="adresse4" value="${adresseInstance?.adresse4}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'codePostal', 'error')} ">
	<label for="codePostal">
		<g:message code="adresse.codePostal.label" default="Code Postal" />
		
	</label>
	<g:textField name="codePostal" value="${adresseInstance?.codePostal}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'ville', 'error')} required">
	<label for="ville">
		<g:message code="adresse.ville.label" default="Ville" />
		<span class="required-indicator">*</span>
	</label>
	<g:select id="ville" name="ville.id" from="${van.socle.geolocalisation.Ville.list()}" optionKey="id" required="" value="${adresseInstance?.ville?.id}" class="many-to-one"/>
</div>

