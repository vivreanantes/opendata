/**
 * Controleur de la partie Structures
 */
Ext.define("VivreANantes.controller.StructuresController", {
	extend : "VivreANantes.controller.AbstractStructuresController",

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

			structuresList : {
				initialize : "onInitStructures",
				itemtap : "showStructuresDetail",
				refresh : "onListRefresh"
			},
			
			structuresView : {
				show : 'onShowStructures'
			},
			
			structuresFormSelectQuartier : {
				change : "onStructuresStoreFilter",
				initialize : "setOptionsVilles",
				show : "selectFirstOptionsQuartier"
			}

			,
			structuresFormSelectType : {
				change : "onStructuresStoreFilter"
			}

			,
			structuresButtons : {
				toggle : "onStructuresStoreFilter"
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'structuresDetails_xtype button' : {
				tap : 'onTapLinkButton',
				back : 'onPushBackButton11'
			}
		}
	},

	onPushBackButton11 : function() {
		// console.log("onPushBackButton11");
		// this.onPushBackButton();
	},
	
	/**
	 * A l"initialisation de la fenêtre d"accueil
	 */
	onInitStructures : function(list) {
		// 1
		// var homecollectmodStore = Ext.create(
		// 		"VivreANantes.store.Structure2Store", {
		// 			filters : [{
		// 				property : "modesCollecte",
		// 				// le type correspond aux modes de collectes possibles
		// 				// voir
		// 				// http://quentinc.net/javascript/testeur-expressions-regulieres/
		// 				value : /modco_ecopoint|modco_ecotox|modco_decheterie|modco_encombrants/g					}]
		// 		});
		// list.setStore(homecollectmodStore);
		// 2
		this.getStructuresFormSelectQuartier().setValue("all");
	},

	
	onShowStructures : function() {
		if (this.getStructuresList().getStore()==null) {
			var structureStore = Ext.create("VivreANantes.store.StructureStore", {
				filters : [{
					property : "modesCollecte",
					value : /modco_ecopoint|modco_ecotox|modco_decheterie|modco_encombrants/g
				}]
			});
			this.getStructuresList().setStore(structureStore);
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
	onStructuresStoreFilter : function() {
		this.filterElements();
	},

	filterElements : function() {

		var selectQuartier = this.getStructuresFormSelectQuartier();
		var selectType = this.getStructuresFormSelectType();

		var store = this.getStructuresList().getStore();
		if (store!=null) {
			store.clearFilter();
			var filterElements = Ext.create("Ext.util.Filter", {
				filterFn : function(item) {
					var stTypeRegexp = new RegExp(selectType.getValue());
					var stQuartier = item.data["quartier"];
					var stType = item.data["modesCollecte"];
					return ((selectQuartier.getValue() === "all" || stQuartier === selectQuartier
							.getValue()) && (stTypeRegexp.test(stType)));
				}
			});
			store.filter(filterElements);
		}
	}

});