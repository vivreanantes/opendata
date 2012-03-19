/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.Welcome', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			welcome : 'welcome'
		},
		control : {
			welcome : {
				initialize : 'onInitWelcome',
				itemtap : 'onSessionTap',
				activate : 'onSessionsActivate'
			}
		}
	},

	/**
	 * A l'initialisation de la fenêtre d'accueil
	 */
	onInitWelcome : function() {
		console.log('onInitWelcome');
	}
});
