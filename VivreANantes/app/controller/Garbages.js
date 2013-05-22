/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.Garbages', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			garbagesView : 'garbagesView',
			garbagesList : 'garbagesList',
			garbageDetail : 'garbagesdetails',
			garbagesForm : 'garbagesForm',
			garbagesFormText : '#garbagesFormText',
			garbagesFormSelect : '#garbagesFormSelect',
			// CRN_DEBUT
			usualCategoriesList : 'usualCategoriesList',
			advicesList : 'advicesList',
			faqList : 'faqList',
			wasteTreatmentsCategoriesList : 'wasteTreatmentsCategoriesList',
			collectModList : 'collectModList'
			// CRN_FIN
		},
		control : {
			garbageDetail : {
				updatedata : 'onUpdateDataDetail'
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
				change : 'onGarbageStoreFilter'
			}
			// CRN_DEBUT
			,
			advicesList : {
				initialize : 'onInitGarbagesAdvices'
			},
			faqList : {
				initialize : 'onInitFaq'
			},
			wasteTreatmentsCategoriesList : {
				initialize : 'onInitGarbagesWasteTreatmentsCategoriesList'
			},
			collectModList : {
				initialize : 'onInitGarbagesCollectModList'
			}
			// CRN_FIN
		}
	},

	// DEBUG
	onDebug : function() {
		console.log('DEBUG');
	},
	// FIN DEBUG

	// CRN_DEBUT

	getArrayFromString : function(string) {
		string = string.replace(", /g", ",").replace(" ,/g", ",");
		return string.split(',');
	},

	getAdviceString : function(conseils) {
		var conseilTraduit = "";
		// var arrayConseils = conseils.split(',');
		// TODO utiliser getArrayFromString à la place
		var arrayConseils = conseils.replace(", /g", ",").replace(" ,/g", ",").split(',');
		// On parcours les conseils
		if (arrayConseils.length > 0) {
			var dataAdvices = this.getAdvicesList().getStore().getData();
			dataAdvices.each(function(recordAdvice) {
						for (i in arrayConseils) {
							if (recordAdvice.raw.code === arrayConseils[i]) {
								conseilTraduit += "<BR/><B>"
										+ recordAdvice.raw.libelle
										+ "</B><BR/>"
										+ recordAdvice.raw.description;
								if (recordAdvice.raw.fiche !== "") {
									conseilTraduit += "Plus d'infos : "
											+ "<A HREF='#'>"
											+ recordAdvice.raw.fiche + "</A>";
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
	 * Renvoie une chaine de caractère correspond aux commentaires sur un
	 * élément de l'application
	 * 
	 * @param {}
	 *            code
	 * @return {}
	 */
	getFaqString : function(code) {
		var faqTraduit = "";
		// On parcours les remarques de la faq
		var dataFaq = this.getFaqList().getStore().getData();
		dataFaq.each(function(recordFaq) {
			// TODO utiliser getArrayFromString à la place
					var arrayElementsFaq = recordFaq.raw.elements.replace(", /g", ",").replace(" ,/g", ",").split(',');
					for (i in arrayElementsFaq) {
						if (arrayElementsFaq[i] === code) {
							faqTraduit += "<BR/><A HREF=faq>FAQ</A> : <B>" + recordFaq.raw.libelle
									+ "</B><BR/>"
									+ recordFaq.raw.description_fr;

						}

					}
				});
		/*if (faqTraduit !== "") {
			faqTraduit = "<BR/><BR/>Commentaires (extraits FAQ) : " + faqTraduit;
		}*/
		return faqTraduit;
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

	onInitFaq : function(list) {
		console.log('onInitFaq');
		var store = Ext.create('VivreANantes.store.FaqStore');
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
		console.log('showGarbagesDetail');

		if (record) {
			if (!this.garbageDetail) {
				this.garbageDetail = Ext
						.create('VivreANantes.view.garbages.GarbagesDetails');
			}

			console.log(record.data);
			console.log(this.garbageDetail);

			// CRN debut
			var conseilTraduit = "";
			var conseils = "";
			var modesDeCollecte = "";
			var treatmentCategories = "Recyclable : ";
			if (record.data.conseils !== '') {
				conseils = record.data.conseils + ",";
			}
			// conseils de catégories de traitement
			var conseilTraitementsTraduit = "";
			if (record.data.categorie !== '') {
				var dataWasteTreatmentsCategories = this
						.getWasteTreatmentsCategoriesList().getStore()
						.getData();
				dataWasteTreatmentsCategories.each(function(recordCategories) {
							if (recordCategories.raw.code === record.data.categorie) {
								conseils += recordCategories.raw.conseils;
								modesDeCollecte += recordCategories.raw.modesCollecte;
								treatmentCategories += recordCategories.raw.recyclable;
							}
						});
			}
			// conseils
			conseilTraduit = this.getApplication()
					.getController('VivreANantes.controller.Garbages')
					.getAdviceString(conseils);
			// faq
			var faqTraduit = this.getApplication()
					.getController('VivreANantes.controller.Garbages')
					.getFaqString(record.data.code);

			// Modes de collecte
			var modesDeCollecteTraduit = "";
			var arrayModesDeCollecte = modesDeCollecte.split(',');
			// On parcours les modes de collecte
			if (arrayModesDeCollecte.length > 0) {
				var dataCollectMods = this.getCollectModList().getStore()
						.getData();
				dataCollectMods.each(function(recordCollectMod) {
					for (i in arrayModesDeCollecte) {
						if (recordCollectMod.raw.code === arrayModesDeCollecte[i]) {
							modesDeCollecteTraduit += "<A HREF='#'>"
									+ recordCollectMod.raw.libelle + "</A>";
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
			treatmentCategories = treatmentCategories
					.replace("PAS_POUBELLE/g",
							"<DIV STYLE='color:red' size='4'>NON</DIV> ne pas mettre à la poubelle.");
			treatmentCategories = treatmentCategories.replace("OUI/g",
					"<DIV STYLE='color:green' size='4'>OUI</DIV>");
			treatmentCategories = treatmentCategories.replace("NON/g",
					"<DIV STYLE='color:red' size='4'>NON</DIV>");
			var concerneAussi = "";
			if (record.data.concerne_aussi !== "") {
				concerneAussi = "<BR/>Concerne aussi : "
						+ record.data.concerne_aussi;
			}

			this.garbageDetail
					.setTpl("<table border='0'><tr>"
							+ '<td><img src=resources/images/{image} height=120 /></td>'
							+ '<td>' + treatmentCategories + '<br/>'
							+ modesDeCollecteTraduit + '</td>'
							+ "</tr></table>" + '<div>{nom}</div>'
							+ '{description}' + concerneAussi + conseilTraduit + faqTraduit);
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
			 * if (record.data.joursCollecteBacsBleus !== "") { var jour =
			 * "{joursCollecteBacsBleus}"; } else if
			 * (record.data.joursCollecteBacsBleus !== "") { var jour =
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

		var text = this.getGarbagesFormText();
		var select = this.getGarbagesFormSelect();
		var store = this.getGarbagesList().getStore();

		store.clearFilter();
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterGarbage = Ext.create('Ext.util.Filter', {
			filterFn : function(item) {
				var escaperegex = Ext.String.escapeRegex;
				var texttest = new RegExp(escaperegex(text.getValue()), 'ig');
				var categorietest = new RegExp(escaperegex(select.getValue()));

				return (texttest.test(item.data.nom) && (select.getValue() === 'all' || categorietest
						.test(item.data.categorieUsuelle)));
			}
		});
		store.filter(filterGarbage);
	}

});
