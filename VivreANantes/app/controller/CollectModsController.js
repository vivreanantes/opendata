Ext.define('VivreANantes.controller.CollectModsController', {
			extend : 'VivreANantes.controller.AbstractController',
			id : 'collectModsController',
			config : {
				refs : {
					mainView : 'main',
					collectModsView : 'collectMods_xtype',
					collectModsList : 'collectModsButtonsList_xtype',
					collectModsDetails : 'collectModsDetails_xtype',
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
					collectModsDetails : {
						show : 'onPanelShow'
					},
					// fonctionne comme une CSS selecteur
					'collectModsView button' : {
						tap : 'showCollectMods'
					},
					buttonConteneurPapierCarton : {
						tap : 'onShowDetails'
					},
					buttonConteneurMetalPlastiqueBrique : {
						tap : 'onShowDetails'
					},
					buttonConteneurVerre : {
						tap : 'onShowDetails'
					},
					buttonBacBleu : {
						tap : 'onShowDetails'
					},
					buttonBacJaune : {
						tap : 'onShowDetails'
					},
					buttonSacBleu : {
						tap : 'onShowDetails'
					},
					buttonSacJaune : {
						tap : 'onShowDetails'
					},
					buttonEcopointsDechetteries : {
						tap : 'showButtonEcopointsDechetteries'
					},
					buttonReemploi : {
						tap : 'onShowDetails'
					},
					buttonPointsDeVente : {
						tap : 'onShowDetails'
					},
					buttonConteneurLeRelay : {
						tap : 'onShowDetails'
					},
					buttonEcotox : {
						tap : 'onShowDetails'
					}
				}
			},

			onShowDetails : function(button, e, eOpts) {
				this.showDetails(button.id);
			},
			
			showDetails : function(collectModId) {
				var collectModFromStore = this.getCollectMod(collectModId);
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
				var res = "";
				var description = collectModFromStore["description"];
				res += description;
				var image = collectModFromStore["image"];
				if (image != undefined && image != "") {
					res += "<br/><img src=" + this.IMAGE_DIR + image
							+ " width='400px' />";
				}
				var conseils = collectModFromStore["conseils"];
				if (conseils != "") {
					res += this.getApplication()
							.getController("VivreANantes.controller.GarbagesController")
							.getAdviceString(conseils);
				}
				var comments = this
						.getApplication()
						.getController("VivreANantes.controller.CommentsController")
						.getCommentString(collectModFromStore["id"]);
				if (comments != "") {
					res += comments;
				}
				var links = this.makeLinkString(collectModFromStore["id"]);
				if (links != "") {
					res += links;
				}
				var mailLink = this.makeSendLink(collectModFromStore["id"]);
				if (mailLink != "") {
					res += mailLink;
				}
				return res;
			},

			makeLinkString : function(id) {
				var res = "";

				if (id == "modco_ecopoint" || id == "modco_ecotox") {
					res += this.makeTextLink("structuresPanel");
					res += this.makeTextLink("mapPanel");
				} else if (id == "modco_contpapiercarton"
						|| id == "modco_contmpb" || id == "modco_contverre") {
					res += this.makeTextLink("mapPanel");
				} else if (id == "modco_bacbleu" || id == "modco_bacjaune") {
					res += this.makeTextLink("homeCollectsModsPanel");
				}
				 else if (id == "modco_sacbleu" || id == "modco_sacjaune") {
					res += this.makeTextLink("homeCollectsModsPanel");
					res += this.makeTextLink("trisacsPanel");
				} else if (id == "modco_reemploi") {
					res += this.makeTextLink("reusesPanel");
					res += this.makeTextLink("mapPanel");
				}
				if (res != "") {
					res += "<br/>";
				}
				return res;
			},

			/**
			 * 
			 */

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
				var dataCollectMods = this.getApplication()
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
					"id" : stCollectMod,
					"description" : description,
					"conseils" : conseils,
					"faq" : faq,
					"image" : image
				}
			},

			onPanelShow : function(component, options) {
				component.getEl().on({
					tap : function(event) {
						var location = event.getTarget()
								.getAttribute('data-link');
						// window.location = location;
						// Push this view into the navigation view
						this.getStructuresView().push(this.structuresDetail);
						var intance = Ext.getCmp("structuresView");
						var activeIndex = intance.indexOf(intance
								.getActiveItem());
						this.getMainView().setActiveItem(activeIndex);
					},
					delegate : '.link'
				});
			}

		});
