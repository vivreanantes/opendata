/**
 * Controleur de la partie ReusesController
 */
Ext.define("VivreANantes.controller.ReusesController", {
	extend : "VivreANantes.controller.AbstractStructuresController"

	,
	config : {
		refs : {
			structuresView : "reusesView_xtype",
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

			reusesFormSelectQuartier : {
				change : "onReusesControllerStoreFilter",
				initialize : "setOptionsQuartier"
			}

			,
			reusesFormSelectType : {
				change : "onReusesControllerStoreFilter"
			}

			,
			reusesButtons : {
				toggle : "onReusesControllerStoreFilter"
			}
		}
	},

	/**
	 * A l"initialisation de la fenêtre
	 */
	onInitReusesController : function(list) {
		// 1
		var homecollectmodStore = Ext.create(
				"VivreANantes.store.Structure2Store", {
					id : 'structure2_store_2',
					filters : [{
								property : "modesCollecte",
								// le type correspond aux modes de collectes
								// possibles
								// voir
								// http://quentinc.net/javascript/testeur-expressions-regulieres/
								value : /modco_reemploi/g
							}]

				});

		list.setStore(homecollectmodStore);
		console.log(homecollectmodStore);
	}

	,
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
		// var delay = this.getReusesButtons().getPressedButtons()[0].getText();

		var store = this.getReusesList().getStore();
		store.clearFilter();

		var filterElements = Ext.create("Ext.util.Filter", {
					filterFn : function(item) {
						var stModesDeCollecte = item.data["modesCollecte"];
						if (stModesDeCollecte !== 'modco_reemploi') {
							return false;
						}
						var escaperegex = Ext.String.escapeRegex;
						var stQuartierRegexp = new RegExp(selectQuartier
								.getValue());
						var stTypeRegexp = new RegExp(selectType.getValue());

						/*
						 * 
						 * 
						 * var stTypeRegexp = new
						 * RegExp(escaperegex(selectType.getValue())); if
						 * (selectType.getValue().indexOf(",") !== -1) { var
						 * array = selectType.getValue().split(','); var
						 * expression = ''; var i = 0; for (a in array) { if (i ==
						 * 0) { expression = '(' + array[a]; } else { expression =
						 * expression + '|' + array[a]; } i++; } expression =
						 * expression + ')'; stTypeRegexp = new
						 * RegExp(expression); }
						 */

						var stQuartier = item.data["quartier"];
						var stSousModesCollecte = item.data["sousModesCollecte"];
						return ( selectQuartier.getValue() === "all" || stQuartierRegexp
								.test(stQuartier))
								&& //
								(selectType.getValue() === "all" || stTypeRegexp
										.test(stSousModesCollecte));
					}
				});
		store.filter(filterElements);
	}

});