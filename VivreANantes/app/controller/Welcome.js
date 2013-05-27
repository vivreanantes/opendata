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
				
				// Les catégories usuelles
				var categorieUsuelleStore = Ext.create(
						'VivreANantes.store.CategorieUsuelleStore');
						/*, {
							autoLoad : true,							
							listeners : {
								'load' : function(store, results, successful) {
								}
							}
						});*/
				list.setStore(categorieUsuelleStore);

				console.log(categorieUsuelleStore);
			},
			
			showDetail : function(list, record) {
				this.getWelcomeList().push({
					xtype : 'welcomeList',
					title :  record.nom,
					data : record.data
				}); 
			}
		});
