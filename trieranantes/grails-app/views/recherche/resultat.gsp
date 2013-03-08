<meta name="layout" content="mainTri">

<div id="searchresults">
<h1>Résultats de recherche : <span class="keywords">${keywords}</span></h1>


<g:each var="element" in="${resultatsRecherche}">   
	<div class="categorie"><g:link controller="CategorieUsuelle" action="listeDechets" id="${element[0].id}">${element[0].nom}</g:link></div>
	<g:each var="dechet" in="${element[1]}"> 
		<div class="result">
			<div class="picto"><r:img uri="${dechet.nomFichier}"/></div>
			<div class="item">
				<div class="intro">
						<h2>${dechet.nom}</h2>
				</div>
			</div>
			<div class="picto_recyclable_${dechet.estRecyclable}"></div>
			<div class="spacer"></div>
		</div>
	</g:each>
</g:each>
</div>