Ext.define('VivreANantes.controller.CollectModsController', {
			extend : 'VivreANantes.controller.AbstractController',

			config : {
				refs : {
					collectModsView : 'collectMods_xtype',
					collectModsList : 'collectModsButtonsList_xtype',
					buttonConteneurPapierCarton : '#modco_contpapiercarton',
					buttonConteneurMetalPlastiqueBrique : '#modco_contmpb',
					buttonConteneurVerre : '#modco_contverre',
					buttonBacBleu : '#modco_bacbleu',
					buttonBacJaune : '#modco_bacjaune',
					buttonSacBleu : '#modco_sacbleu',
					buttonSacJaune : '#modco_sacjaune',
					buttonEcopointsDechetteries : '#modco_ecopoint_modco_decheterie',
					buttonReemploi : '#modco_reemploi',
					buttonPointsDeVente : '#modco_pointsdevente',
					buttonConteneurLeRelay : '#modco_conteneur_le_relais',
					buttonEcotox : '#modco_ecotox'

				},
				control : {
					collectModsView : {},
					collectModsList : {
						initialize : "onInitCollectModsList"

					},
					// fonctionne comme une CSS selecteur
					'collectModsView button' : {
						tap : 'showCollectMods'
					},
					buttonConteneurPapierCarton : {
						tap : 'showDetails'
					},
					buttonConteneurMetalPlastiqueBrique : {
						tap : 'showDetails'
					},
					buttonConteneurVerre : {
						tap : 'showDetails'
					},
					buttonBacBleu : {
						tap : 'showDetails'
					},
					buttonBacJaune : {
						tap : 'showDetails'
					},
					buttonSacBleu : {
						tap : 'showDetails'
					},
					buttonSacJaune : {
						tap : 'showDetails'
					},
					buttonEcopointsDechetteries : {
						tap : 'showButtonEcopointsDechetteries'
					},
					buttonReemploi : {
						tap : 'showDetails'
					},
					buttonPointsDeVente : {
						tap : 'showDetails'
					},
					buttonConteneurLeRelay : {
						tap : 'showDetails'
					},
					buttonEcotox : {
						tap : 'showDetails'
					}
				}
			},

			showDetails : function(button, e, eOpts) {
				var collectModFromStore = this.getCollectMod(button.id);
				var description = this
						.makeDescriptionString(collectModFromStore);
				this
						.showCollectMod(collectModFromStore["libelle"],
								description);
			},
			showButtonEcopointsDechetteries : function(button, e, eOpts) {
				var collectModFromStore = this.getCollectMod("modco_ecopoint");
				var description = this
						.makeDescriptionString(collectModFromStore);
				var collectModFromStore2 = this
						.getCollectMod("modco_decheterie");
				this.showCollectMod("Ecopoints / déchetteries", description);
			},
			/*
			 * showButtonConteneurMetalPlastiqueBrique : function(button, e,
			 * eOpts) { this .showCollectMod( description["libelle"], "Conteneur
			 * métal / plastique / briques alimentaires", "Conteneur métal /
			 * plastique / briques alimentaires<br/><img src=" +
			 * this.IMAGE_DIR + " width='400px' />"); },
			 * showButtonConteneurVerre : function(button, e, eOpts) {
			 * this.showCollectMod("Conteneur verre", "Conteneur verre<br/><img
			 * src=" + this.IMAGE_DIR + " width='400px' />"); },
			 * showButtonBacBleu : function(button, e, eOpts) {
			 * this.showCollectMod("Bac bleu", "Bacs bleus"); },
			 * showButtonBacJaune : function(button, e, eOpts) {
			 * this.showCollectMod("Bac jaune", "Bacs jaunes"); },
			 * showButtonSacBleu : function(button, e, eOpts) {
			 * this.showCollectMod("Sacs bleu", "Sacs bleus"); },
			 * showButtonSacJaune : function(button, e, eOpts) {
			 * this.showCollectMod("Sacs jaunes", "Sacs jaunes"); },
			 * showButtonEcopointsDechetteries : function(button, e, eOpts) {
			 * this.showCollectMod("Ecopoints / déchetteries", "Ecopoints et
			 * dechetteries"); }, showButtonReemploi : function(button, e,
			 * eOpts) { this.showCollectMod("Réemploi", "Réemploi <br/><img
			 * src=" + this.IMAGE_DIR + " width='400px' />"); },
			 * showButtonPointsDeVente : function(button, e, eOpts) {
			 * this.showCollectMod("Points de vente", "Points de vente"); },
			 * showButtonConteneurLeRelay : function(button, e, eOpts) {
			 * this.showCollectMod("Conteneur Le Relay", "Conteneur Le Relay"); },
			 */

			/*
			 * Crée la description
			 */
			makeDescriptionString : function(collectModFromStore) {
				var result = "";
				collectModFromStore["id"];
				var description = collectModFromStore["description"];
				result += description;
				var image = collectModFromStore["image"];
				if (image != undefined && image != "") {
					result += "<br/><img src=" + this.IMAGE_DIR + image
							+ " width='400px' />";
				}
				var conseils = collectModFromStore["conseils"];
				if (conseils != "") {
					result += this.getApplication()
							.getController("VivreANantes.controller.Garbages")
							.getAdviceString(conseils);
				}
				return result;

			},
			showButtonEcotox : function(button, e, eOpts) {
				this
						.showCollectMod(
								"Camion Ecotox",
								"Camion Ecotox<br/><img src="
										+ this.IMAGE_DIR
										+ "ecotox_camion.png width='400px' /><br/><img src="
										+ this.IMAGE_DIR
										+ "ecotox_panneau_malakoff.png width='400px' />");
			},
			showCollectMod : function(title, html) {
				if (this.structuresDetail == null) {
					this.structuresDetail = Ext
							.create("VivreANantes.view.collectMod.CollectModsDetails");
				}
				this.getCollectModsView().push({
							xtype : 'panel',
							title : title,
							html : html,
							scrollable : true,
							styleHtmlContent : true
						});
			},

			onInitCollectModsList : function(container) {
				// var store = Ext.create('VivreANantes.store.CollectModStore');
				// var storeLoaded = store.load();

				var arrayItemsToShow = new Array();
				arrayItemsToShow.push({
							"libelle" : "Conteneur <br/>papier-carton",
							"image" : "conteneur_carton_petit.png",
							"id" : "modco_contpapiercarton"
						});
				arrayItemsToShow.push({
							"libelle" : "Conteneur métal /<br/>plastique / brique",
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
							"image" : "image_defaut_petit.png",
							"id" : "modco_reemploi"
						});
				arrayItemsToShow.push({
							"libelle" : "Points de vente",
							"image" : "image_defaut_petit.png",
							"id" : "modco_pointsdevente"
						});
				arrayItemsToShow.push({
							"libelle" : "Conteneur <br/>Le Relay",
							"image" : "conteneur_lerelais_petit.png",
							"id" : "modco_conteneur_le_relais"
						});
				arrayItemsToShow.push({
							"libelle" : "Camions Ecotoc",
							"image" : "ecotox_panneau_malakoff_petit.png",
							"id" : "modco_ecotox"
						});

				var arrayItems = this.fillButtons(arrayItemsToShow);
				container.setItems(arrayItems);
			}

			,
			fillButtons : function(arrayItemsToShow) {
				var arrayItems = new Array();
				var nbElementsParLines = 3;
				/*
				 * var nbLines = Math.abs(arrayItems.length / 3); // Si 1 > 1,
				 * si 1,33 > 2 if (arrayItems.length / 3 != nbLines) { nbLines +=
				 * 1; }
				 */

				for (var i = 0; i < arrayItemsToShow.length; i++) {
					// Si je suis sur un multiple de 3 je
					if (i / nbElementsParLines == Math.round(i
							/ nbElementsParLines)) {
						if (arrayitemsLine != null) {
							var objectItem1 = {
								'layout' : {
									type : 'hbox',
									align : 'stretch'
								},
								'items' : arrayitemsLine
							};
							arrayItems.push(objectItem1);
						}

						var arrayitemsLine = new Array();
					}
					arrayitemsLine.push({
								xtype : 'button',
								id : arrayItemsToShow[i]["id"],
								html : arrayItemsToShow[i]["libelle"] + " "
										+ "<br/><img src='resources/images/"
										+ arrayItemsToShow[i]["image"]
										+ "' width='60px' />"
							});
				}
				if (arrayitemsLine.length != 0) {
					var objectItem1 = {
						'layout' : {
							type : 'hbox',
							align : 'stretch'
						},
						'items' : arrayitemsLine
					};
					arrayItems.push(objectItem1);
				}

				return arrayItems;
			},

			/*
			 * Renvoie le mode de collecte
			 */
			getCollectMod : function(stCollectMod) {
				var description = "";
				var conseils = "";
				var faq = "";
				var image = "";
				var dataCollectMods = this.getApplication()
						.getController("VivreANantes.controller.Garbages")
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
					"description" : description,
					"conseils" : conseils,
					"faq" : faq,
					"image" : image
				}
			}

		});