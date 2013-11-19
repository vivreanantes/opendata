/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define('VivreANantes.controller.HomeCollectModsController', {
	extend : 'VivreANantes.controller.AbstractController',

	config : {
		refs : {
			homeCollectModsView : 'HomeCollectModsView',
			homeCollectModsList : 'HomeCollectModsList',
			homeCollectModDetail : 'homecollectmodsdetails_xtype',
			homeCollectModsForm : 'HomeCollectModsForm',
			homeCollectModsFormText : '#homeCollectModsFormText',
			collectModList : 'collectModList_xtype'
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
			},

			homeCollectModsFormText : {
				keyup : 'onHomeCollectModStoreFilter',
				change : 'onHomeCollectModStoreFilter',
				clearicontap : 'onHomeCollectModStoreFilter'
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'homecollectmodsdetails_xtype button' : {
				tap : 'onTapLinkButton'
			}
		}
	},

	/**
	 * A l'initialisation de la fenêtre
	 */
	onInitHomeCollectMods : function(list) {
		var homecollectmodStore = Ext.create(
			'VivreANantes.store.HomeCollectModStore');
		list.setStore(homecollectmodStore);

	},

	onHomeCollectModsViewPush : function(view, item) {

	},

	showHomeCollectModsDetail : function(list, index, node, record) {

		if (record) {
			if (!this.homeCollectModDetail) {
				this.homeCollectModDetail = Ext
						.create('VivreANantes.view.homecollectmods.HomeCollectModsDetails');

				this.homeCollectModDetail.items.items['0'].setTpl('Source : Open Data Nantes, valable <font color=red>à partir du 16/09/2013</font></I><br/><br/><div>{dcv}{ci}</div>' +
					'<div>Modes de collecte : {modesCollecte}</div><div>Jours de collecte  :  {jct} {jcbb} {jcbj}</div><BR/><UL>Il existe 2 modes de collecte possible : <LI>"sac bleu et sac jaune" (aussi appelé "Trisac") : ils sont à déposer dans le même bac,</LI><LI>"bac bleu et bac jaune" : les déchets recyclables est à déposer dans le bac jaune, les déchets non recyclables dans le bac bleu.</LI></UL> {src}');
			}
			
			// Récupère les modes de collecte
			var thisController = this;
			var arrayModesDeCollecte = record.raw["modesCollecte"].split(',');
							var arrayItemsToShow = new Array();

			var dataCollectMods = this.getCollectModList().getStore().getData();
				dataCollectMods.each(function(recordCollectMod) {
					for (i in arrayModesDeCollecte) {
						if (recordCollectMod.raw["code"] === arrayModesDeCollecte[i]) {
							var imageValue = recordCollectMod.data['image'];
							var codeValue = "collectMods_xtype" + thisController.SEPARATOR + recordCollectMod.data['code'];
							var libelleValue = thisController.stringUpperFirstLetter(recordCollectMod.data['libelle']);
							arrayItemsToShow.push({image:imageValue,code:codeValue,label:libelleValue});	
						}
					}
				});
							var nbGarbagesdetailsCollectmodsMax = 4;
							thisController.setDataInButtons(thisController.homeCollectModDetail.items.items['1'], 
									"homecollectmodsdetails_collectmod", arrayItemsToShow, nbGarbagesdetailsCollectmodsMax);
			

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
		store.clearFilter();
		thisController = this;
		
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterHomeCollectMod = Ext.create('Ext.util.Filter', {
			filterFn : function(item) {
				var escaperegex = Ext.String.escapeRegex;
				var texteSansAccents = thisController.utilRetireAccent(text.getValue());
				var texttest = new RegExp(escaperegex(texteSansAccents), 'ig');
				var nomVoie_sansAccents = item.data['nvsa'];
				return (texttest.test(nomVoie_sansAccents));
			}
		});
		store.filter(filterHomeCollectMod);
	},
	
	onTapLinkButton : function(button, e, eOpts) {
		this.manageLinkButtons(button._data["code"]);
	}

});
