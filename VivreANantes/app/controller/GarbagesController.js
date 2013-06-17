/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.GarbagesController', {
	extend : 'VivreANantes.controller.AbstractController',

	config : {
		refs : {
			garbagesView : 'garbages_xtype',
			garbagesList : 'garbagesList_xtype',
			garbageDetail : 'garbagesDetails_xtype',
			garbagesForm : 'garbagesForm_xtype',
			garbagesFormText : '#garbagesFormText',
			garbagesFormSelect : '#garbagesFormSelect',
			usualCategoriesList : 'usualCategoriesList_xtype',
			usualSubCategoriesList : 'usualSubCategoriesList_xtype',
			advicesList : 'advicesList_xtype',
			wasteTreatmentsCategoriesList : 'wasteTreatmentsCategoriesList',
			collectModList : 'collectModList_xtype'
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
			usualSubCategoriesList : {
				initialize : 'onInitUsualSubCategoriesList'
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
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'usualCategoriesList_xtype button' : {
				tap : 'onShowDetails'
			},
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'usualSubCategoriesList_xtype button' : {
				tap : 'onShowDetails'
			},
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'garbagesDetails_xtype button' : {
				tap : 'onTapLinkButton'
			}
		}
	},

	// DEBUG
	onDebug : function() {
		console.log('DEBUG');
	},

	onTapLinkButton : function(button, e, eOpts) {
		this.manageLinkButtons(button.id);
	},

	onShowDetails : function(button, e, eOpts) {
		// La catégorie "cu_toxique" possède des sous-catégories
		if (button.id == "cu_toxique") {
			this.showSubCategory(button.id);
		} else {
			this.showDetails(button.id);
		}

	},

	showDetails : function(collectModId) {

		if (this.garbagesList == null) {
			this.garbagesList = Ext
					.create('VivreANantes.view.garbages.GarbagesList');
		}
		var title = this.translate("label_" + collectModId);
		if (title == collectModId) {
			title = this.translateWithUpperFirstLetter("label_dechets");
		}
		this.garbagesList.setTitle(title);
		this.getGarbagesFormSelect().setValue(collectModId);
		this.filter();
		this.getGarbagesView().push(this.garbagesList);
	},
	/*
	 * onShowSubCategory : function(button, e, eOpts) {
	 * this.showSubCategory(button.id); },
	 */
	showSubCategory : function(collectModId) {
		if (this.usualSubCategoriesList == null) {
			this.usualSubCategoriesList = Ext
					.create('VivreANantes.view.garbages.UsualSubCategoriesList');
		}
		this.getGarbagesView().push(this.usualSubCategoriesList);
	},

	onInitUsualCategoriesList : function(container) {
		// var categorieUsuelleStore =
		// Ext.create('VivreANantes.store.CategorieUsuelleStore');
		// list.setStore(categorieUsuelleStore);
		var arrayItemsToShow = new Array();
		var stLocale = "fr";
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_plastique", stLocale),
					"id" : "cu_plastique",
					"image" : "grande_bouteille_huile_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_papierscartons", stLocale),
					"id" : "cu_papierscartons",
					"image" : "cartonette_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_metal", stLocale),
					"id" : "cu_metal",
					"image" : "barquette_aluminium.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_vertbois", stLocale),
					"id" : "cu_vertbois",
					"image" : "feuillages_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_verrevaisselle", stLocale),
					"id" : "cu_verrevaisselle",
					"image" : "vase_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_vetementtissu", stLocale),
					"id" : "cu_vetementtissu",
					"image" : "jean_usage_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_encombrant", stLocale),
					"id" : "cu_encombrant",
					"image" : "refrigerateur_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_divers", stLocale),
					"id" : "cu_divers",
					"image" : "bouchon_liege_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_nourriture", stLocale),
					"id" : "cu_nourriture",
					"image" : "epeluchure_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_electronique", stLocale),
					"id" : "cu_electronique",
					"image" : "telephone_fixe_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : this.translateWithUpperFirstLetter("label_cu_toxique", stLocale),
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

	onInitUsualSubCategoriesList : function(container) {
		var arrayItemsToShow = new Array();
		arrayItemsToShow.push({
					"libelle" : "Jardinage",
					"id" : "scu_toxiquejardin",
					"image" : "desherbant_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Garage",
					"id" : "scu_toxiquegarage",
					"image" : "batterie_voiture_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Cuisine",
					"id" : "scu_toxiquecuisine",
					"image" : "bouteille_ammoniaque_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Salle de bain",
					"id" : "scu_toxiquesdb",
					"image" : "desinfectant_toilette_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Bricolage",
					"id" : "scu_toxiquebrico",
					"image" : "peinture_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Traitement des parasites",
					"id" : "scu_toxiqueparasite",
					"image" : "mortaurat_petit.png"
				});
		arrayItemsToShow.push({
					"libelle" : "Déchets toxiques divers",
					"id" : "scu_toxiquedivers",
					"image" : "pile_45_petit.png"
				});

		var arrayItems = this.getContentButtonsPanel(arrayItemsToShow);
		container.setItems(arrayItems);
	},

	getArrayFromString : function(string) {
		string = string.replace(", /g", ",").replace(" ,/g", ",");
		return string.split(',');
	},

	getAdviceString_old : function(conseils) {
		var thisController = this;
		// var conseilTraduit = "";
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
						conseilTraduit = conseilTraduit + "<BR/>"
								+ thisController.translate("label_Conseil")
								+ " : <B>" + recordAdvice.raw["libelle"]
								+ "</B><BR/>" + recordAdvice.raw["description"];
						if (recordAdvice.raw["fiche"] !== "") {
							conseilTraduit += thisController
									.makeTextLink_old("informationsPanel");

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
			var title = "<I>" + this.translate("label_dechet")+ "</I> "+ record.data["nom"];
			this.garbageDetail.setTitle(title);
			console.log(record.data);
			console.log(this.garbageDetail);

			// var conseilTraduit = "";
			var conseils = "";
			var modesDeCollecte = "";
			var treatmentCategories = "";
			if (record.data["conseils"] !== '') {
				conseils = record.data["conseils"] + ",";
			}
			// conseils de catégories de traitement
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
			if (treatmentCategories === "OUI") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR=green size=4>"
						+ this.translate("label_OUI") + "</FONT>";
			} else if (treatmentCategories === "NON") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='red' size=4>"
						+ this.translate("label_NON") + "</FONT>";
			} else if (treatmentCategories === "PAS_POUBELLE") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='orange' size=4>"
						+ this.translate("label_NON") + "</FONT>"
						+ this.translate("label_pas_poubelle");
			} else if (treatmentCategories === "OUI_ET_NON") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='red' size=4>"
						+ this.translate("label_NON") + "</FONT>" + " / "
						+ "<FONT COLOR=green size=4>"
						+ this.translate("label_OUI") + " "
						+ this.translate("label_pour_collecte_bac_jaune")
						+ "</FONT>";
			} else {
				treatmentCategories = "";
			}

			// Modes de collecte
			var modesDeCollecteTraduit = "";
			var arrayItemsToShow = new Array();
			arrayItemsToShow.push({
						"html" : treatmentCategories
								+ "<br/><br/>Modes de collecte :",
						"id" : "garbagesdetails_recyclable"
					});
			var arrayModesDeCollecte = modesDeCollecte.split(',');
			// On parcours les modes de collecte
			if (arrayModesDeCollecte.length > 0) {
				var dataCollectMods = this.getCollectModList().getStore()
						.getData();
				var numModCollect = 0;
				dataCollectMods.each(function(recordCollectMod) {
					for (i in arrayModesDeCollecte) {
						if (recordCollectMod.raw["code"] === arrayModesDeCollecte[i]) {
							arrayItemsToShow.push(thisController
									.makeLinkButton("collectMods_xtype",
											arrayModesDeCollecte[i]));
						}
					}
				});
			}
			if (modesDeCollecteTraduit !== "") {
				modesDeCollecteTraduit = "<BR/>Modes de collecte : "
						+ modesDeCollecteTraduit;
			}

			/*
			 * this.garbageDetail .setTpl("<table border='0'><tr>" + '<td><img
			 * src=resources/images/{image} height=120 /></td>' + '<td>' +
			 * treatmentCategories + '<br/>' + modesDeCollecteTraduit + '</td>' + "</tr></table>" + "<div>" +
			 * descriptionTraduit + "</div>" +
			 */
			// image
			var imageComplet = "<img src='resources/images/"
					+ record.data["image"] + "' width='150px' />";
			this.garbageDetail.items.items['0'].items.items['0'].setData({
						'image' : imageComplet
					})
			// garbagesdetails_recyclable
			// this.garbageDetail.items.items['0'].items.items['1'].items.items['0'].setData({'recyclable_string':treatmentCategories
			// })
			// garbagesdetails_recyclableetmodesdecollecte
			// var items = "{ xtype : 'container', layout : 'vbox', id :
			// 'garbagesdetails_recyclableetmodesdecollecte', items : [ { id :
			// 'garbagesdetails_recyclable', html: 'recyclable : <FONT
			// COLOR=green size=4>OUI</FONT>'<br/><br/>Modes de collecte :'}]}"

			this.garbageDetail.items.items['0'].items.items['1']
					.setItems(arrayItemsToShow);

			// Ajout de la description
			var descriptionTraduit = "";
			if (record.data["description"] != "") {
				descriptionTraduit = this.translate("label_concerne_aussi")
						+ " : " + record.data["description"] + "<br/><br/>";
			}
			this.setDataElement(this.garbageDetail,
					"garbagesdetails_description", {
						'concerne_aussi' : descriptionTraduit
					})
			// this.garbageDetail.items.items['1'].setData()
			// garbagesdetails_conseils
			// this.garbageDetail.items.items['2'].setData({'conseils_string' :
			// conseilTraduit})

			// Ajout des conseils
			var arraysItemsAdvices = this.getItemsAdvices(conseils);
			this.setItemsElement(this.garbageDetail,
					"garbagesdetails_conseils", arraysItemsAdvices);

			// Ajout des commentaires
			this.setItemsElement(this.garbageDetail,
					"garbagesdetails_commentaires", this
							.getItemsComments(record.data["code"]));

			// Bind the record onto the show contact view
			this.garbageDetail.setData(record.data);

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
