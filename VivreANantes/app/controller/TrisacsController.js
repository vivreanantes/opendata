/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define("VivreANantes.controller.TrisacsController", {
	extend : "VivreANantes.controller.AbstractController",

	config : {
		refs : {
			trisacView : "TrisacView",
			trisacList : "TrisacList",
			trisacDetail : "TrisacDetails",
			trisacForm : "TrisacForm",
			trisacFormText : "#trisacFormText",
			trisacFormSelect : "#trisacFormSelect"
		},
		control : {

			trisacDetail : {
				updatedata : "onUpdateDataDetail"
			},

			trisacList : {
				itemtap : "showTrisacDetail"

			},

			trisacFormText : {
				keyup : "onTrisacStoreFilter",
				change : "onTrisacStoreFilter",
				clearicontap : "onTrisacStoreFilter"
			},

			trisacFormSelect : {
				change : "onTrisacStoreFilter"
			}

		}
	},

	showTrisacDetail : function(list, index, node, record) {
		console.log("showTrisacDetail");
		var stLocale = "fr";

		if (record) {
			if (!this.trisacDetail) {
				this.trisacDetail = Ext
						.create("VivreANantes.view.trisac.TrisacDetails");

				// calcule la chaîne correspondant aux commentaires
				var faqTraduit = this.getApplication()
						.getController("VivreANantes.controller.Garbages")
						.getFaqString(record.data["code"]);
				// calcule la chaîne correspondant aux conseils
				var conseils = "";
				if (record.data["conseils"] !== "") {
					conseils = record.data["conseils"] + ",";
				}
				conseilTraduit = this.getApplication()
						.getController("VivreANantes.controller.Garbages")
						.getAdviceString(conseils);
				// fabrique la chaîne affichée sur la page détail
				// this.trisacDetail.setTpl("
				this.trisacDetail.setHtml("<div>"
						+ translate("label_trisac_template_detail", stLocale)
						+ conseilTraduit + faqTraduit + "</div>");
			}

			// Bind the record onto the show contact view
			this.trisacDetail.setData(record.data);
			// Push this view into the navigation view
			this.getTrisacView().push(this.trisacDetail);
		}
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre en fonction de la chaine saisie et du quartier sélectionné
	 */
	onTrisacStoreFilter : function() {
		this.filterElements();
	},

	filterElements : function() {
		var text = this.getTrisacFormText();
		var select = this.getTrisacFormSelect();
		var store = this.getTrisacList().getStore();

		store.clearFilter();
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterHomeCollectMod = Ext.create("Ext.util.Filter", {
			filterFn : function(item) {
				var escaperegex = Ext.String.escapeRegex;
				var stTextRexexp = new RegExp(escaperegex(text.getValue()),
						"ig");
				var stQuartierRexexp = new RegExp(escaperegex(select.getValue()));

				return (stTextRexexp.test(item.data["nom"]) && (select
						.getValue() === "all" || stQuartierRexexp
						.test(item.data["quartier"])));
			}
		});
		store.filter(filterHomeCollectMod);
	}

});
