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

			controllers : [ 'Welcome', 'GeoController', 'InformationsController', 'StructuresController', 'ReusesController', 'GarbagesController', 'HomeCollectModsController', 'TrisacsController', 'CollectModsController' 
			,'CommentsController', 'LocalStorageController' /*, 'Calendar'*/],
			
			models : ['CategorieUsuelleModel', 'GarbageModel', 'HomeCollectModModel','StructureModel','AdviceModel', 'CommentsModel', /*'WasteTreatmentsCategories',*/ 'CollectModModel'/*, 'CalendarModel'*/, 'LocaleStorageModel', 'InformationsModel'],
			
			stores : ['CategorieUsuelleStore', 'GarbageStore', 'HomeCollectModStore','StructureStore', 'AdviceStore', /*'WasteTreatmentsCategoriesStore',*/ 'CollectModStore', 'CommentsStore'/*, 'DistrisacStore'*/, 'TrisacStore', /*'CalendarStore', */'Structure2Store', 'InformationsStore'],

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

		// TODO : réparer bug sur "fiche explicative" (lien inactif)
		// TODO : quartier pb  sur "Loire, Sèvre et Vignoble"
		// TODO domicile : lien vers modesDeCollecte
		// TODO encombrants : améliorer la macro et le traitement java
		// TODO manuel développeur
		// TODO déchet Brique alimentaire (dec_briqueAlimentaire) conseil sur tétrapack
		// TODO lombricompost : manque espace avant "retour d'expérience"
		// TODO réemploi Emmanus : trop d'espace avant "source"
		// TODO déchet Brique alimentaire (dec_briqueAlimentaire)' : il faudrait "tétrapack" dans "concerne "
		// TODO 'Rendez-vous Place des Dervallières (10)' : des conseils seraient bienvenus
		// TODO Supermarché (vente) Epicerie Aux 4 saisons (1)' : "Supermarché" et "Epicerie" > incohérent 
		// TODO 'Mode de collecte Point dépôt encombrant (modco_encombrant)' : "undefined" sur la page
		// TODO 'déchet Canette de soda (dec_canetteSoda)' : image fausse
		// TODO déchet Vêtement en bon état (dec_vetementEnBonEtat) : rajouter des espaces
		// TODO Commentaires : Les commentaires ne s'efface pas quand on les a validé.
		// TODO Bouton en bas : Les boutons du bas sont trop petits pour être bien vu et les couleurs ton sur ton ne permettent pas de bien voir sur un téléphone android (avec Chrome bien sur).
		// TODO
		
		/////////// CRN Long terme //////////

		// TODO Utiliser les paramètres de la page de configuration sur toutes les pages de l'appli
		// TODO Contacter des assos pour améliorer le contenu de l'appli 
		// TODO Suivi la question posée sur le FORUM sur les conteneurs dans structures2.json
		//      http://data.nantes.fr/forum/?tx_mmforum_pi1[action]=list_post&tx_mmforum_pi1[tid]=166
		// TODO photos : visiter (et ajouter des photos) de Valorena et Arc-En-Ciel...
		// TODO Modes des collecte listing des lieux les plus proches sur la page des modes de collecte

		///////////// CED ////////////////// 

		// TODO Carte : utiliser le localstorage pour mémoriser les structures affichées, et les quartiers 
		// TODO Carte : filtrer sur les structures et les quartiers
		// TODO Carte : permettre la bascule de la carte vers StructuresDetails (utiliser AbstractController.makeLink)

		// TODO Calendrier - DUR : intégrer le composant Ext.ux.TouchCalendar (on utilisera Ext.ux.TouchCalendarView)
		// TODO Calendrier : utiliser le localstorage pour mémoriser les codes des structures affichées dans le calendrier