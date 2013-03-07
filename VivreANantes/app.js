Ext.Loader.setPath({
	'Ext' : 'touch/src'
});
   
console.log("Application");
Ext
		.application({
			name : 'VivreANantes',
			views : [
			// Vue Principale
			'Main',
			// Partie Carte	
			'geo.LeafletMap',
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
			'garbages.GarbagesContainer',
			'garbages.GarbagesForm',
			// CRN_DEBUT
			'garbages.UsualCategoriesList',
			'garbages.AdvicesList',
			'garbages.FaqList',
			'garbages.WasteTreatmentsCategoriesList',
			'garbages.CollectModsList',
			'collectMod.CollectMods',
			'faq.FaqContainer',
			'faq.FaqForm',
			// CRN_FIN
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
			'trisac.Trisacs',
			'trisac.TrisacContainer',
			'trisac.TrisacDetails',
			'trisac.TrisacForm',
			'trisac.TrisacList'
			],

			controllers : [ 'Welcome', 'Geo', 'Informations',  'Garbages', 'HomeCollectMods', 'Trisacs'],
			
			models : ['CategorieUsuelle', 'Garbage', 'HomeCollectMod','Structure','Advice', 'Faq', 'WasteTreatmentsCategories', 'CollectMod'],
			
			stores : ['CategorieUsuelleStore', 'GarbageStore', 'HomeCollectModStore','StructureStore', 'AdviceStore', 'WasteTreatmentsCategoriesStore', 'CollectModStore', 'FaqStore'/*, 'DistrisacStore'*/, 'TrisacStore'],

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
		
		// TODO ajouter un composant calendar
		// TODO utilisaer le localstorage pour mémoriser les éléments du calendrier, les filtres dans les structures
		// TODO ajouter un bouton "commentez" quand on affiche des commentaires issues de la FAQ (donc sur toutes les détails)
		// TODO géolocolisation sur les distribution Trisacs (il en manque dans les données)
		// TODO mettre un détail sur les éléments de la FAQ
		// TODO vérifier type de conteneurs de Open Data
		
