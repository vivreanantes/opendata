<%@ page import="com.van.socle.Adress" %>



<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'adresseCompleteRenseignee', 'error')} ">
	<label for="adresseCompleteRenseignee">
		<g:message code="adresse.adresseCompleteRenseignee.label" default="Adresse Complete Renseignee" />
		
	</label>
	<g:textField name="adresseCompleteRenseignee" value="${adresseInstance?.adresseCompleteRenseignee}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'codePostal', 'error')} ">
	<label for="codePostal">
		<g:message code="adresse.codePostal.label" default="Code Postal" />
		
	</label>
	<g:textField name="codePostal" value="${adresseInstance?.codePostal}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'commune', 'error')} required">
	<label for="commune">
		<g:message code="adresse.commune.label" default="Commune" />
		<span class="required-indicator">*</span>
	</label>
	<g:select id="commune" name="commune.id" from="${com.van.socle.Town.list()}" optionKey="id" required="" value="${adresseInstance?.commune?.id}" class="many-to-one"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'nomVoie', 'error')} ">
	<label for="nomVoie">
		<g:message code="adresse.nomVoie.label" default="Nom Voie" />
		
	</label>
	<g:textField name="nomVoie" value="${adresseInstance?.nomVoie}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: adresseInstance, field: 'numero', 'error')} ">
	<label for="numero">
		<g:message code="adresse.numero.label" default="Numero" />
		
	</label>
	<g:textField name="numero" value="${adresseInstance?.numero}"/>
</div>

