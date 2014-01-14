/**
 * Carte de l'application, permettant d'afficher les différents points d'intérét
 * Version Open Street Map
 * 
 * @author redebernardi
 */
Ext.define('VivreANantes.view.geo.MapOSM', {
			extend : 'VivreANantes.view.geo.LeafletMap',
			xtype : 'vanmaposm',		
			config : {
				title : 'Carte',
				iconCls : 'locate'
			},
			
			//this.map héritée de VivreANantes.view.geo.LeafletMap : ne pas toucher
			
			/* PRIVATE */
			overlayLayers : [],
     		overlayLayersHidden : [],
			mapParams : { latitude: 47.20607, longitude: -1.544781 , zoom: 14}, //Paramètres par défaut
			layermapping : [],
     		
     		init : function() {			
     			
     		//INFOS LAYERS
     		this.layermapping['modco_reemploi'] = { name : 'Réemploi' , iconurl : 'resources/icons/marker-icon-green.png' , label : '<img style="width:10%" src="resources/icons/marker-icon-green.png"> Réemploi' };
     		this.layermapping['modco_distrisac'] = { name : 'Distrisac' , iconurl : 'resources/icons/marker-icon-red.png' , label : '<img style="width:10%" src="resources/icons/marker-icon-red.png"> Distrisac' };
     		this.layermapping['modco_ecotox'] = { name : 'Ecotox' , iconurl : 'resources/icons/marker-icon-pink.png' , label : '<img style="width:10%" src="resources/icons/marker-icon-pink.png"> Ecotox' };
     		this.layermapping['modco_encombrants'] = { name : 'Encombrants' , iconurl : 'resources/icons/marker-icon-blue.png' , label : '<img style="width:10%" src="resources/icons/marker-icon-blue.png"> Encombrants' };
     		this.layermapping['modco_conteneur'] = { name : 'Conteneurs' , iconurl : 'resources/icons/marker-icon-brown.png' , label : '<img style="width:10%" src="resources/icons/marker-icon-brown.png"> Conteneurs' };
     			
	    	//INIT MAX BOUNDS (Nantes et agglo)
	    	//bounds = new L.LatLngBounds([47, -1.8], [47.4, -1.3]);
	    	//this.mapParams.maxBounds=bounds	
			this.map.setView(new L.LatLng(this.mapParams.latitude, this.mapParams.longitude), this.mapParams.zoom);
	    	
	    	//Base Tile Layer
	    	osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	    	osmAttrib='© Openstreetmap';
	    	osmLayer = new L.TileLayer(osmUrl,{minZoom:8,maxZoom:18,attribution:osmAttrib});  	
	    	osmLayer.addTo(this.map);
		
    		},
    		
    		
    	/* Ajout d'un point sur la carte
	 	* @param record Structure Ext.data.model 
	 	* 
	 	* 
	 	* */
    	addStructure : function (record) {
    	  	
    	//VERIFICATION que toutes les données nécessaires sont présentes
    	if (record.get('modesCollecte') != null && record.get('latitude') != null && record.get('longitude') != null) {

			modesCollecte=record.get('modesCollecte');
    		//CONVERSION NOM DU LAYER
    		var re=new RegExp("^smco_reemp.+$", "i");
    		if (re.test(modesCollecte)) modesCollecte='modco_reemploi'; 			
			
    		var re=new RegExp("^modco_cont.+$", "i");
    		if (re.test(modesCollecte)) modesCollecte='modco_conteneur';
    		
    		//FILTER STRUCTURES   		
    		if (modesCollecte!='modco_distrisac' && modesCollecte!='modco_ecotox' && modesCollecte!='modco_encombrants' && modesCollecte!='modco_reemploi'  && modesCollecte!='modco_conteneur' )  return;			

    		layerId=modesCollecte;
    		latitude=record.get('latitude');
    		longitude=record.get('longitude');
    		
    		popuptext=''; 		
    		if (record.get('libelle')!= null && record.get('adresseTemp')!= null) popuptext='<b>' + record.get('libelle') + '</b><br/>' + record.get('adresseTemp');
    		else if (record.get('libelle')!= null && record.get('adresseTemp')== null) popuptext='<b>' + record.get('libelle') + '</b>';
    		
    		//console.debug('ADD POINT ('+ latitude + ',' + longitude +') '+ popuptext);
    		
    		if (typeof this.overlayLayers[layerId] == 'undefined')
    		{			  	
    			
    			console.debug('CREATE layer '+layerId);
    			
    			myobj=this;
    			
    			// Layer
    			this.overlayLayers[layerId] = L.geoJson([], { 
    	    			
    	    		// PointToLayer
    	    		pointToLayer: function (feature, latlng) {						
				     		
				     		if (myobj.layermapping[feature.properties.type] != 'undefined') iconUrl=myobj.layermapping[feature.properties.type].iconurl;
				     		
				     		myIcon= L.icon({
							    iconUrl: iconUrl
							});
							finalMarker = L.marker(latlng, {icon: myIcon});
							
							return finalMarker;
							
				    },
				    
    	    		// onEachFeature
    	    		onEachFeature: myobj.onEachFeature
    	    		
    	    		});
    							
    		} 			
    		
    		newcoord=[ longitude , latitude ];
    		
			geojsonFeature = {
   	    		    "type": "Feature",
   	    		    "properties": { type : layerId , popupContent: popuptext },
   	    		    "geometry": {
   	    		        "type": "Point",
   	    		        "coordinates": newcoord
   	    		    }
			};
   	    	 
			this.overlayLayers[layerId].addData(geojsonFeature);  	
    		
    	}
    	else {
    		
    		console.log('Paramètres manquants pour ajouter la structure à la carte');
    		
    	}
    	
    },
    
    
    render : function() { 
    	 
    	for (var layerid in this.overlayLayers) {
    	    
    		console.debug('ADD LAYER TO MAP '+ layerid);
        	this.map.addLayer(this.overlayLayers[layerid]);
    		
    	}
    	
    	//CONTROL LAYER
    	overlays= {};
    	controlLayer = L.control.layers(null, overlays, { collapsed : false});
    	
    	for (var layerid in this.overlayLayers) {
    		
    		if (this.layermapping[layerid] != 'undefined') layerName=this.layermapping[layerid].label;
     		else layerName='Inconnu';  
    		
    		controlLayer.addOverlay(this.overlayLayers[layerid],layerName);
    		
    	}
    	
    	controlLayer.addTo(this.map);
    
    },
    
    
    
    onEachFeature : function (feature, layer) {
    	
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent);
        }
    }
			
			
	});