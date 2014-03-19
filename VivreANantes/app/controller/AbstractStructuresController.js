/**
 * Controleur de la partie Structures
 */
Ext.define("VivreANantes.controller.AbstractStructuresController", {
	extend : "VivreANantes.controller.AbstractController",

	onTapLinkButton : function(button, e, eOpts) {
		this.manageLinkButtons(button._data["code"]);
	},
	
	/**
	 * Affiche le détail pour une page de type structure.
	 */
	showStructuresDetail : function(list, index, node, record) {
		if (record) {
			if (!this.structuresDetail) {
				this.structuresDetail = Ext
						.create("VivreANantes.view.structures.StructuresDetails");
			}
			// Ajout du type
			var descriptionTraduit = "";
			if (record.data["modesCollecte"] != null && record.data["modesCollecte"] !== "") {
				// var label = this.stringUpperFirstLetter(this.translate("label_type"));
				var modeCollecteTraduit = "";
				var typeTraduit = "";
				if (record.data["modesCollecte"] != null
						&& record.data["modesCollecte"] !== "") {
					// On découpe modesCollecte, puis on traduit
					var arModesCollecte = record.data["modesCollecte"].split(",");
					for (var i = 0; i < arModesCollecte.length; i++) {
						var unModeCollecte = arModesCollecte[i];
						if (i>0) {
							modeCollecteTraduit = modeCollecteTraduit + ", ";
						}
						modeCollecteTraduit = modeCollecteTraduit + this.translate("label_"	+ unModeCollecte);
					}
					// Dans le cas de distribution Trisac on ajoute le type
					if (record.data["modesCollecte"]==="modco_distrisac") {
						typeTraduit = this.translate("label_" + record.data["modesCollecte"]) + " - " + record.data["type"] + "<br/><br/>";
					}
				}
				
				descriptionTraduit += /*label + " : " +*/ /*modeCollecteTraduit + " "*/
						typeTraduit;
			}
			// Ajout de la description
			if (record.data["description_fr"] != null
					&& record.data["description_fr"] !== "") {
				descriptionTraduit += record.data["description_fr"]
						+ "<br/><br/>";
			}
			if (record.data["adresseTemp"] != null
					&& record.data["adresseTemp"] !== "") {
				var label = this.stringUpperFirstLetter(this
						.translate("label_adresse"));
				descriptionTraduit += "<b>"+label + "</b>: "
						+ record.data["adresseTemp"] + "<br/><br/>";
			}
			if (record.data["numeroTemp"] != null
					&& record.data["numeroTemp"] !== "") {
				var label = this.stringUpperFirstLetter(this
						.translate("label_telephone"));
				descriptionTraduit += "<b>" + label + " </b>: " + record.data["numeroTemp"]
						+ "<br/><br/>";
			}
			if (record.data["plagesHoraires_lisible"] != null
					&& record.data["plagesHoraires_lisible"] !== "") {
				var label = this.stringUpperFirstLetter(this
						.translate("label_horaires"));
				descriptionTraduit += "<b>" + label + "</b>: "
						+ record.data["plagesHoraires_prochainsJours"]
						+ "<br/>" + record.data["plagesHoraires_lisible"]
						+ "<br/><br/>";
			}
			if (record.data["src"] != null && record.data["src"] !== "") {
				var label = this.stringUpperFirstLetter(this
					.translate("label_source"));
				descriptionTraduit += "<b>" + label + "</b> : " + record.data["src"] + "<br/><br/>";
			}
			this.setDataElement(this.structuresDetail,
					"structuresDetails_description", {
						'description' : descriptionTraduit
					})

			// Ajout des conseils
			var conseils = "";
			if (record.data["conseils"] !== "") {
				conseils = record.data["conseils"] + ",";
			}
			var arraysItemsAdvices = this.getItemsAdvices(conseils);
			this.setItemsElement(this.structuresDetail,
					"structuresDetails_advices", arraysItemsAdvices);

			// Affectation du titre
			var stType = record.data["type"];
			var title = "<I>" + stType + "</I>" + " "
					+ this.stringUpperFirstLetter(record.data["libelle"]);
			this.structuresDetail.setTitle(title);
			
			// Ajout des commentaires
			var code = record.data["code"];
			this.setItemsElement(this.structuresDetail,
					"structuresDetails_comments", this.getItemsComments(code, title));

			// Bind the record onto the show contact view
			this.structuresDetail.setData(record.data);
			// Push this view into the navigation view
			this.getStructuresView().push(this.structuresDetail);
		}
	},

	/**
	 * Pour des données 'structure' (stockées dans 'structures.json' et stockés dans un 'StructureStore.js') calcule les data à partir du store.
	 * Invoque getAttributsPlagesHoraires sur toutes les plages horaires
	 */
	calculateDatas : function(store) {
		var datas = store.getData();
		var dataLength = datas.length;
		if (dataLength > 0 && datas.items[0].data["type"] != null) {
			// On parcours tous les éléments pour valoriser "plagesHoraires_prochainsJours", "plagesHoraires_lisible" et "plagesHoraires_periodes"
			for (var i = 0; i < dataLength; i++) {
				// this.old_fillAttributs_PlagesHoraires(datas.items[i]);
				this.getAttributsPlagesHoraires(datas.items[i]);
			}
		}
		return store;
	},

	/**
	 * Pour une plage horaire, valorise data["plagesHoraires_lisible"] et data["plagesHoraires_prochainsJours"].
	 */
	getAttributsPlagesHoraires : function(objStructures, stLocale) {
		var stPlagesHoraire = objStructures.get("plagesHoraires");
		var bOuvertAujourdhui = false;
		var bOuvertDemain = false;

		// verifie si on est ouvert aujourd'hui et demain

		var obAujoudhuiDemain = _verifieOuvertAujourdhuiDemain(stPlagesHoraire);
		if (obAujoudhuiDemain["bOuvertAujourdhui"] == true) {
			bOuvertAujourdhui = true;
		}
		if (obAujoudhuiDemain["bOuvertDemain"] == true) {
			bOuvertDemain = true;
		}
		var stOuvertAujourdhuiEtDemain = "";
		if (bOuvertAujourdhui == true && bOuvertDemain == true) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>"
					+ this.translate("label_ouvert_aujourdhui_et_demain")
					+ "</FONT>"
		} else if (bOuvertAujourdhui == true && bOuvertDemain == false) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>"
					+ this.translate("label_ouvert_aujourdhui") + "</FONT>"
		} else if (bOuvertAujourdhui == false && bOuvertDemain == true) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>"
					+ this.translate("label_ouvert_demain") + "</FONT>"
		} else {
			var stOuvertAujourdhuiEtDemain = " ";
		}
		
		var stplagesHoraires = _traduitEnsemblePlageHoraire(stPlagesHoraire, stLocale);
		
		objStructures.data["plagesHoraires_lisible"] = stplagesHoraires;
		objStructures.data["plagesHoraires_prochainsJours"] = stOuvertAujourdhuiEtDemain;
		// objStructures.data["plagesHoraires_periodes"] = arNewAttributes;
	},

	/**
	 * Valorise les options des listes déroulantes "quartier" (ce sont les quartiers administratifs)
	 */
	setOptionsQuartiersAdmin : function(selectField) {

		selectField.setOptions([{
					text : 'Tous',
					value : 'all'
				}, {
					text : "Bellevue Chantenay Sainte-Anne",
					value : "Bellevue Chantenay Sainte-Anne"
				}, {
					text : "Breil Barberie",
					value : "Breil Barberie"
				}, {
					text : "Centre Ville",
					value : "Centre Ville"
				}, {
					text : "Dervallières Zola",
					value : "Dervallieres Zola"
				}, {
					text : "Doulon Bottière",
					value : "Doulon Bottiere"
				}, {
					text : "Hauts Pavés - Saint Félix",
					value : "Hauts-Paves Saint-Felix"
				}, {
					text : "Ile De Nantes",
					value : "Ile de Nantes"
				}, {
					text : "Malakoff - Saint-Donatien",
					value : "Malakoff Saint-Donatien"
				}, {
					text : "Nantes Erdre",
					value : "Nantes Erdre"
				}, {
					text : "Nantes Nord",
					value : "Nantes Nord"
				}, {
					text : "Nantes Sud",
					value : "Nantes Sud"
				}]);
	},
	
	/**
	 * Valorise les options des listes déroulantes "ville"
	 */
	setOptionsVilles : function(selectField) {

		selectField.setOptions([{
					text : 'Toutes',
					value : 'all'
				}, {
					text : "Nantes",
					value : "Nantes"
				}, {
					text : "Hors Nantes : Sud Loire",
					value : "Hors Nantes sud Loire"
				}, {
					text : "Hors Nantes : Nord Loire",
					value : "Hors Nantes nord Loire"
				}]);

	}
});