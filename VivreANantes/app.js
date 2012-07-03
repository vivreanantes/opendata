Ext.Loader.setPath({
	'Ext' : 'sdk/src',
	'Ext.ux': 'lib/ux'
});
   
Ext
		.application({
			name : 'VivreANantes',
			views : [
			// Vue Principale
			'Main',
			// Partie Carte
			//'geo.LeafletMap',
			'geo.MapOSM',
			//'geo.Map', 
			'geo.MapContainer',
			'geo.Toast',
			// Accueil
			'welcome.Welcome',
			'welcome.WelcomeList',
			// Déchets
			'garbages.Garbages',
			'garbages.GarbagesDetails',
			'garbages.GarbagesList',
			// Jeu
			'game.Guess',
			// A propos
			'about.Description',
			// Calendrier
			'calendar.Calendar'
			],

			controllers : [ 'Welcome', 'Geo'/*,  'Garbages'*/],/*,*/
			/* '' + '',,*/
			
			// models : [],
			// stores : [],
			models : ['CategorieUsuelle', 'Garbage'],/*,*//*, */
			stores : ['CategorieUsuelleStore', 'GarbageStore'],/*,*//*, */

			icon : {
				57 : 'resources/icons/Icon.png',
				72 : 'resources/icons/Icon~ipad.png',
				114 : 'resources/icons/Icon@2x.png',
				144 : 'resources/icons/Icon~ipad@2x.png'
			},

			phoneStartupScreen : 'resources/loading/Homescreen.jpg',
			tabletStartupScreen : 'resources/loading/Homescreen~ipad.jpg',

			viewport : {
				autoMaximize : true
			},

			launch : function() {
				// Destroy the #appLoadingIndicator element
				Ext.fly('appLoadingIndicator').destroy();
				// Initialize the main view
				Ext.Viewport.add({
					xtype : 'main'
				});
			}
			
		});
