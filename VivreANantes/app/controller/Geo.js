/**
 * Controlleur pour les vues et modèles de Carte
 * 
 * <p>
 * Pour information : 
 * Classe Carte Wrapper Carte Google Lire :
 * https://developers.google.com/maps/documentation/javascript/reference?hl=fr#ControlPosition
 * </p>
 */
Ext
		.define(
				'VivreANantes.controller.Geo',
				{
					extend : 'Ext.app.Controller',

					config : {
						refs : {
							vanmap : 'vanmap'	,
							mapcontainer:'mapContainer'
						},
						control : {
							vanmap : {
								initialize : 'onInitMap',
								activate : 'onMapActivate',
								centerchange : 'onCenterChange',
								maprender : 'onMapRender'
							},
							mapContainer : {
								initialize : 'onInitMapContainer',
								activate : 'onMapContainerActivate'
							}
						}
					},

					
					/**
					 * A l'initialisation du container (au démarrage de l'application, comme le container est dans le Viewport)
					 */
					onInitMapContainer : function() {
						console.log('onInitMapContainer');
					},
					
					/**
					 * A la première activation de la Carte, on crée l'objet Ext.Map
					 */
					onMapContainerActivate : function(pContainer) {
						console.log('onMapContainerActivate');
						if (!pContainer.map) {
							pContainer.map = pContainer.add({
								xtype: 'vanmap'								
							});	
						}			
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
					 * Action réalisée après le  rendu de la carte
					 * 
					 * @param {}
					 *            extmap
					 * @param {}
					 *            map
					 * @param {}
					 *            eOpts
					 */
					onMapRender : function(extmap, map, eOpts) {
						console.log(map.getCenter());

						var position = new google.maps.LatLng(
								47.21837100000001, -1.553620999999985);

						// Fenetre texte (à remplacer par un menu plus complet
						// permettant
						// d'afficher des infos,...)
		// var infoWindow = new google.maps.InfoWindow({
		// content : 'Ma Position à Nantes (maquette)'
		// });
						 map.setCenter(position);						 
						 var infoExt = Ext.create('VivreANantes.view.geo.Toast');

						var marker = new google.maps.Marker({
							position : position,
							map : map,
							visible : true
						});
						google.maps.event.addListener(marker, 'click',
								function() {
							//infoWindow.open(map, marker);
							infoExt.showBy(extmap);
							
								});
					},

					/**
					 * Action réalisée lorsqu'on active le panel Carte
					 */
					onMapActivate : function(container,newc) {
						console.log('onMapActivate');
						this.verifyFirstTimeMap();
						//if (container.)
						container.renderMap();
					},

					/**
					 * Vérification du premier accès à la carte. Il faudrait
					 * mutualiser cette méthode (côté Framework)
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
