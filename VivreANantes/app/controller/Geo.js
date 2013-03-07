/**
 * Controlleur pour les vues et modèles de Carte
 * 
 * <p>
 * Pour information : Classe Carte Wrapper Carte Google Lire :
 * https://developers.google.com/maps/documentation/javascript/reference?hl=fr#ControlPosition
 * http://leafletjs.com/reference.html#marker
 * </p>
 * 
 * 
 * TODO : - Gérer un nombre d'objets restreints à afficher - Gérer un
 * enregistrement dans le localStorage
 * 
 * 
 * 
 * 
 */
Ext.define('VivreANantes.controller.Geo', {
	extend : 'Ext.app.Controller',
	requires : ['Ext.MessageBox'],
	config : {
		refs : {
			vanmaposm : {
				selector : 'vanmaposm',
				xtype : 'vanmaposm',
				autoCreate : true
			}
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

	resetCenter : function(geo) {
		localStorage.setItem('latitude', geo.getLatitude());
		localStorage.setItem('longitude', geo.getLongitude());

		this.resetCenterPosition(geo);

	},

	/**
	 * Remettre à Zero le centre
	 * 
	 * @param {}
	 *            geo
	 */
	resetCenterPosition : function(geo) {
		var me = this;

		console.log('latitude : ' + geo.getLatitude() + ' - longitude :'
				+ geo.getLongitude());
		if (Ext.isDefined(me.getVanmaposm())) {
			var map = me.getVanmaposm().map;
			if (Ext.isDefined(map)) {
				
				var position = new L.LatLng(geo.getLatitude(), geo
									.getLongitude());
				
				if (!Ext.isDefined(map.center)) {
					var LeafIcon = L.Icon.extend({
								options : {
									/*
									 * shadowUrl :
									 * '../docs/images/leaf-shadow.png',
									 */									
								}
							});
					var greenIcon = new LeafIcon({
								iconUrl : 'resources/icons/marker-icon-green.png'
							});

					
					map.center = new L.Marker(position);
					map.addLayer(map.center);
					map.center.setIcon(greenIcon);
				}

				map.center.setLatLng(position);

				if (!map.hasLayer(me.cloudmade)) {
					map.addLayer(me.cloudmade);
				}				
				map
						.setView(new L.LatLng(geo.getLatitude(), geo
												.getLongitude()), map.getZoom());
			} else {
				console.log('map non encore disponible');
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
	 * Positionner les structures
	 * 
	 * @param {}
	 *            store
	 * @param {}
	 *            map
	 * @param {}
	 *            cloudmade
	 */
	positionnerStructures : function(store, map, cloudmade) {
		var me = this;

		console.log('positionnerStructures');

		map.addLayer(me.cloudmade);

		// Centrer à Nantes, la localisation fera le reste
		map.setView(new L.LatLng(47.21837100000001, -1.553620999999985), 15);

		store.each(function(record) {
					// console.log(record);
					var position = new L.LatLng(record.get('latitude'), record
									.get('longitude'));
					var marker = new L.Marker(position);
					// map.addLayer(cloudmade).setView(position, 15);
					map.addLayer(marker);
					marker.bindPopup(record.get('libelle')).openPopup();
				});

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
		var me = this;
		if (!Ext.isDefined(me.cloudmade)) {
			me.cloudmade = new L.TileLayer(
					'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
						attribution : 'OpenStreetMap - VivreANantes',
						// attribution : 'Map data &copy; <a
						// href="http://openstreetmap.org">OpenStreetMap</a>
						// contributors, <a
						// href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
						// Imagery © <a
						// href="http://cloudmade.com">CloudMade</a>',
						maxZoom : 18
					});
		}

		// A l'initialisation de la carte, on crée une variable du
		// controller pour gérer la modification de localisation
		// gérant la réactualisation en fonction de la postion
		if (!Ext.isDefined(me.geolocate)) {
			me.geolocate = Ext.create('Ext.util.Geolocation', {
						autoUpdate : true,
						listeners : {
							locationupdate : function(geo) {
								me.resetCenter(geo);
							},
							locationerror : function(geo, bTimeout,
									bPermissionDenied, bLocationUnavailable,
									message) {
								if (bTimeout) {
									console.error('Timeout');
								} else {
									console.error('Erreur :(');
								}
							}
						}
					});
		}

		var structureStore = Ext.create('VivreANantes.store.StructureStore', {
			autoLoad : true,
			listeners : {
				'load' : function(store, results, successful) {
					// console.log("Chargement du structure store");
					// console.log(store);
					// console.log(results);
					// console.log(successful);

					me.positionnerStructures(structureStore, map, me.cloudmade);

				}
			}
		});

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
