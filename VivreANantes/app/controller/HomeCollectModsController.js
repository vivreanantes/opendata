/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define('VivreANantes.controller.HomeCollectModsController', {
	extend : 'VivreANantes.controller.AbstractController',

	config : {
		refs : {
			homeCollectModsView : 'HomeCollectModsView',
			homeCollectModsList : 'homecollectmodslist_xtype',
			homeCollectModDetail : 'homecollectmodsdetails_xtype',
			homeCollectModsForm : 'homecollectmodsform_xtype',
			homeCollectModsFormText : '#homeCollectModsFormText',
			collectModList : 'collectModList_xtype'
		},
		control : {

			homeCollectModDetail : {},

			homeCollectModsList : {
				initialize : 'onInitHomeCollectMods',
				itemtap : 'showHomeCollectModsDetail'

			},

			homeCollectModsView : {
				// On maitient ce control pour pouvoir faire
				// this.getHomeCollectModsView().
				show : 'onShowHomeCollectModsView'
			},

			homeCollectModsFormText : {
				keyup : 'onHomeCollectModStoreFilter',
				change : 'onHomeCollectModStoreFilter',
				clearicontap : 'onHomeCollectModStoreFilter'
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'homecollectmodsdetails_xtype button' : {
				tap : 'onTapLinkButton',
				back : 'onPushBackButton9'
			}
		}
	},

	onPushBackButton9 : function() {
		// console.log("onPushBackButton9");
		// this.onPushBackButton();
	},

	/**
	 * A l'initialisation de la fenêtre
	 */
	onInitHomeCollectMods : function(list) {
		// var homecollectmodStore =
		// Ext.create('VivreANantes.store.HomeCollectModStore');
		// list.setStore(homecollectmodStore);

	},

	onShowHomeCollectModsView : function() {
		if (this.getHomeCollectModsList().getStore() == null) {
			var homecollectmodStore = Ext
					.create('VivreANantes.store.HomeCollectModStore');
			this.getHomeCollectModsList().setStore(homecollectmodStore);
			homecollectmodStore.load();
		}

		// list.setStore(homecollectmodStore);
	},

	onHomeCollectModsViewPush : function(view, item) {

	},

	showHomeCollectModsDetail : function(list, index, node, record) {

		if (record) {
			if (!this.homeCollectModDetail) {
				this.homeCollectModDetail = Ext
						.create('VivreANantes.view.homecollectmods.HomeCollectModsDetails');

				this.homeCollectModDetail.items.items['0']
						.setTpl('Source : Open Data Nantes, valable <font color=red>à partir du 16/09/2013</font></I><br/><br/><div>Adresse : {dcv}{ci}</div><br/>'
								+ '<div>Modes de collecte : <b>{modesCollecte}</b></div><div>Jours de collecte  : <b> {jct} {jcbb} {jcbj} </b></div><BR/>'
								+ '<UL><LI>si vous êtes en <B>"sacs jaune et sacs bleu"</B> (appelés "Trisac") : les sacs sont à déposer dans le même bac, les déchets recyclables dans le sac jaune, les déchets non recyclables dans le sac bleu.</LI>'
								+ '<LI>si vous êtes en <B>"bac jaune et bac bleu"</B> : les déchets recyclables est à déposer dans le bac jaune, les déchets non recyclables dans le bac bleu.</LI></UL> {src}');
			}

			// Récupère les modes de collecte
			var thisController = this;
			var arrayModesDeCollecte = record.raw["modesCollecte"].split(',');
			var arrayItemsToShow = new Array();

			// STORE dataCollectMods
			// var dataCollectMods =
			// this.getCollectModList().getStore().getData();
			// dataCollectMods.each(function(recordCollectMod) {
			// for (i in arrayModesDeCollecte) {
			// if (recordCollectMod.raw["code"] === arrayModesDeCollecte[i]) {
			// var imageValue = recordCollectMod.data['image'];
			// var codeValue = "collectMods_xtype" + thisController.SEPARATOR +
			// recordCollectMod.data['code'];
			// var libelleValue =
			// thisController.stringUpperFirstLetter(recordCollectMod.data['libelle']);
			// arrayItemsToShow.push({image:imageValue,code:codeValue,label:libelleValue});
			// }
			// }
			// });
			for (var j = 0; j < commonDatasCollectMods.length; j++) {
				for (var i = 0; i < arrayModesDeCollecte.length; i++) {
					if (commonDatasCollectMods[j]["code"] === arrayModesDeCollecte[i]) {
						var imageValue = commonDatasCollectMods[j]["image"];
						var codeValue = "collectMods_xtype"
								+ thisController.SEPARATOR
								+ commonDatasCollectMods[j]["code"];
						var libelleValue = this
								.stringUpperFirstLetter(commonDatasCollectMods[j]["libelle"]);
						arrayItemsToShow.push({
									image : imageValue,
									code : codeValue,
									label : libelleValue
								});
					}
				}
			}
			var nbGarbagesdetailsCollectmodsMax = 4;
			thisController.setDataInButtons(
					thisController.homeCollectModDetail.items.items['1'],
					"homecollectmodsdetails_collectmod", arrayItemsToShow,
					nbGarbagesdetailsCollectmodsMax);

			// Bind the record onto the show contact view
			/*
			 * if (record.data["modesCollecte"]!=null &&
			 * record.data["modesCollecte"].indexOf("Bac bleu",0)!=-1) {
			 * record.data.jcbb="<B>Bleu</B> "+value; } if
			 * (record.data["modesCollecte"]!=null &&
			 * record.data["modesCollecte"].indexOf("Bac jaune",0)!=-1) {
			 * record.data.jcbj="<B>Jaune</B> "+value; } else {
			 * record.data.jcbj=value; }
			 */
			this.homeCollectModDetail.items.items['0'].setData(record.data);

			// Push the show contact view into the navigation view
			this.getHomeCollectModsView().push(this.homeCollectModDetail);
		}
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les déchets, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	onHomeCollectModStoreFilter : function() {

		var text = this.getHomeCollectModsFormText();
		var store = this.getHomeCollectModsList().getStore();
		store.clearFilter();
		if (store != null) {

			thisController = this;

			// Filtrer sans casse, en cherchant la chaine dans le nom, en
			// filtrant
			// sur la catégorie
			var filterHomeCollectMod = Ext.create('Ext.util.Filter', {
						filterFn : function(item) {
							var escaperegex = Ext.String.escapeRegex;
							var texteSansAccents = thisController
									.utilRetireAccent(text.getValue());
							var texttest = new RegExp(
									escaperegex(texteSansAccents), 'ig');
							var nomVoie_sansAccents = item.data['nvsa'];
							return (texttest.test(nomVoie_sansAccents));
						}
					});
			store.filter(filterHomeCollectMod);
		}
	},

	onTapLinkButton : function(button, e, eOpts) {
		this.manageLinkButtons(button._data["code"]);
		// console.log("saveBackButton 2");
		// this.saveBackButton("HomeCollectModsView", false);
	}

});
