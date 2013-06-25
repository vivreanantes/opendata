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
			'garbages.GarbagesContainer2',
			'garbages.GarbageButtonsPanel',
			'garbages.UsualCategoriesList',
			'garbages.UsualSubCategoriesList',
			'garbages.AdvicesList',
			'garbages.WasteTreatmentsCategoriesList',
			'garbages.CollectModsList',
			'garbages.InformationsList',
			'garbages.CommentsList',
			'garbages.UsualCategoriesList2',
			// Modes de collecte
			'collectMod.CollectMods',
			'collectMod.CollectModsButtonsList',
			'collectMod.CollectModsDetails',
			// Commentaires
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
			'information.InformationsButtonsList',
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
			,'CommentsController', 'LocalStorageController' /*, 'Calendar'*/],
			
			models : ['CategorieUsuelleModel', 'GarbageModel', 'HomeCollectModModel','StructureModel','AdviceModel', 'CommentsModel', 'WasteTreatmentsCategories', 'CollectModModel'/*, 'CalendarModel'*/, 'LocaleStorageModel', 'InformationsModel'],
			
			stores : ['CategorieUsuelleStore', 'GarbageStore', 'HomeCollectModStore','StructureStore', 'AdviceStore', 'WasteTreatmentsCategoriesStore', 'CollectModStore', 'CommentsStore'/*, 'DistrisacStore'*/, 'TrisacStore', /*'CalendarStore', */'Structure2Store', 'InformationsStore'],

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

		// TODO fusionner subCaterory et caterory 
		// TODO utiliser container2
		// TODO Brancher le formulaire de commentaire sur un script SGI
		// TODO Ajout photo : vers de terre, panneau solaire thermique

		// TODO Déchets (dans le tableur et ensuite dans dechets.json) : LONG vérifier les données et les conseils
		// TODO Faire un déploiement
		// TODO Vérif si un bouchon métallique se recycle, idem capsule bouteille lait
		// TODO Compléter les infos sur Le Relais
		// TODO Informations : faire réchauffement climatique
		// TODO Informations : améliorer la fiche sur les panneaux solaires 
		// TODO A domicile LONG : faire une relecture des données du tableur 
		//                 http://www.nantesmetropole.fr/pratique/dechets/les-ordures-menageres-residuelles-23181.kjsp
		
 		// Divers http://dev.sencha.com/deploy/ext-3.4.0/examples/layout/vbox.html
		//        http://try.sencha.com/touch/2.0.0/docs/Ext.layout.VBox.2/viewer.html
		/////////// CRN Long terme //////////

		// TODO Utiliser les paramètres de la page de configuration sur toutes les pages de l'appli
		// TODO Contacter des assos pour améliorer le contenu de l'appli 
		// TODO Suivi la question posée sur le FORUM sur les conteneurs dans structures2.json
		//      http://data.nantes.fr/forum/?tx_mmforum_pi1[action]=list_post&tx_mmforum_pi1[tid]=166
		// TODO photos : visiter (et ajouter des photos) de Valorena et Arc-En-Ciel...

		///////////// CED ////////////////// 

		// TODO Carte : utiliser le localstorage pour mémoriser les structures affichées, et les quartiers 
		// TODO Carte : filtrer sur les structures et les quartiers
		// TODO Carte : utiliser structures2.json à la place structures.json
		// TODO Carte : permettre la bascule de la carte vers StructuresDetails (utiliser AbstractController.makeLink)

		// TODO Calendrier - DUR : intégrer le composant Ext.ux.TouchCalendar (on utilisera Ext.ux.TouchCalendarView)
		// TODO Calendrier : utiliser le localstorage pour mémoriser les codes des structures affichées dans le calendrier
