/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.Garbages', {
			extend : 'Ext.app.Controller',

			config : {
				refs : {
					garbages : 'garbagesContainer',
					garbagesList : 'garbageslist'
				},
				control : {
					garbagesList : {
						initialize : 'onInitGarbages',
						disclose : 'showGarbagesDetail'
					}
				}
			},

			/**
			 * A l'initialisation de la fenêtre d'accueil
			 */
			onInitGarbages : function(list) {
				console.log('onInitGarbages');

				var garbageStore = Ext.create(
						'VivreANantes.store.GarbageStore', {
							autoLoad : true,							
							listeners : {
								'load' : function(store, results, successful) {
								}
							}
						});

				list.setStore(garbageStore);
				console.log(garbageStore);
				
			},
			
			showGarbagesDetail : function(list, record) {
				console.log('showGarbagesDetail');
				this.getGarbagesList().push({
					xtype : 'garbagesList',
					title :  record.nom,
					data : record.data
				}); 
			}
		});
