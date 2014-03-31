/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.GarbagesController', {
	extend : 'VivreANantes.controller.AbstractController',
	requires: ['VivreANantes.view.garbages.GarbagesContainer','VivreANantes.view.garbages.GarbagesForm','VivreANantes.view.garbages.GarbagesList'],
	config : {
		refs : {
			garbagesView : 'garbages_xtype',
			garbagesContainer : 'garbagescontainer_xtype',
			garbagesList : 'garbagesList_xtype',
			garbageDetail : 'garbagesDetails_xtype',
			garbagesForm : 'garbagesForm_xtype',
			garbagesFormText : '#garbagesFormText',
			garbagesFormSelect : '#garbagesFormSelect',
			garbagesFormButton : '#garbagesFormButton',
			garbagesButtonsPanel : 'garbagesButtonsPanel_xtype',
			usualCategoriesButtonsPanel : 'usualCategoriesButtonsPanel_xtype',
			advicesList : 'advicesList_xtype',
			// collectModList : 'collectModList_xtype',
			usualCategoriesList2 : 'usualCategoriesList2_xtype',
			informationsList : 'informationsList_xtype'
		},
		control : {
			collectModsView : {},
			collectModsList : {
				initialize : "onInitCollectModsList"

			},
			usualCategoriesButtonsPanel : {
				initialize : 'onInitUsualCategoriesButtonsPanel',
				show : 'onShowUsualCategoriesButtonsPanel'
			},
			/*
			 * usualSubCategoriesButtonsPanel : { initialize :
			 * 'onInitUsualSubCategoriesButtonsPanel' },
			 */
			garbagesList : {
				initialize : 'onInitGarbages',
				itemtap : 'showGarbagesDetail_old'
			},

			garbagesView : {
				push : 'onGarbagesViewPush',
				show : 'onActivate',
				back : 'onPushBackButton1'
			},

			garbagesFormText : {
				// keyup : 'onGarbageStoreFilter',
				// change : 'onGarbageStoreFilter',
				// clearicontap : 'onGarbageStoreFilter'
			},
			garbagesFormSelect : {
			
			},
			garbagesFormButton : {
				tap : 'onTapGarbagesFormButton',
				back : 'onPushBackButton2'
			},
			advicesList : {
				initialize : 'onInitGarbagesAdvices'
			},

			/*wasteTreatmentsCategoriesList : {
				initialize : 'onInitGarbagesWasteTreatmentsCategoriesList'
			},*/
			/*collectModList : {
				initialize : 'onInitGarbagesCollectModList'
			},*/
			informationsList : {
				initialize : 'onInitGarbagesInformationsList'
			},
			usualCategoriesList2 : {
				initialize : 'onInitGarbagesUsualCategoryList'
			},
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'usualCategoriesButtonsPanel_xtype button' : {
				tap : 'onShowDetails',
				back : 'onPushBackButton3'
			},
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'usualSubCategoriesButtonsPanel_xtype button' : {
				tap : 'onShowDetails',
				back : 'onPushBackButton4'
			},
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'garbagesButtonsPanel_xtype button' : {
				tap : 'showGarbagesDetail',
				back : 'onPushBackButton5'
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'garbagesDetails_xtype button' : {
				tap : 'onTapLinkButton',
				back : 'onPushBackButton6'
			}
			
			
		}
	},
	
	
			onPushBackButton1 : function() {
				// console.log("onPushBackButton1");
				// this.onPushBackButton();
				
				// Retour sur la page principale de "déchets"
				// this.getGarbagesView().setActiveItem(0);
				// this.manageBackButton("garbages_xtype", true);

			},
			onPushBackButton2 : function() {
				// console.log("onPushBackButton2");
				// this.onPushBackButton();
			},
			onPushBackButton3 : function() {
				// console.log("onPushBackButton3");
				// this.onPushBackButton();
			},
			onPushBackButton4 : function() {
				// console.log("onPushBackButton4");
				// this.onPushBackButton();
			},
			onPushBackButton5 : function() {
				// console.log("onPushBackButton5");
				// this.onPushBackButton();
			},
			onPushBackButton6 : function() {
				// console.log("onPushBackButton6");
				// this.onPushBackButton();
			},
			
	onActivate : function(newActiveItem, container, oldActiveItem, eOpts) {
		this.putInButtonsPanel("cu");
	},
	
	putInButtonsPanel : function(stringFilter) {

		// utilisation de commonDatasUsualCategory
		var arrayItemsToShow = this.getArrayItemsToShowForButtons(
				commonDatasUsualCategory, stringFilter);

		var result = new Array();
		if (arrayItemsToShow.length > 0) {

			var theItems = arrayItemsToShow;
			for (var i = 0; i < theItems.length; i++) {

				var stLibelle = _decoupe(theItems[i]["libelle"]);
				result.push({
							code : theItems[i].id,
							label : stLibelle,
							image : theItems[i].image
						});
			}
		}

		var nbGarbagesMax = 18; // la page UsualCategoriesButtonPanel.js affiche
								// 18 éléments
		this.setDataInButtonsWithManyLines(this
						.getUsualCategoriesButtonsPanel(),
				"usualCategoriesButtonsPanel", result, nbGarbagesMax, 3);
	},

	onTapLinkButton : function(button, e, eOpts) {
		this.saveBackButton("garbages_xtype", false);
		this.manageLinkButtons(button._data["code"]);
	},

	onShowDetails : function(button, e, eOpts) {
		// Suppression des sous-catégories de toxique
		// La catégorie "cu_toxique" possède des sous-catégories
		// if (button._data["code"] == "cu_toxique") {
		// this.showSubCategory(button._data["code"]);
		// } else {
		// this.showDetails(button._data["code"]);
		// }
		this.showDetails(button._data["code"]);
		this.saveBackButton("garbages_xtype", true);
	},

	/**
	 * Invoqué lorsque l'on clique sur un bouton d'une catégorie usuelle
	 * 
	 * @param {}
	 *            collectModId
	 */
	showDetails : function(collectModId) {
		this.getGarbagesFormText().setValue("");
		this.getGarbagesFormSelect().setValue(collectModId);
		this.filter2();
		this.getGarbagesView().push(this.garbagesButtonsPanel);
		this.saveBackButton("garbages_xtype", true);
	},

	showSubCategory : function(collectModId) {
	
		// var usualCategoryStore = this.getUsualCategoriesList2().getStore();
		// var arrayItemsToShow = this.getDatasForButtons(usualCategoryStore, "cu_toxique");
		// var arrayItems = this.getContentButtonsPanel(arrayItemsToShow);
		// this.getUsualCategoriesButtonsPanel().setItems(arrayItems);
		
		this.putInButtonsPanel("cu_toxique");
	},

	onInitUsualCategoriesButtonsPanel : function(container) {
	
	},

	translateWithUpperFirstLetterAndDecoupe : function(stLabel) {
		return this.decoupe(this.translateWithUpperFirstLetter(stLabel));
	},

	/*
	 * 
	 */
	onShowUsualCategoriesButtonsPanel : function() {
		// Efface le champ texte de l'écran recherche
		this.getGarbagesFormText().setValue("");
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

	/**
	 * A l'initialisation de la fenêtre d'accueil : initialisation de la liste
	 * des déchets
	 */
	onInitGarbages : function(list) {
		var garbageStore = Ext.create('VivreANantes.store.GarbageStore');
		list.setStore(garbageStore);
	},

	/**
	 * Initialisation de la liste des conseils
	 */
	onInitGarbagesAdvices : function(list) {
		var store = Ext.create('VivreANantes.store.AdviceStore');
		list.setStore(store);
	},

	/**
	 * Initialisation de la liste des catégories de traitement
	 */
	/*onInitGarbagesWasteTreatmentsCategoriesList : function(list) {
		var store = Ext
				.create('VivreANantes.store.WasteTreatmentsCategoriesStore');
		list.setStore(store);
	},*/

	/**
	 * Initialisation de la liste des modes de collectes
	 */
	/*onInitGarbagesCollectModList : function(list) {
		var store = Ext.create('VivreANantes.store.CollectModStore');
		list.setStore(store);
	},*/

	/**
	 * Initialisation de la liste des fiches explicatives de collectes
	 */
	onInitGarbagesInformationsList : function(list) {
		var store = Ext.create('VivreANantes.store.InformationsStore');
		list.setStore(store);
	},

	/**
	 * Initialisation de la liste des fiches explicatives de collectes
	 */
	onInitGarbagesUsualCategoryList : function(list) {
		var store = Ext.create('VivreANantes.store.CategorieUsuelleStore');
		list.setStore(store);
	},
	onGarbagesViewPush : function(view, item) {

		// this.garbagesList().deselectAll();

	},

	

	showGarbagesDetail : function(button, e, eOpts) {

		var codeGarbage = button._data["code"];
		// Récupère l'élément
		var record = this.getElementFromStore(codeGarbage);

		var thisController = this;
		if (record) {
			if (!this.garbageDetail) {
				this.garbageDetail = Ext
						.create('VivreANantes.view.garbages.GarbagesDetails');
			}
			var title = "<I>" + this.translate("label_dechet") + "</I> "
					+ record.data["nom"];
			this.garbageDetail.setTitle(title);

			// var conseilTraduit = "";
			var conseils = "";
			var modesDeCollecte = "";
			var treatmentCategories = "";
			conseils = record.data["conseils"];
			modesDeCollecte = record.data["modco"];
			treatmentCategories = record.data["rec"];
			/*if (record.data["conseils"] !== '') {
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
			}*/
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
						+ " : " + "<FONT COLOR='orange' size=4>"
						+ this.translate("label_pour_collecte_bac_jaune")
						+ "</FONT>";
			} else {
				treatmentCategories = "";
			}
			treatmentCategories = this.stringUpperFirstLetter(treatmentCategories);

			// Modes de collecte
			this.garbageDetail.items.items['0'].items.items['1'].items.items['0'].setData({recyclable_string:treatmentCategories});
			var modesDeCollecteTraduit = "";
			
			var arrayItemsToShow = new Array();
				/*
			 * arrayItemsToShow.push({ "html" : treatmentCategories + "<br/><br/>Modes
			 * de collecte :", "id" : "garbagesdetails_recyclable" });

			 */
			var arrayModesDeCollecte = modesDeCollecte.split(',');
			// On parcours les modes de collecte
			if (arrayModesDeCollecte.length > 0) {

				for (var j = 0; j < commonDatasCollectMods.length; j++) {
					for (var i = 0; i < arrayModesDeCollecte.length; i++) {
						if (commonDatasCollectMods[j]["code"] === arrayModesDeCollecte[i]) {
							var imageValue = commonDatasCollectMods[j]["image"];

							var codeValue = "collectMods_xtype"
									+ thisController.SEPARATOR
									+ commonDatasCollectMods[j]["code"];
							var libelleValue = _stringUpperFirstLetter(commonDatasCollectMods[j]["libelle"]);
							arrayItemsToShow.push({
										image : imageValue,
										code : codeValue,
										label : libelleValue
									});


						}
					}
				}


				// // STORE dataCollectMods
				// var dataCollectMods =
				// this.getCollectModList().getStore().getData();
				// var numModCollect = 0;
				// dataCollectMods.each(function(recordCollectMod) {
				// for (var i = 0; i < arrayModesDeCollecte) {
				// if (recordCollectMod.raw["code"] === arrayModesDeCollecte[i])
				// {
				// var imageValue = recordCollectMod.data['image'];
				// var codeValue = "collectMods_xtype" +
				// thisController.SEPARATOR + recordCollectMod.data['code'];
				// var libelleValue =
				// _stringUpperFirstLetter(recordCollectMod.data['libelle']);
				// arrayItemsToShow.push({image:imageValue,code:codeValue,label:libelleValue});
				// /*arrayItemsToShow.push(thisController
				// .makeLinkButton("collectMods_xtype",
				// arrayModesDeCollecte[i]));
				// */
				// }
				// }
				// });

			}
			if (modesDeCollecteTraduit !== "") {
				modesDeCollecteTraduit = "<BR/>Modes de collecte : " + modesDeCollecteTraduit;
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
			// this.setDataElement(this.garbageDetail,"garbagesdetails_image",
			// {'image' : imageComplet})
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
			// Affecte les modes de collecte
			
			// this.garbageDetail.items.items['0'].items.items['1'].setItems(arrayItemsToShow);
			var nbElementsMax = 8;	// la page GarbagesDetails.js affiche 8 éléments
			this.setDataInButtons(this.garbageDetail.items.items['0'].items.items['1'], 
									"garbagesdetails_collectmod", arrayItemsToShow, nbElementsMax);
			//this.setItemsElement(this.garbageDetail,
			//		"garbagesdetails_recyclableetmodesdecollecte",
			//		arrayItemsToShow);
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

			// Ajout des conseils KO
			/*var arraysItemsAdvices = this.getItemsAdvices(conseils);
			this.setItemsElement(this.garbageDetail,
					"garbagesdetails_conseils", arraysItemsAdvices);*/
			var nbElementsMax = 2;	// la page GarbagesDetails.js affiche 2 éléments
			var arraysConseils = this.getArrayItemsToShowAdvices(conseils);
			this.setDatasConseils(this.garbageDetail.items, 
									"garbagesdetails_conseils", "libelle", arraysConseils.les_libelles, nbElementsMax);
			this.setDatasConseils(this.garbageDetail.items, 
									"garbagesdetails_conseils", "bouton", arraysConseils.les_boutons, nbElementsMax);
			// var arraysItemsAdvices = this.getItemsAdvices(conseils);
			// this.setItemsElement(this.garbageDetail,
			// "garbagesdetails_conseils", arraysItemsAdvices);

			// Ajout des commentaires OK
			var code = record.data["code"];
			// this.setItemsElement(this.garbageDetail,
			// "garbagesdetails_commentaires", this.getItemsComments(code,
			// title));
			var arraysCommentaires = this.getArrayItemsToShowComments(code,
					title);
			var nbElementsMax = 3; 
			// la page GarbagesDetails.js  affiche 3 éléments
			this.setDataInButtons(this.garbageDetail,
					"garbagesdetails_commentaires",
					arraysCommentaires.les_libelles, nbElementsMax);
			var index = this.garbageDetail.items.keys
					.indexOf("garbagesdetails_envoyer");
			this.garbageDetail.items.items[index].setData({
						code : arraysCommentaires.le_titre
					});
			/*
			 * var arraysItemsComments =
			 * this.getItemsComments(record.data["code"], title)
			 * this.setItemsElement(this.garbageDetail,
			 * "garbagesdetails_commentaires", arraysItemsComments);
			 */

			// Bind the record onto the show contact view
			this.garbageDetail.setData(record.data);

			// Push the show contact view into the navigation view
			this.getGarbagesView().push(this.garbageDetail);
			
		}
	},

	/*
	 * Renvoie le mode de collecte
	 */
	getElementFromStore : function(idElement) {
		var result;
		var datas = this.getApplication()
				.getController("VivreANantes.controller.GarbagesController")
				.getGarbagesList().getStore().getData();
		datas.each(function(record) {
					if (record.data["code"] === idElement) {
						result = record;
					}
				});
		return result;
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les déchets, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	onGarbageStoreFilter : function() {
		// if (this.garbagesList == null) {
		// this.garbagesList = Ext
		// .create('VivreANantes.view.garbages.GarbagesList');
		// }
		// var title = this.translate("label_resultat_recherche");
		// this.garbagesList.setTitle(title);
		// this.getGarbagesFormSelect().setValue("");
		// this.filter();
		// this.getGarbagesView().push(this.garbagesList);
		this.getGarbagesFormSelect().setValue("all");
		this.filter2();
		this.getGarbagesView().push(this.garbagesButtonsPanel);
	},
	
	onTapGarbagesFormButton : function(button, e, eOpts) {
		this.getGarbagesFormSelect().setValue('all');
		this.filter2();
		this.getGarbagesView().push(this.garbagesButtonsPanel);
	},


	filter2 : function() {
		var result = new Array();

		if (this.garbagesList == null) {
			this.garbagesList = Ext
					.create('VivreANantes.view.garbages.GarbagesList');
		}
		var arrayItemsToShow = this.getGarbagesList().getStore().getData();

		if (arrayItemsToShow.length > 0) {

			// var text = this.getGarbagesFormText();
			var text = _utilRetireAccent(this.getGarbagesFormText().getValue());
			var category = this.getGarbagesFormSelect();
			var escaperegex = Ext.String.escapeRegex;
			// var texttest = new RegExp(escaperegex(text.getValue()), 'ig');
			// var temp = text.getValue();
			// var texttest = new RegExp(/vaisselle/gi);
			
			var categorietest = new RegExp(category.getValue());

			var theItems = arrayItemsToShow.items;
			for (var i = 0; i < theItems.length; i++) {
				var aData = theItems[i].data;
				// Important : il faut recréer l'expression régulière à chaque fois sinon les résultats sont faux !
				var texttest = new RegExp(escaperegex(text), 'ig');
				var nom_description_sansAccents = aData["nom_description_sansAccents"];
				if ((aData["categorie_usuelle"] === category.getValue() || category
						.getValue() === "all")
						&& texttest.test(nom_description_sansAccents)) {
					// Ajoute les <br/>
					var stLibelle = this.decoupe(aData["nom"]);
					result.push({
								// id : aData["code"],
								//code : aData["code"],
								code : aData["code"],
								// libelle : stLibelle,
								label : stLibelle,
								image : aData["image"]
							});
				}
			}
		}
			if (this.garbagesButtonsPanel == null) {
				this.garbagesButtonsPanel = Ext
						.create('VivreANantes.view.garbages.GarbageButtonsPanel');
			}
			// var arrayItems = this.getContentButtonsPanel(result);
			
			// this.removeAllAndSetItems(this.garbagesButtonsPanel, arrayItems);
			var nbGarbagesMax = 39;	// la page GarbageButtonsPanel.js affiche 39 éléments
			this.setDataInButtonsWithManyLines(this.garbagesButtonsPanel, 
									"garbagesButtonsPanel_garbage", result, nbGarbagesMax, 3);
			
	}

});
