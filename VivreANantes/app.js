Ext.Loader.setPath({
	'Ext' : 'touch/src'
});
   
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
			// 'garbages.GarbagesContainer2',
			'garbages.GarbageButtonsPanel',
			'garbages.UsualCategoriesButtonPanel',
			'garbages.AdvicesList',
			// 'garbages.WasteTreatmentsCategoriesList',
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

			controllers : [ 'WelcomeController', 'GeoController', 'InformationsController', 'StructuresController', 'ReusesController', 'GarbagesController', 'HomeCollectModsController', 'TrisacsController', 'CollectModsController' 
			,'CommentsController', 'LocalStorageController' /*, 'Calendar'*/],
			
			models : ['CategorieUsuelleModel', 'GarbageModel', 'HomeCollectModModel','StructureModel','AdviceModel', 'CommentsModel', /*'WasteTreatmentsCategories',*/ 'CollectModModel'/*, 'CalendarModel'*/, 'LocaleStorageModel', 'InformationsModel'],
			
			stores : ['CategorieUsuelleStore', 'GarbageStore', 'HomeCollectModStore', 'AdviceStore', /*'WasteTreatmentsCategoriesStore',*//* 'CollectModStore',*/ 'CommentsStore'/*, 'DistrisacStore'*/, 'TrisacStore', 'StructureStore', 'InformationsStore'],

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

		// TODO le bouton retour

		// On prend 3 quartiers : Nantes, Hors Nantes Nord Loire, Hors Nantes Sud Loire,   
		// Réemploi : quartier
		// Ecotox : quartier_admin, quartier
		// Le relais : quartier_admin, quartier
		// Encombrant : quartier_admin et quartier
		// DecheterieEcopoint : quartier
		// Colonnes enterrées : à faire
		
		// TODO encombrants : améliorer la macro et le traitement java
		// HomeCollectModModel.js
			
		// AbstractStructureModel.js
		// CollectModModel.js
		// GarbageModel.js
		// HomeCollectModModel.js
		
		/////////// CRN Long terme //////////

		// TODO Mineur Function TestHoraires(PlageHoraire as String) : controle sur les heures
		// TODO Mineur : marché de talensac ouvert les lundis uniquement si férié !
		// TODO Utiliser les paramètres de la page de configuration sur toutes les pages de l'appli
		// TODO Contacter des assos pour améliorer le contenu de l'appli 
		// TODO Suivi la question posée sur le FORUM sur les conteneurs dans structures2.json
		//      http://data.nantes.fr/forum/?tx_mmforum_pi1[action]=list_post&tx_mmforum_pi1[tid]=166
		// TODO photos : visiter (et ajouter des photos) de Valorena et Arc-En-Ciel...
		// TODO Modes des collecte listing des lieux les plus proches sur la page des modes de collecte
		// TODO le texte des modes de collecte est dupliqué. Il faudrait les récupérer.

		///////////// CED ////////////////// 

		// TODO Carte : utiliser le localstorage pour mémoriser les structures affichées, et les quartiers 
		// TODO Carte : filtrer sur les structures et les quartiers
		// TODO Carte : permettre la bascule de la carte vers StructuresDetails (utiliser AbstractController.makeLink)

		// TODO Calendrier - DUR : intégrer le composant Ext.ux.TouchCalendar (on utilisera Ext.ux.TouchCalendarView)
		// TODO Calendrier : utiliser le localstorage pour mémoriser les codes des structures affichées dans le calendrier
