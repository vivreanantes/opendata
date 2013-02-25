Ext.Loader.setPath({
	'Ext' : 'sdk/src',
	'Ext.ux': 'lib/ux'
});
   
console.log("Application");
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
			// CRN_DEBUT
			'garbages.AdvicesList',
			'garbages.WasteTreatmentsCategoriesList',
			'garbages.CollectModsList',
			// CRN_FIN
			'garbages.GarbagesContainer',
			'garbages.GarbagesForm',
			// Mode de collecte à domicile
			'homecollectmods.HomeCollectMods',
			'homecollectmods.HomeCollectModsContainer',
			'homecollectmods.HomeCollectModsDetails',
			'homecollectmods.HomeCollectModsForm',
			'homecollectmods.HomeCollectModsList',
			// Jeu
			'game.Guess',
			// Informations
			'information.Informations',
			// A propos
			'about.Description',
			// Calendrier
			'calendar.Calendar',
			// Trisac
			'trisac.Trisacs'
			],

			controllers : [ 'Welcome', 'Geo', 'Informations',  'Garbages', 'HomeCollectMods', 'Trisacs'],
			
			models : ['CategorieUsuelle', 'Garbage', 'HomeCollectMod','Structure','Advice', 'WasteTreatmentsCategories', 'CollectMod'],
			stores : ['CategorieUsuelleStore', 'GarbageStore', 'HomeCollectModStore','StructureStore', 'AdviceStore', 'WasteTreatmentsCategoriesStore', 'CollectModStore'],

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
