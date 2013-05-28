/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.GarbagesController', {
	extend : 'VivreANantes.controller.AbstractController',

	config : {
		refs : {
			garbagesView : 'garbagesView',
			garbagesList : 'garbagesList',
			garbageDetail : 'garbagesdetails',
			garbagesForm : 'garbagesForm',
			garbagesFormText : '#garbagesFormText',
			garbagesFormSelect : '#garbagesFormSelect',
			usualCategoriesList : 'usualCategoriesList_xtype',
			advicesList : 'advicesList',
			wasteTreatmentsCategoriesList : 'wasteTreatmentsCategoriesList',
			collectModList : 'collectModList',
			buttonCategoryPlastique : '#cu_plastique',
			buttonCategoryPapierscartons : '#cu_papierscartons',
			buttonCategoryMetal : '#cu_metal',
			buttonCategoryVertbois : '#cu_vertbois',
			buttonCategoryVerrevaisselle : '#cu_verrevaisselle',
			buttonCategoryVetementtissu : '#cu_vetementtissu',
			buttonCategoryEncombrant : '#cu_encombrant',
			buttonCategoryNourriture : '#cu_nourriture',
			buttonCategoryElectronique : '#cu_electronique',
			buttonCategoryToxique : '#cu_toxique',
			buttonCategoryDivers : '#cu_divers'
		},
		control : {
			garbageDetail : {
				updatedata : 'onUpdateDataDetail'
			},

			collectModsView : {},
			collectModsList : {
				initialize : "onInitCollectModsList"

			},
			usualCategoriesList : {
				initialize : 'onInitUsualCategoriesList',
				show : 'onShowUsualCategoriesList'
			},
			garbagesList : {
				initialize : 'onInitGarbages',
				itemtap : 'showGarbagesDetail'

			},

			garbagesView : {
				initialize : 'onInitGarbagesView',
				push : 'onGarbagesViewPush'
			},

			garbagesFormText : {
				keyup : 'onGarbageStoreFilter',
				change : 'onGarbageStoreFilter',
				clearicontap : 'onGarbageStoreFilter'
			},

			garbagesFormSelect : {
// change : 'onGarbageStoreFilter'
			}
			// CRN_DEBUT
			,
			advicesList : {
				initialize : 'onInitGarbagesAdvices'
			},

			wasteTreatmentsCategoriesList : {
				initialize : 'onInitGarbagesWasteTreatmentsCategoriesList'
			},
			collectModList : {
				initialize : 'onInitGarbagesCollectModList'
			},
			buttonCategoryPlastique : {
				tap : 'onShowDetails'
			},
			buttonCategoryPapierscartons : {
				tap : 'onShowDetails'
			},
			buttonConteneurPapierCarton : {
				tap : 'onShowDetails'
			},
			buttonCategoryMetal : {
				tap : 'onShowDetails'
			},
			buttonCategoryVertbois : {
				tap : 'onShowDetails'
			},
			buttonCategoryVerrevaisselle : {
				tap : 'onShowDetails'
			},
			buttonCategoryVetementtissu : {
				tap : 'onShowDetails'
			},
			buttonCategoryEncombrant : {
				tap : 'onShowDetails'
			},
			buttonCategoryNourriture : {
				tap : 'onShowDetails'
			},
			buttonCategoryElectronique : {
				tap : 'onShowDetails'
			},
			buttonCategoryToxique : {
				tap : 'onShowDetails'
			},
			buttonCategoryDivers : {
				tap : 'onShowDetails'
			}
		}
	},

	// DEBUG
	onDebug : function() {
		console.log('DEBUG');
	},

	onShowDetails : function(button, e, eOpts) {
		this.showDetails(button.id);
	},

	showDetails : function(collectModId) {

		if (this.garbagesList == null) {
			this.garbagesList = Ext
					.create('VivreANantes.view.garbages.GarbagesList');
		}
		var title = this.translate("label_" + collectModId);
		if (title == collectModId) {
			title = "Déchets";
		}
		this.garbagesList.setTitle(title);
		this.getGarbagesFormSelect().setValue(collectModId);
		this.filter();
		this.getGarbagesView().push(this.garbagesList);
	},
	onInitUsualCategoriesList : function(container) {
		// var categorieUsuelleStore =
		// Ext.create('VivreANantes.store.CategorieUsuelleStore');
		// list.setStore(categorieUsuelleStore);
		var arrayItemsToShow = new Array();
		arrayItemsToShow.push({
					"libelle" : "Plastique",
					"id" : "cu_plastique",
					"image" : "grande_bouteille_huile_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Papiers-cartons",
					"id" : "cu_papierscartons",
					"image" : "cartonette_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Métal",
					"id" : "cu_metal",
					"image" : "barquette_aluminium.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Déchets verts / bois",
					"id" : "cu_vertbois",
					"image" : "feuillages_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Verre / Vaisselle / Pots",
					"id" : "cu_verrevaisselle",
					"image" : "vase_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Vêtements / tissu",
					"id" : "cu_vetementtissu",
					"image" : "jean_usage_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Encombrants",
					"id" : "cu_encombrant",
					"image" : "refrigerateur_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Divers",
					"id" : "cu_divers",
					"image" : "bouchon_liege_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Nourriture",
					"id" : "cu_nourriture",
					"image" : "epeluchure_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Électronique",
					"id" : "cu_electronique",
					"image" : "telephone_fixe_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Toxique",
					"id" : "cu_toxique",
					"image" : "batterie_voiture_petit.png"
				});

		var arrayItems = this.getContentButtonsPanel(arrayItemsToShow);
		container.setItems(arrayItems);
	},

	/*
	 * 
	 */
	onShowUsualCategoriesList : function() {
		// Efface le champ texte de l'écran recherche
		this.getGarbagesFormText().setValue("");
	},

	getArrayFromString : function(string) {
		string = string.replace(", /g", ",").replace(" ,/g", ",");
		return string.split(',');
	},

	getAdviceString : function(conseils) {
		var thisController = this;
		var conseilTraduit = "";
		// var arrayConseils = conseils.split(',');
		// TODO utiliser getArrayFromString à la place
		var arrayConseils = conseils.replace(", /g", ",").replace(" ,/g", ",")
				.split(',');
		// On parcours les conseils
		if (arrayConseils.length > 0) {
			var dataAdvices = this.getAdvicesList().getStore().getData();
			var thisController = this;
			dataAdvices.each(function(recordAdvice) {
						for (i in arrayConseils) {
							if (recordAdvice.raw["code"] === arrayConseils[i]) {
								 
								conseilTraduit = conseilTraduit + "<BR/>"+ thisController.translate("label_Conseil") +" : <B>"
										+ recordAdvice.raw["libelle"]
										+ "</B><BR/>"
										+ recordAdvice.raw["description"];
								if (recordAdvice.raw["fiche"] !== "") {
									conseilTraduit += thisController
											.makeTextLink("informationsPanel");

								}
							}
						}
					});
		}
		if (conseilTraduit !== "") {
			conseilTraduit = "<BR/><BR/>"/* Conseils : " */+ conseilTraduit;
		}
		return conseilTraduit;
	},

	// CRN_FIN

	onUpdateDataDetail : function(comp, newData, opts) {
		if (newData) {
			console.log(this);
			console.log(this.id);

			// this.down('#content').setData(newRecord.data);
		}
	},

	onInitGarbagesView : function() {

		console.log('onInitGarbagesContainer');

	},

	/**
	 * A l'initialisation de la fenêtre d'accueil
	 */
	onInitGarbages : function(list) {

		console.log('onInitGarbages');

		var garbageStore = Ext.create('VivreANantes.store.GarbageStore', {
					autoLoad : true,
					listeners : {
						'load' : function(store, results, successful) {
							console.log('temp');
						}
					}
				});

		list.setStore(garbageStore);

		console.log(garbageStore);

	},

	/**
	 * A l'initialisation de la fenêtre d'accueil
	 */
	onInitGarbagesAdvices : function(list) {
		console.log('onInitGarbagesAdvices');
		var store = Ext.create('VivreANantes.store.AdviceStore');
		list.setStore(store);
	},

	/**
	 * A l'initialisation de la fenêtre d'accueil
	 */
	onInitGarbagesWasteTreatmentsCategoriesList : function(list) {
		console.log('onInitGarbagesWasteTreatmentsCategoriesList');
		var store = Ext
				.create('VivreANantes.store.WasteTreatmentsCategoriesStore');
		list.setStore(store);
	},

	/**
	 * A l'initialisation de la fenêtre d'accueil
	 */
	onInitGarbagesCollectModList : function(list) {
		console.log('onInitGarbagesCollectModList');
		var store = Ext.create('VivreANantes.store.CollectModStore');
		list.setStore(store);
	},

	onGarbagesViewPush : function(view, item) {

		// this.garbagesList().deselectAll();

	},

	showGarbagesDetail : function(list, index, node, record) {
		var thisController = this;
		if (record) {
			if (!this.garbageDetail) {
				this.garbageDetail = Ext
						.create('VivreANantes.view.garbages.GarbagesDetails');
			}
			this.garbageDetail.setTitle(record.data["nom"]);
			console.log(record.data);
			console.log(this.garbageDetail);

			// CRN debut
			var conseilTraduit = "";
			var conseils = "";
			var modesDeCollecte = "";
			var treatmentCategories = "";
			if (record.data["conseils"] !== '') {
				conseils = record.data["conseils"] + ",";
			}
			// conseils de catégories de traitement
			var conseilTraitementsTraduit = "";
			if (record.data["categorie_traitement"] !== '') {
				var dataWasteTreatmentsCategories = this
						.getWasteTreatmentsCategoriesList().getStore()
						.getData();
				dataWasteTreatmentsCategories.each(function(recordCategories) {
					if (recordCategories.raw["code"] === record.data["categorie_traitement"]) {
						conseils += recordCategories.raw["conseils"];
						modesDeCollecte += recordCategories.raw["modesCollecte"];
						treatmentCategories += recordCategories.raw["recyclable"];
					}
				});
			}
			// conseils
			conseilTraduit = this
					.getApplication()
					.getController('VivreANantes.controller.GarbagesController')
					.getAdviceString(conseils);
			if (conseilTraduit != "") {
				conseilTraduit = conseilTraduit + "<br/>";
			}
			// faq
			var faqTraduit = this
					.getApplication()
					.getController('VivreANantes.controller.CommentsController')
					.getCommentString(record.data["code"]);
			if (faqTraduit != "") {
				faqTraduit = faqTraduit + "<br/>";
			}
			// Modes de collecte
			var modesDeCollecteTraduit = "";
			var arrayModesDeCollecte = modesDeCollecte.split(',');
			// On parcours les modes de collecte
			if (arrayModesDeCollecte.length > 0) {
				var dataCollectMods = this.getCollectModList().getStore()
						.getData();
				var numModCollect = 0;
				dataCollectMods.each(function(recordCollectMod) {
					for (i in arrayModesDeCollecte) {
						if (recordCollectMod.raw["code"] === arrayModesDeCollecte[i]) {
							if (numModCollect != 0) {
								modesDeCollecteTraduit += ", ";
							}
							numModCollect++;
							modesDeCollecteTraduit += thisController
									.makeLink("collectModsPanel",
											arrayModesDeCollecte[i]);
							/*
							 * modesDeCollecteTraduit += "<A HREF='#'>" +
							 * recordCollectMod.raw["libelle"] + "</A>";
							 */
						}
					}
				});
			}
			if (modesDeCollecteTraduit !== "") {
				modesDeCollecteTraduit = "<BR/>Modes de collecte : "
						+ modesDeCollecteTraduit;
			}
			// Recyclable OUI, NON, NON (mais ne pas mettre à la poubelle)
			// "AA".replace("A/g", "B");

			if (treatmentCategories === "OUI") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='green' size='4'>"
						+ this.translate("label_OUI") + "</FONT>";
			} else if (treatmentCategories === "NON") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='red' size='4'>"
						+ this.translate("label_NON") + "</FONT>";
			} else if (treatmentCategories === "PAS_POUBELLE") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='orange' size='4'>"
						+ this.translate("label_NON") + "</FONT>"
						+ this.translate("label_pas_poubelle");
			} else {
				treatmentCategories = "";
			}
			/*
			 * treatmentCategories = treatmentCategories
			 * .replace("PAS_POUBELLE/g", "<DIV STYLE='color:red' size='4'>NON</DIV>
			 * ne pas mettre à la poubelle."); treatmentCategories =
			 * treatmentCategories.replace("OUI/g", "<DIV STYLE='color:green'
			 * size='4'>OUI</DIV>"); treatmentCategories =
			 * treatmentCategories.replace("NON/g", "<DIV STYLE='color:red'
			 * size='4'>NON</DIV>");
			 */
			/*
			 * var concerneAussi = ""; if (record.data["concerne_aussi"] !== "") {
			 * concerneAussi = "<BR/>Concerne aussi : " +
			 * record.data["concerne_aussi"]; }
			 */

			var descriptionTraduit = "";
			if (record.data["description"] != "") {
				descriptionTraduit = this.translate("label_concerne_aussi")
						+ " : " + record.data["description"];
			}
			this.garbageDetail
					.setTpl("<table border='0'><tr>"
							+ '<td><img src=resources/images/{image} height=120 /></td>'
							+ '<td>' + treatmentCategories + '<br/>'
							+ modesDeCollecteTraduit + '</td>'
							+ "</tr></table>" + "<div>" + descriptionTraduit
							+ "</div>" + /* concerneAussi + */conseilTraduit
							+ faqTraduit);
			// Bind the record onto the show contact view
			this.garbageDetail.setData(record.data);
			/*
			 * var me = this; var conseil = record.get('conseils'); var
			 * adviceStore = Ext.create('VivreANantes.store.AdviceStore', {
			 * autoLoad : true, listeners : { 'load' : function(store, results,
			 * successful) { store.each(function(record) { if
			 * (record.get('code')==='cons_verre') { console.log(record);
			 * debugger; } }); } } });
			 */

			// this._application.stores
			// Ext.getStore("structurestore");
			/*
			 * if (record.data["joursCollecteBacsBleus !== "") { var jour =
			 * "{joursCollecteBacsBleus}"; } else if
			 * (record.data["joursCollecteBacsBleus !== "") { var jour =
			 * "{joursCollecteBacsBleus}"; } else { var jour =
			 * "{joursCollecteTriSac}"; }
			 */
			// this.homeCollectModDetail.setTpl("<div>{denominationCompleteVoie}{complementVoie}</div><div>Modes
			// de collecte : {modesCollecte}</div><div>Jours de collecte : " +
			// jour + "</div>");
			// title:record.get('name'),
			// html: record.get('description_fr'),
			// scrollable: true,
			// styleHtmlContent: true
			// CRN debut
			//		
			// Push the show contact view into the navigation view
			this.getGarbagesView().push(this.garbageDetail);
		}
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les déchets, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	onGarbageStoreFilter : function() {
		if (this.garbagesList == null) {
			this.garbagesList = Ext
					.create('VivreANantes.view.garbages.GarbagesList');
		}
		var title = this.translate("label_resultat_recherche");
		this.garbagesList.setTitle(title);
		this.getGarbagesFormSelect().setValue("");
		this.filter();
		this.getGarbagesView().push(this.garbagesList);

	},

	filter : function() {
		var text = this.getGarbagesFormText();
		var category = this.getGarbagesFormSelect();
		var store = this.getGarbagesList().getStore();

		store.clearFilter();
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterGarbage = Ext.create('Ext.util.Filter', {
			filterFn : function(item) {
				var escaperegex = Ext.String.escapeRegex;
				var texttest = new RegExp(escaperegex(text.getValue()), 'ig');
				// var categorietest = new
				// RegExp(escaperegex(select.getValue()));
				var categorietest = new RegExp(category.getValue());

				return (texttest.test(item.data["nom"]) && (category.getValue() === 'all' || categorietest
						.test(item.data["categorie_usuelle"])));
			}
		});
		store.filter(filterGarbage);
	}

});
