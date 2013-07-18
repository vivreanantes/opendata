/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define("VivreANantes.controller.TrisacsController", {
	extend : "VivreANantes.controller.AbstractStructuresController",

	config : {
		refs : {
			structuresView : "Trisac_xtype",
			trisacList : "TrisacList_xtype",
			trisacDetail : "TrisacDetails_xtype",
			trisacForm : "TrisacForm_xtype",
			trisacFormText : "#trisacFormText",
			trisacFormSelect : "#trisacFormSelect"
		},
		control : {

			trisacDetail : {
// updatedata : "onUpdateDataDetail"
			},

			trisacList : {
				initialize : "onInitTrisacsController",
				itemtap : "showStructuresDetail",
				refresh : "onListRefresh"
			},

			trisacFormText : {
				keyup : "onTrisacStoreFilter",
				change : "onTrisacStoreFilter",
				clearicontap : "onTrisacStoreFilter"
			},

			trisacFormSelect : {
				change : "onTrisacStoreFilter",
				initialize : "setOptionsQuartierTrisac"
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'TrisacDetails_xtype button' : {
				tap : 'onTapLinkButton'
			}
		}
	},
	/**
	 * A l"initialisation de la fenêtre
	 */
	onInitTrisacsController : function(list) {
		// 1
		var homecollectmodStore = Ext.create(
				"VivreANantes.store.Structure2Store", {
					filters : [{
								property : "modesCollecte",
								// le type correspond aux modes de collectes
								// possibles
								// voir
								// http://quentinc.net/javascript/testeur-expressions-regulieres/
								value : /modco_distrisac/g
							}]

				});

		list.setStore(homecollectmodStore);
		this.getTrisacFormSelect().setValue("all");
	},

	// Méthodes invoquées par le formulaire
	onListRefresh : function(list, eOpts) {
		store = this.calculateDatas(list.getStore());
	},

	/**
	 * Filtre en fonction de la chaine saisie et du quartier sélectionné
	 */
	onTrisacStoreFilter : function() {
		this.filterElements();
	},

	filterElements : function() {
		var text = this.getTrisacFormText();
		var selectQuartier = this.getTrisacFormSelect();
		var store = this.getTrisacList().getStore();

		// FIXME : Ceci est un traitement trop long

		store.clearFilter();
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterHomeCollectMod = Ext.create("Ext.util.Filter", {
			filterFn : function(item) {
				var escaperegex = Ext.String.escapeRegex;
				var stTextRexexp = new RegExp(escaperegex(text.getValue()),
						"ig");
				// var stQuartierRexexp = new RegExp(selectQuartier.getValue());
				var stType = item.data["modesCollecte"];
				var stQuartier = item.data["quartier"];
				return (stType == 'modco_distrisac'
						&& stTextRexexp.test(item.data["libelle"]) && (selectQuartier
						.getValue() === "all" || stQuartier === selectQuartier
						.getValue()));
			}
		});
		store.filter(filterHomeCollectMod);
	},

	/**
	 * Valorise les options des listes déroulantes "quartier"
	 */
	setOptionsQuartierTrisac : function(selectField) {

		selectField.setOptions([{
					text : 'Tous',
					value : 'all'
				}, {
					text : "Chantenay",
					value : "Chantenay"
				}, {
					text : "Breil Dervallières Bellevue",
					value : "Breil Dervallieres Bellevue"
				}, {
					text : "Hauts Pavé Saint Félix",
					value : "Hauts Pave Saint Felix"
				}, {
					text : "Ile De Nantes",
					value : "Ile De Nantes"
				}, {
					text : "Nantes Nord Barberie",
					value : "Nantes Nord Barberie"
				}, {
					text : "Erdre Ranzay Bottière Perray",
					value : "Erdre Ranzay Bottiere Perray"
				}, {
					text : "Saint Donatien",
					value : "Saint Donatien"
				}, {
					text : "Nantes",
					value : "Nantes"
				}]);
	}

});
