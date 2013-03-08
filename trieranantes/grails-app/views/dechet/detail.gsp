<meta name="layout" content="mainTri">

<!-- Template détail déchet  -->

<div id="detaildechet">	
<div class="categorie">
	<g:link controller="categorieUsuelle" action="listeDechets" id="1">${dechetInstance?.categorieUsuelle?.nom}</g:link>
</div>	
<div class="result">
	<div class="picto"><r:img uri="/images/content/dechets/thumb/bouteille_biere_petit2.png"/></div>
	<div class="item">
		<div class="intro">
				<h2>${dechetInstance?.nom}</h2>
				<div class="description">
					<p>${dechetInstance?.description}</p>
                    
                    <g:if test="${dechetInstance?.conseils?.size()>0}">
	                    <p><b>Conseils : </b></p>
						<ul>
		                    <g:each var="conseil" in="${dechetInstance?.conseils}">
		                    	<li>${conseil.libelle}</li>
		                    </g:each>
	                    </ul>
                    </g:if>    
				</div>				
		</div>
		<div class="plus">
			<ul>
				<li>Modes de collecte : <a>conteneurs à verre</a>, <a>décheterie</a></li>
			</ul>
		</div>
	</div>
	<tri:estRecyclable isRecy="${dechetInstance?.estRecyclable}" />
	<div class="spacer" style="padding-bottom:1em"></div>
	<div class="infos"><div class="pointscollecte">Points de collecte</div>
	
	<div class="pointcollecte"><r:img uri="/images/content/marker_bleu3.png"/> Conteneur à verre</div>
	<div class="pointcollecte"><r:img uri="/images/content/marker_vert.png"/> Décheterie</div>
	<div class="pointcollecte disabled"><r:img uri="/images/content/marker_orange.png"/> Autre point de collecte</div>
	
	</div>
	<!-- CONTAINER MAP -->
	<div id="map"></div>
       
    <script>
       	$(document).ready(function() {
       	displayMap(47.21607,-1.544781);
       	addMarkerAddress('rue de strasbourg 44000 nantes','bleu3');
    	addMarkerAddress('rue du calvaire 44000 nantes','bleu3');
    	addMarkerAddress('rue racine 44000 nantes','bleu3');
    	addMarkerAddress('40 rue bellamy 44000 nantes','vert');
    	//addMarkerAddress('rue crébillon 44000 nantes','orange');
    	//addMarkerAddress('rue descartes 44000 nantes','orange');
       	});
    </script>
    <div class="spacer"></div>
</div>
</div>