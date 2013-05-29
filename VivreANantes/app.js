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
			// 'garbages.Garbages',
			// Déchets
			'garbages.UsualCategoriesList',
			'garbages.AdvicesList',
			'garbages.WasteTreatmentsCategoriesList',
			'garbages.CollectModsList',
			// Modes de collecte
			'collectMod.CollectMods',
			'collectMod.CollectModsButtonsList',
			'collectMod.CollectModsDetails',
			// Commentaires
			'garbages.CommentsList',
			'comments.Comments',
			'comments.CommentsContainer',
			'comments.CommentsForm',
			'comments.CommentsDetails',
			// Calendar,
			// 'calendar.Calendar',
			/*'calendar.Ext.ux.TouchCalendarView',*/
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
			// 'calendar.Calendar',
			// 'calendar.Events',
			'structures.Structures',
			'structures.StructuresContainer',
			'structures.StructuresDetails',
			'structures.StructuresForm',
			'structures.StructuresList',
			// Trisac
			'trisac.Trisacs',
			'trisac.TrisacContainer',
			'trisac.TrisacDetails',
			'trisac.TrisacForm',
			'trisac.TrisacList'
			],

			controllers : [ 'Welcome', 'Geo', 'InformationsController', 'StructuresController', 'ReusesController', 'GarbagesController', 'HomeCollectModsController', 'TrisacsController', 'CollectModsController' 
			,'CommentsController'  /*, 'Calendar'*/],
			
			models : ['CategorieUsuelleModel', 'GarbageModel', 'HomeCollectModModel','StructureModel','AdviceModel', 'CommentsModel', 'WasteTreatmentsCategories', 'CollectModModel'/*, 'CalendarModel'*/],
			
			stores : ['CategorieUsuelleStore', 'GarbageStore', 'HomeCollectModStore','StructureStore', 'AdviceStore', 'WasteTreatmentsCategoriesStore', 'CollectModStore', 'CommentsStore'/*, 'DistrisacStore'*/, 'TrisacStore', /*'CalendarStore', */'Structure2Store'],

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
		
		///////////// CRN //////////////////

		// TODO Mettre les horaires Ecotox
		// TODO A domicile LONG : Vérifier les donnéees
		// TODO Déchets (dans le tableur et ensuite dans dechets.json) : LONG vérifier les données

		// TODO Bascule d'une page à l'autre avec paramètre
		// TODO Déchets LONG : vérifier les conseils
		// TODO Structures : changger "conteneur" par "colonnes enterrées"

		// TODO Informations : faire libricompost
		// TODO Informations : faire panneaux thermiques
		// TODO Informations : faire réchauffement climatique
		// TODO Réemploi : vérif http://ourecycler.fr/point-tri-selectif.php
		// TODO Suivi suivre la demande en cours http://lerelais.org/oudonner.php
		// TODO Suivi demande horaires structures Ecotox (reçu par courrier et intégré sur le site)
		// TODO Suivi de la question posée sur le FORUM sur les conteneurs dans structures2.json
	
		// TODO Reprendre photo de Valorena et Arc en ciel
		// TODO Structures : inclure les Relais dans structures2.json, et un descriptif dans modes_collecte.json 

		///////////// CED ////////////////// 

		// TODO Carte : utiliser le localstorage pour mémoriser les structures affichées, et les quartiers 
		// TODO Carte : filtrer sur les structures et les quartiers
		// TODO Carte : utiliser structures2.json à la place structures.json
		// TODO Carte : permettre la bascule de la carte vers StructuresDetails (utiliser AbstractController.makeLink)

		// TODO Calendrier - DUR : intégrer le composant Ext.ux.TouchCalendar (on utilisera Ext.ux.TouchCalendarView)
		// TODO Calendrier : utiliser le localstorage pour mémoriser les codes des structures affichées dans le calendrier

		// TODO DUR Dans la tagbar remplacer "iconCls : 'more'" par un vrai bouton suivant.
