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
				initialize : "setOptionsQuartier"
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
					id : 'structure2_store_2',
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
	/*
	 * showTrisacDetail : function(list, index, node, record) {
	 * 
	 * var stLocale = "fr";
	 * 
	 * if (record) { if (!this.trisacDetail) { this.trisacDetail = Ext
	 * .create("VivreANantes.view.trisac.TrisacDetails"); // calcule la chaîne
	 * correspondant aux commentaires var faqTraduit = this.getApplication()
	 * .getController("VivreANantes.controller.CommentsController")
	 * .getCommenttring(record.data["code"]); // calcule la chaîne correspondant
	 * aux conseils var conseils = ""; if (record.data["conseils"] !== "") {
	 * conseils = record.data["conseils"] + ","; } conseilTraduit =
	 * this.getApplication()
	 * .getController("VivreANantes.controller.GarbagesController")
	 * .getAdviceString_old(conseils); // fabrique la chaîne affichée sur la page
	 * détail // this.trisacDetail.setTpl(" this.trisacDetail.setTpl("<div>" +
	 * this.translate("label_trisac_template_detail", stLocale) + conseilTraduit +
	 * faqTraduit + "</div>"); } // Bind the record onto the show contact view
	 * this.trisacDetail.setData(record.data); // Push this view into the
	 * navigation view this.getTrisac().push(this.trisacDetail); } },
	 */

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
	}

});
