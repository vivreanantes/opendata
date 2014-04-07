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
			homeCollectModsFormText : '#homeCollectModsFormText'
			// , collectModList : 'collectModList_xtype'
		},
		control : {

			homeCollectModDetail : {
			},

			homeCollectModsList : {
				initialize : 'onInitHomeCollectMods',
				itemtap : 'showHomeCollectModsDetail'

			},

			homeCollectModsView : {
				// On maitient ce control pour pouvoir faire this.getHomeCollectModsView().
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
		// var homecollectmodStore = Ext.create('VivreANantes.store.HomeCollectModStore');
		// list.setStore(homecollectmodStore);

	},
	
	onShowHomeCollectModsView : function() {
		if (this.getHomeCollectModsList().getStore()==null) {
			var homecollectmodStore = Ext.create(
				'VivreANantes.store.HomeCollectModStore');
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
				var stSrc = "<b>Source</b> : <font color=red>OpenDataNantes 09/2013</font></I><br/><br/>";
				this.homeCollectModDetail.items.items['0'].setTpl('<b>Adresse</b> : {dcv}{ci}<br/>' +
					'Modes de collecte : <b>{modesCollecte}</b><br/>Jours de collecte : <b>{jct} {jcbb} {jcbj} </b><br/>'+stSrc+'{conseils}');
					// '<UL><LI>si vous êtes en <B>"sac bleu et sac jaune"</B> (appelés "Trisac") : les sacs sont à déposer dans le même bac, les déchets recyclables dans le sac jaune, les déchets non recyclables dans le sac bleu.</LI>'+
					// '<LI>si vous êtes en <B>"bac bleu et bac jaune"</B> : les déchets recyclables est à déposer dans le bac jaune, les déchets non recyclables dans le bac bleu.</LI></UL> {src}');
			}
			
			// Récupère les modes de collecte
			var thisController = this;
			// Récupère les modes de collecte
			var thisController = this;
			var arModesDeCollecte = record.raw["modesCollecte"].split(',');
			var arItemsToShow = new Array();


			// STORE dataCollectMods
			// var dataCollectMods =
			// this.getCollectModList().getStore().getData();
			// dataCollectMods.each(function(recordCollectMod) {
			// for (var i = 0; i < arModesDeCollecte) {
			// if (recordCollectMod.raw["code"] === arModesDeCollecte[i]) {
			// var imageValue = recordCollectMod.data['image'];
			// var codeValue = "collectMods_xtype" + _SEPARATOR +
			// recordCollectMod.data['code'];
			// var libelleValue =
			// _stringUpperFirstLetter(recordCollectMod.data['libelle']);
			// arItemsToShow.push({image:imageValue,code:codeValue,label:libelleValue});
			// }
			// }
			// });
			for (var j = 0; j < _objCollectMods.length; j++) {
				for (var i = 0; i < arModesDeCollecte.length; i++) {
					if (_objCollectMods[j]["code"] === arModesDeCollecte[i]) {
						var imageValue = _objCollectMods[j]["image"];
						var codeValue = "collectMods_xtype"
								+ _SEPARATOR
								+ _objCollectMods[j]["code"];
						var libelleValue = _stringUpperFirstLetter(_objCollectMods[j]["libelleBouton"]);
						arItemsToShow.push({
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
					"homecollectmodsdetails_collectmod", arItemsToShow,
					nbGarbagesdetailsCollectmodsMax);

			// Bind the record onto the show contact view
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
		store.clearFilter(true); // true sinon cela plante dans la version android
		if (store!=null) {

			thisController = this;
			
			// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
			// sur la catégorie
			var filterHomeCollectMod = Ext.create('Ext.util.Filter', {
				filterFn : function(item) {
					var escaperegex = Ext.String.escapeRegex;
					var texteSansAccents = _utilRetireAccent(text.getValue());
					var texttest = new RegExp(escaperegex(texteSansAccents), 'ig');
					var nomVoie_sansAccents = item.data['nvsa'];
					return (texttest.test(nomVoie_sansAccents));
				}
			});
			store.filter(filterHomeCollectMod);
		}
	},
	
	onTapLinkButton : function(button, e, eOpts) {
		var arButtonsId = button._data["code"].split(_SEPARATOR);
		if (arButtonsId[0]==="collectMods_xtype") {
			if (arButtonsId.length > 1) {
				var myController = this.getApplication().getController("VivreANantes.controller.CollectModsController");
				var element = myController.getElementFromStore(arButtonsId[1]);
				if (element!=null) {
					Ext.Msg.alert(element['libelle'], element['description'], Ext.emptyFn);
				}
			}
		} else {
			this.manageLinkButtons(button._data["code"]);
		}
		// console.log("saveBackButton 2");
		// this.saveBackButton("HomeCollectModsView", false);
	}

});
