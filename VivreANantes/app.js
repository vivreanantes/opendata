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

			controllers : [ 'Welcome', 'Geo', 'InformationsController', 'StructuresController', 'ReusesController', 'Garbages', 'HomeCollectModsController', 'TrisacsController', 'CollectModsController' 
			,'CommentsController'  /*, 'Calendar'*/],
			
			models : ['CategorieUsuelle', 'Garbage', 'HomeCollectModModel','StructureModel','AdviceModel', 'CommentsModel', 'WasteTreatmentsCategories', 'CollectModModel'/*, 'CalendarModel'*/],
			
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

		// Introduire les éléments suivants dans Garbages.js
		// avant : conseilTraduit += "Plus d'infos : " "<A HREF='#'>"	+ recordAdvice.raw.fiche + "</A>";
		// après : conseilTraduit += this.makeTextLink("informationsPanel");

		// 24/05 TODO Déchets (dans le tableur et ensuite dans dechets.json) : supprimer les sous-catégories Toxiques
		// 24/05 TODO Déchets (dans le tableur et ensuite dans dechets.json) : LONG vérifier les données
		// 24/05 TODO Déchets/Structures/Modes de collecte LONG : remettre les nouvelles images
		// 24/05 TODO Déchets vérifier les conseils
		// 24/05 TODO A domicile : petites corrections d'ergonomie
		
		// TODO Structures : suivi de la question posée sur le FORUM sur les conteneurs dans structures2.json : ds_ent om_ent verre_ent
		// TODO Ajout structures Ecotox
		// TODO Informations : faire libricompost
		// TODO Informations : faire panneaux thermiques
		// TODO FAQ : connecter le bouton "commentez" à un script côté serveur (donc sur toutes les détails)
		// TODO Structures : inclure les Relais dans structures2.json, et un descriptif dans modes_collecte.json
		// TODO Retrouver la nouvelle déchetterie et l'ajouter dans les collecte
		
		///////////// CED ////////////////// 

		// TODO Carte : utiliser le localstorage pour mémoriser les structures affichées, et les quartiers 
		// TODO Carte : filtrer sur les structures et les quartiers
		// TODO Carte : utiliser structures2.json à la place structures.json
		// TODO Carte : permettre la bascule de la carte vers StructuresDetails

		// TODO Calendrier - DUR : intégrer le composant Ext.ux.TouchCalendar (on utilisera Ext.ux.TouchCalendarView)
		// TODO Calendrier : utiliser le localstorage pour mémoriser les codes des structures affichées dans le calendrier
		
		// TODO Déchets : mettre des pastilles sur les catégories de traitement, qui permet de diriger ensuite vers la page actuelle.
		// TODO Déchets : mettre un lien qui dirige vers les modes de collecte
		// TODO Déchet : mettre un lien sur les conseils qui sont associés à une fiche pour rediriger vers la fiche information

		// TODO DUR Dans la tagbar remplacer "iconCls : 'more'" par un vrai bouton suivant.
		// Récup les Ecotox de 2013
		// 23/05 TODO Structures : regrouper les structures dans quelques quartiers