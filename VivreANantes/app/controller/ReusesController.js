/**
 * Controleur de la partie ReusesController
 */
Ext.define("VivreANantes.controller.ReusesController", {
	extend : "VivreANantes.controller.AbstractStructuresController"

	,
	config : {
		refs : {
			structuresView : "reusesView_xtype",
			structuresDetail : "reusesDetails_xtype",
			reusesList : "reusesList_xtype",
			reusesFormSelectQuartier : "#reusesFormSelectQuartier",
			reusesFormSelectType : "#reusesFormSelectType",
			reusesButtons : "#reusesButtons"
		},
		control : {

			reusesList : {
				initialize : "onInitReusesController",
				itemtap : "showStructuresDetail",
				refresh : "onListRefresh"
			},

			
			structuresView : {
				show : 'onShowReuse'
			},

			reusesFormSelectQuartier : {
				change : "onReusesControllerStoreFilter",
				initialize : "setOptionsQuartiers"
			},

			reusesFormSelectType : {
				change : "onReusesControllerStoreFilter"
			},

			reusesButtons : {
				toggle : "onReusesControllerStoreFilter"
			}
			,
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'reusesDetails_xtype button' : {
				tap : 'onTapLinkButton'
			}
		}
	},
	
	/**
	 * A l"initialisation de la fenêtre
	 */
	onInitReusesController : function(list) {
		// 1
		// var homecollectmodStore = Ext.create(
		// 		"VivreANantes.store.Structure2Store", {
		// 			filters : [{
		// 				property : "modesCollecte",
		// 				// le type correspond aux modes de collectes
		// 				// possibles
		// 				// voir
		// 				// http://quentinc.net/javascript/testeur-expressions-regulieres/
		// 				value : /smco_reempdivers|smco_reempcartouchetoner|smco_reempelectromenag|smco_reempinfo|smco_reempjouet|smco_reemplivreCD|smco_reempmeuble|smco_reemplunettes|smco_reempvet|smco_conteneurlerelais/g
		// 			}]
		// 		});
		//  list.setStore(homecollectmodStore);
		this.getReusesFormSelectQuartier().setValue("all");
	},
	
	
	onShowReuse : function() {
		if (this.getReusesList().getStore()==null) {
			var structureStore = Ext.create("VivreANantes.store.Structure2Store", {
				filters : [{
					property : "modesCollecte",
					value : /smco_reempdivers|smco_reempcartouchetoner|smco_reempelectromenag|smco_reempinfo|smco_reempjouet|smco_reemplivreCD|smco_reempmeuble|smco_reemplunettes|smco_reempvet|smco_conteneurlerelais/g
				}]
			});
			this.getReusesList().setStore(structureStore);
			structureStore.load();
		}
	},
	
	
	onListRefresh : function(list, eOpts) {
		store = this.calculateDatas(list.getStore());
	}

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les évènements, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	,
	onReusesControllerStoreFilter : function() {
		this.filterElements();
	},

	filterElements : function() {

		var selectQuartier = this.getReusesFormSelectQuartier();
		var selectType = this.getReusesFormSelectType();

		var store = this.getReusesList().getStore();
		if (store!=null) {
			store.clearFilter();
			var filterElements = Ext.create("Ext.util.Filter", {
				filterFn : function(item) {
					var stModesDeCollecte = item.data["modesCollecte"];
					/*if (stModesDeCollecte !== 'modco_reemploi'
							&& stModesDeCollecte !== 'smco_conteneurlerelais') {
						return false;
					}*/
					var stTypeRegexp = new RegExp(selectType.getValue());
					var stQuartier = item.data["quartier"];
					// var stSousModesCollecte = item.data["type"];
					return (selectQuartier.getValue() === "all" || stQuartier === selectQuartier.getValue()) && (stTypeRegexp
									.test(stModesDeCollecte));
				}
			});
			store.filter(filterElements);
		}
	}

});