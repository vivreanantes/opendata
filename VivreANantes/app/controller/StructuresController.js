/**
 * Controleur de la partie Structures
 */
Ext.define("VivreANantes.controller.StructuresController", {
	extend : "VivreANantes.controller.AbstractStructuresController"

	,
	config : {
		refs : {
			structuresView : "structuresView_xtype",
			structuresList : "structuresList_xtype",
			structuresDetail : "structuresDetails_xtype",
			structuresForm : "structuresForm_xtype",
			structuresFormSelectQuartier : "#structuresFormSelectQuartier",
			structuresFormSelectType : "#structuresFormSelectType",
			structuresButtons : "#structuresButtons"

		},
		control : {

			structuresDetail : {
				updatedata : "onUpdateDataDetail"
			},

			structuresList : {
				initialize : "onInitStructures",
				itemtap : "showStructuresDetail",
				refresh : "onListRefresh"
			},

			structuresView : {}

			,
			structuresFormSelectQuartier : {
				change : "onStructuresStoreFilter",
				initialize : "setOptionsQuartier",
				show : "selectFirstOptionsQuartier"
			}

			,
			structuresFormSelectType : {
				change : "onStructuresStoreFilter"
			}

			,
			structuresButtons : {
				toggle : "onStructuresStoreFilter"
			}
		}
	}

	,
	onUpdateDataDetail : function(comp, newData, opts) {
		// if (newData) {
		// console.log("onUpdateDataDetail" + this);
		// console.log("onUpdateDataDetail" + this.id);
		// }
	}

	/**
	 * A l"initialisation de la fenêtre d"accueil
	 */
	,
	onInitStructures : function(list) {
		// 1
		var homecollectmodStore = Ext.create(
				"VivreANantes.store.Structure2Store", {
					id : 'structure2_store_1',
					filters : [{
						// property: "type",
						property : "modesCollecte",
						// le type correspond aux modes de collectes possibles
						// voir
						// http://quentinc.net/javascript/testeur-expressions-regulieres/
						value : /modco_ecopoint|modco_ecotox|modco_decheterie|modco_encombrants/g
							// value: /modco_reemploi/g
					}]
					// autoLoad : true,
					// listeners : {
					// "load" : function(store, results, successful) {
					// }
					// }
				});
		// 2
		// homecollectmodStore.each(function(record) {
		// console.log("homecollectmodStore.each" + record.libelle);
		// });

		// 3
		list.setStore(homecollectmodStore);
		this.getStructuresFormSelectQuartier().setValue("all");
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
	onStructuresStoreFilter : function() {
		this.filterElements();
	},

	filterElements : function() {

		var selectQuartier = this.getStructuresFormSelectQuartier();
		var selectType = this.getStructuresFormSelectType();
		var store = this.getStructuresList().getStore();
		// FIXME : ceci prend trop de temps
		store.clearFilter();

		var filterElements = Ext.create("Ext.util.Filter", {
			filterFn : function(item) {
				var escaperegex = Ext.String.escapeRegex;
				// var stQuartierRegexp = new RegExp(selectQuartier.getValue());
				var stTypeRegexp = new RegExp(selectType.getValue());
				/*
				 * var stTypeRegexp = new
				 * RegExp(escaperegex(selectType.getValue())); if
				 * (selectType.getValue().indexOf(",") !== -1) { var array =
				 * selectType.getValue().split(','); var expression = ''; var i =
				 * 0; for (a in array) { if (i == 0) { expression = '(' +
				 * array[a]; } else { expression = expression + '|' + array[a]; }
				 * i++; } expression = expression + ')'; stTypeRegexp = new
				 * RegExp(expression); }
				 */

				var stQuartier = item.data["quartier"];
				var stType = item.data["modesCollecte"];
				return ((selectQuartier.getValue() === "all" || stQuartier === selectQuartier
						.getValue()) && (/*selectType.getValue() === "all"  ||*/ stTypeRegexp
						.test(stType)));
			}
		});
		store.filter(filterElements);
	}

});