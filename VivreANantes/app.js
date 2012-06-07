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
			'garbages.GarbagesDetails',
			'garbages.GarbagesList',
			// Jeu
			'game.Guess',
			// A propos
			'about.Description',
			// Calendrier
			'calendar.Calendar'
			],

			controllers : [ 'Grabages', 'Welcome', 'Geo' ],
			
			// models : [],
			// stores : [],
			models : ['Garbage','CategorieUsuelle'],
			stores : ['GarbageStore','CategorieUsuelleStore'],

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
