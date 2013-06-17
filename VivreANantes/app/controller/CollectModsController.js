Ext.define('VivreANantes.controller.CollectModsController', {
			extend : 'VivreANantes.controller.AbstractController',
			id : 'collectModsController',
			config : {
				refs : {
					collectModsView : 'collectMods_xtype',
					collectModsList : 'collectModsButtonsList_xtype',
					collectModsDetails : 'collectModsDetails_xtype',
					buttonConteneurPapierCarton : '#modco_contpapiercarton'
				},
				control : {
					collectModsView : {},
					collectModsList : {
						initialize : "onInitCollectModsList"

					},
					collectModsDetails : {},
					// fonctionne comme une CSS selecteur
					'collectModsButtonsList_xtype button' : {
						// tap : 'onShowDetails'
						tap : 'onShowDetails'
					}

				}
			},

			onShowDetails : function(button, e, eOpts) {
				this.showDetails(button.id);
			},

			/**
			 * 
			 */
			showDetails : function(elementId) {

				// Crée la page si elle n'existe pas encode
				if (this.collectModsDetails == null) {
					this.collectModsDetails = Ext
							.create("VivreANantes.view.collectMod.CollectModsDetails");
				}

				// Récupère le store
				var collectModFromStore = this.getCollectMod(elementId);

				// Ajout de la description
				var descriptionTraduit = "";
				if (collectModFromStore["description"] != "") {
					descriptionTraduit = collectModFromStore["description"]
							+ "<br/><br/>";
				}
				this.setDataElement(this.collectModsDetails,
						"collectModsDetails_description", {
							'description' : descriptionTraduit
						})

				// Ajout des conseils
				var conseils = "";
				if (collectModFromStore["conseils"] !== "") {
					conseils = collectModFromStore["conseils"] + ",";
				}
				var arraysItemsAdvices = this.getItemsAdvices(conseils);
				this.setItemsElement(this.collectModsDetails,
						"collectModsDetails_advices", arraysItemsAdvices);

				// Ajout des commentaires
				var code = collectModFromStore["code"];
				this.setItemsElement(this.collectModsDetails,
						"collectModsDetails_comments", this
								.getItemsComments(code));

				// Affectation du titre
				var title = "<I>"
						+ this.translateWithUpperFirstLetter(
								"label_modeDeCollecte", "fr")
						+ "</I> "
						+ this
								.stringUpperFirstLetter(collectModFromStore["libelle"]);
				this.collectModsDetails.setTitle(title);

				// Bind the record onto the show contact view
				this.collectModsDetails.setData(collectModFromStore.data);

				this.getCollectModsView().push(this.collectModsDetails);

			},
			onInitCollectModsList : function(container) {

				var arrayItemsToShow = new Array();
				arrayItemsToShow.push({
							"libelle" : "Conteneur <br/>papier-carton",
							"image" : "conteneur_carton_petit.png",
							"id" : "modco_contpapiercarton"
						});
				arrayItemsToShow.push({
							"libelle" : "Conteneur plastique",
							"image" : "conteneur_plastique_petit.png",
							"id" : "modco_contmpb"
						});
				arrayItemsToShow.push({
							"libelle" : "Conteneur verre",
							"image" : "conteneur_verre_petit.png",
							"id" : "modco_contverre"
						});
				arrayItemsToShow.push({
							"libelle" : "Bacs bleus",
							"image" : "bac_bleu_petit.png",
							"id" : "modco_bacbleu"
						});
				arrayItemsToShow.push({
							"libelle" : "Bacs jaunes",
							"image" : "bac_jaune_en_cours_petit.png",
							"id" : "modco_bacjaune"
						});
				arrayItemsToShow.push({
							"libelle" : "Sacs bleus",
							"image" : "sac_bleu_petit.png",
							"id" : "modco_sacbleu"
						});
				arrayItemsToShow.push({
							"libelle" : "Sacs jaunes",
							"image" : "sac_jaune_petit.png",
							"id" : "modco_sacjaune"
						});
				arrayItemsToShow.push({
							"libelle" : "Ecopoints /<br/>déchetteries",
							"image" : "ecopoint_panneau_labeaujoire_petit.png",
							"id" : "modco_ecopoint_modco_decheterie"
						});
				arrayItemsToShow.push({
							"libelle" : "Réemploi",
							"image" : "structures_reemplois_petit.png",
							"id" : "modco_reemploi"
						});
				arrayItemsToShow.push({
							"libelle" : "Points de vente",
							"image" : "recyclage_point_de_vente_petit.png",
							"id" : "modco_pointsdevente"
						});
				arrayItemsToShow.push({
							"libelle" : "Conteneur <br/>Le Relay",
							"image" : "conteneur_lerelais_petit.png",
							"id" : "smco_conteneurlerelais"
						});
				arrayItemsToShow.push({
							"libelle" : "Camions Ecotoc",
							"image" : "ecotox_panneau_malakoff_petit.png",
							"id" : "modco_ecotox"
						});

				var arrayItems = this.getContentButtonsPanel(arrayItemsToShow);
				container.setItems(arrayItems);
			},

			/*
			 * Renvoie le mode de collecte
			 */
			getCollectMod : function(stCollectMod) {
				var description = "";
				var conseils = "";
				var faq = "";
				var image = "";
				var libelle = "";
				var dataCollectMods = this
						.getApplication()
						.getController("VivreANantes.controller.GarbagesController")
						.getCollectModList().getStore().getData();
				dataCollectMods.each(function(recordAdvice) {
							if (recordAdvice.raw["code"] === stCollectMod) {
								description = recordAdvice.raw["description"];
								conseils = recordAdvice.raw["conseils"];
								libelle = recordAdvice.raw["libelle"];
								image = recordAdvice.raw["image"];
							}
						});
				return {
					"code" : stCollectMod,
					"description" : description,
					"conseils" : conseils,
					"faq" : faq,
					"image" : image,
					"libelle" : libelle
				}
			}

		});
