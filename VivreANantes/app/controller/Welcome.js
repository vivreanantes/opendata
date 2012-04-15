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
						initialize : 'onInitWelcome'
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

				list.setStore(garbageStore);
												
				//console.log(garbageStore);

			}
		});
