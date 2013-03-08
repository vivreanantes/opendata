<h3>Recherche</h3>


<g:form name="formRecherche" controller="recherche" action="resultat">
<g:textField name="keywords"/>
<input type="submit" value="Rechercher"/>

<div class="filtres">
<div class="checkbox_multichoix"><input type="checkbox" name="filtre_type" id="filtre_type_plastique" value="plastique"></div>
<label for="filtre_type_plastique">Plastique</label><br/>

<div class="checkbox_multichoix"><input type="checkbox" name="filtre_type" id="filtre_type_toxique" value="toxique"></div>
<label for="filtre_type_toxique">Toxique</label><br/>

<div class="checkbox_multichoix"><input type="checkbox" name="filtre_type" id="filtre_type_toxique" value="toxique"></div>
<label for="filtre_type_toxique">Papiers / Carton</label><br/>

<div class="checkbox_multichoix"><input type="checkbox" name="filtre_type" id="filtre_type_toxique" value="toxique"></div>
<label for="filtre_type_toxique">Electronique</label><br/>
</div>
</g:form>
