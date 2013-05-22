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
			'garbages.FaqList',
			'garbages.WasteTreatmentsCategoriesList',
			'garbages.CollectModsList',
			// Modes de collecte
			'collectMod.CollectMods',
			'collectMod.CollectModsButtonsList',
			'collectMod.CollectModsDetails',
			// Commentaires
			'faq.FaqContainer',
			'faq.FaqForm',
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

			controllers : [ 'Welcome', 'Geo', 'Informations', 'StructuresController', 'ReusesController', 'Garbages', 'HomeCollectMods', 'TrisacsController', 'CollectModsController'/*, 'Calendar'*/],
			
			models : ['CategorieUsuelle', 'Garbage', 'HomeCollectMod','Structure','Advice', 'Faq', 'WasteTreatmentsCategories', 'CollectMod'/*, 'CalendarModel'*/],
			
			stores : ['CategorieUsuelleStore', 'GarbageStore', 'HomeCollectModStore','StructureStore', 'AdviceStore', 'WasteTreatmentsCategoriesStore', 'CollectModStore', 'FaqStore'/*, 'DistrisacStore'*/, 'TrisacStore', /*'CalendarStore', */'Structure2Store'],

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

		// TODO Mode de collecte : dirige SOIT vers le détail d'une collecte SOIT (dans le cas du mode de collecte "réutilisation") vers une page contenant les pastilles des sous-modes de collectes (qui dirige vers le détail du sous-mode de collecte)
		// TODO Mode de collecte : charger la description directement depuis le JSON (actuellement données en dur)
		// TODO  mettre conseils et FAQ
		
		// 22/05 1 TODO Structures : vérifier présence de quartier sur toutes les structures
		// 22/05 3 TODO Trisac : même comportement que structure (héritage)

 
 		// 22/05 5 TODO FAQ : mettre un détail sur les éléments de la FAQ
		// 22/05 6 TODO Informations : mettre des icônes et relire le texte
		
		// 23/05 TODO Structures : vérifier que les modesCollecte des conteneurs dans structures2.json sont les bons.
		// 23/05 TODO Déchets/Structures/Modes de collecte LONG : remettre les nouvelles images
		// 23/05 TODO FAQ : pour les détails on affiche les commentaires; il faut ajouter un bouton permettant d'aller sur la page FAQ pour poster un commentaire 
		// 25/05 TODO FAQ : connecter le bouton "commentez" à un script côté serveur (donc sur toutes les détails)
		// 23/05 TODO Informations : faire libricompost
		// 23/05 TODO Informations : faire panneaux thermiques

		// 25/05 TODO Déchets (dans le tableur et ensuite dans dechets.json) : supprimer les sous-catégories Toxiques
		// 25/05 TODO Déchets (dans le tableur et ensuite dans dechets.json) : LONG vérifier les données
		// 25/05 TODO Déchets vérifier les conseils
		// 25/05 TODO A domicile : petites corrections d'ergonomie


		
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
