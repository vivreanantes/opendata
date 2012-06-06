/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.Welcome', {
			extend : 'Ext.app.Controller',

			config : {
				refs : {
					welcome : 'accueilContainer',
					welcomeList : 'welcomelist'
				},
				control : {
					welcomeList : {
						initialize : 'onInitWelcome',
						disclose : 'showDetail'
						// itemtap : 'onSessionTap',
						// activate : 'onSessionsActivate'
					}
				}
			},

			/**
			 * A l'initialisation de la fenêtre d'accueil
			 */
			onInitWelcome : function(list) {
				console.log('onInitWelcome');

				var garbageStore = Ext.create(
						'VivreANantes.store.GarbageStore', {
							autoLoad : true,							
							listeners : {
								'load' : function(store, results, successful) {
									
									
									
									//console.log(results);
									//alert('coucou');
								}
							}
						});

				// list.setStore(garbageStore);
				console.log(garbageStore);

				
				// Les catégories usuelles
				var categorieUsuelleStore = Ext.create(
						'VivreANantes.store.CategorieUsuelleStore', {
							autoLoad : true,							
							listeners : {
								'load' : function(store, results, successful) {
								}
							}
						});
				list.setStore(categorieUsuelleStore);
				console.log(categorieUsuelleStore);
				

			},
			
			showDetail : function(list, record) {
				this.getWelcomeList().push({
					xtype : 'trashesDetails',
					title :  record.nom,
					data : record.data
				}); 
			}
		});
