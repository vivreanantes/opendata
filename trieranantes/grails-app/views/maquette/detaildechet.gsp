<meta name="layout" content="mainTri">

<!-- Template détail déchet  -->

<div id="detaildechet">	
<div class="categorie"><g:link action="resultatRecherche">Verre</g:link></div>	
<div class="result">
	<div class="picto"><r:img uri="/images/content/dechets/thumb/bouteille_biere_petit2.png"/></div>
	<div class="item">
		<div class="intro">
				<h2>Bouteille en verre</h2>
				<div class="description">
				Description du déchet<br>
                                <b>Conseils : </b>Ne pas mettre de bouchon ni de couvercle. Pour plus d'informations consulter <a style="color:#555">Recyclage des différents types de verre</a>.
				</div>				
		</div>
		<div class="plus">
		<ul>
			<li>Modes de collecte : <a>conteneurs à verre</a>, <a>décheterie</a></li>
		</ul>
		</div>
	</div>
	<div class="picto_recyclable_on"></div>
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