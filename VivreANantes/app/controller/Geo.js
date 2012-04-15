/**
 * Controlleur pour les vues et modèles de Carte
 * 
 * <p>
 * Pour information : Classe Carte Wrapper Carte Google Lire :
 * https://developers.google.com/maps/documentation/javascript/reference?hl=fr#ControlPosition
 * </p>
 */
Ext.define('VivreANantes.controller.Geo', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			vanmap : 'vanmap'
		},
		control : {
			vanmaposm : {
				activate : 'onMapActivate',
				maplrender : 'onMapRender'
			},
			mapContainer : {
				initialize : 'onInitMapContainer',
				activate : 'onMapContainerActivate'
			}
		}
	},

	/**
	 * A l'initialisation du container (au démarrage de l'application, comme le
	 * container est dans le Viewport)
	 */
	onInitMapContainer : function() {
		console.log('onInitMapContainer');
	},

	/**
	 * A la première activation de la Carte, on crée l'objet Ext.Map
	 */
	onMapContainerActivate : function(pContainer) {
		console.log('onMapContainerActivate');

	},

	/**
	 * Action à l'initialisation de la Carte
	 */
	onInitMap : function() {
		console.log('initMap');
	},

	/**
	 * Action sur le changement de centre (propre Ext.Map)
	 * 
	 * @param {}
	 *            extmap
	 * @param {}
	 *            map
	 * @param {}
	 *            center
	 * @param {}
	 *            eOpts
	 */
	onCenterChange : function(extmap, map, center, eOpts) {
		// console.log(center);

	},

	/**
	 * Action réalisée après le rendu de la carte
	 * 
	 * @param {}
	 *            extmap
	 * @param {}
	 *            map
	 * @param {}
	 *            eOpts
	 */
	onMapRender : function(extmap, map, eOpts) {
		var cloudmade = new L.TileLayer(
				'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution : 'OpenStreetMap - VivreANantes',
					// attribution : 'Map data &copy; <a
					// href="http://openstreetmap.org">OpenStreetMap</a>
					// contributors, <a
					// href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
					// Imagery © <a href="http://cloudmade.com">CloudMade</a>',
					maxZoom : 18
				});

		// En dur
		var position = new L.LatLng(47.21837100000001, -1.553620999999985);
		var marker = new L.Marker(position);

		map.addLayer(cloudmade).setView(position, 15);
		map.addLayer(marker);
		marker.bindPopup("").openPopup();
	},

	/**
	 * Action réalisée lorsqu'on active le panel Carte
	 */
	onMapActivate : function(container, newc) {
		console.log('onMapActivate');
		this.verifyFirstTimeMap();
	},

	/**
	 * Vérification du premier accès à la carte. Il faudrait mutualiser cette
	 * méthode (côté Framework)
	 */
	verifyFirstTimeMap : function() {
		console.log('verifier');
		if (localStorage.getItem('alreadyAccessMap') != 'true') {
			Ext.Msg
					.alert(
							'Carte',
							'C\'est la première fois que vous accédez à la carte (pour la maquette de VAN). On peut mettre une aide ici.',
							Ext.emptyFn);
			localStorage.setItem('alreadyAccessMap', 'true');
		}
	}

});
