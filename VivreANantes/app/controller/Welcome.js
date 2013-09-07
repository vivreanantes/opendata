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
				
				// Les catégories usuelles
				var categorieUsuelleStore = Ext.create(
						'VivreANantes.store.CategorieUsuelleStore');
				list.setStore(categorieUsuelleStore);
			},
			
			showDetail : function(list, record) {
				this.getWelcomeList().push({
					xtype : 'welcomeList',
					title :  record.nom,
					data : record.data
				}); 
			}
		});
