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
					collectModsView : {
						activate : 'onActivate',
						back : 'onPushBackButton1'
					},
					collectModsList : {
						initialize : "onInitCollectModsList",
						back : 'onPushBackButton2'
					},
					collectModsDetails : {
						back : 'onPushBackButton3'
					},
					// fonctionne comme une CSS selecteur
					'collectModsButtonsList_xtype button' : {
						tap : 'onShowDetails',
						back : 'onPushBackButton4'
					},
					// fonctionne comme une CSS selector
					// (http://www.w3.org/TR/CSS2/selector.html)
					'collectModsDetails_xtype button' : {
						tap : 'onTapLinkButton',
						back : 'onPushBackButton5'
					}
				}
			},

			onPushBackButton1 : function() {
				// this.onPushBackButton();
			},
			onPushBackButton2 : function() {
				// this.onPushBackButton();
			},
			onPushBackButton3 : function() {
				// this.onPushBackButton();
			},
			onPushBackButton4 : function() {
				// this.onPushBackButton();
			},
			onPushBackButton5 : function() {
				// this.onPushBackButton();
			},
			
			onActivate : function(newActiveItem, container, oldActiveItem,
					eOpts) {
				var dataCollectMods = this
						.getApplication()
						.getController("VivreANantes.controller.GarbagesController")
						.getCollectModList().getStore();
				var arrayItemsToShow = this.getDatasForButtons(dataCollectMods, "modco");
				var arrayItems = this.getContentButtonsPanel(arrayItemsToShow);
				this.removeAllAndSetItems(this.getCollectModsList(), arrayItems);
			},

			onTapLinkButton : function(button, e, eOpts) {
				// this.manageLinkButtons(button._data["code"]);
			},
			
			onShowDetails : function(button, e, eOpts) {
				this.showDetails(button.id);
			},

			showDetails : function(elementId) {

				// Crée la page si elle n'existe pas encode
				if (this.collectModsDetails == null) {
					this.collectModsDetails = Ext
							.create("VivreANantes.view.collectMod.CollectModsDetails");
				}

				// Récupère l'élément à partir du store
				var collectModFromStore = this.getElementFromStore(elementId);

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

				// Affectation du titre
				var title = "<I>"
						+ this
								.translateWithUpperFirstLetter("label_modeDeCollecte")
						+ "</I> "
						+ this
								.stringUpperFirstLetter(collectModFromStore["libelle"]);
				this.collectModsDetails.setTitle(title);
				
				// Ajout des commentaires
				var code = collectModFromStore["code"];
				this.setItemsElement(this.collectModsDetails,
						"collectModsDetails_comments", this
								.getItemsComments(code, title));


				// Bind the record onto the show contact view
				this.collectModsDetails.setData(collectModFromStore.data);

				this.getCollectModsView().push(this.collectModsDetails);

			},
			onInitCollectModsList : function(container) {
			},

			/*
			 * Renvoie le mode de collecte
			 */
			getElementFromStore : function(idElement) {
				var description = "";
				var conseils = "";
				var faq = "";
				var image = "";
				var libelle = "";
				var datas = this
						.getApplication()
						.getController("VivreANantes.controller.GarbagesController")
						.getCollectModList().getStore().getData();
				datas.each(function(record) {
							if (record.data["code"] === idElement) {
								description = record.data["description"];
								conseils = record.data["conseils"];
								faq = record.data["faq"];
								libelle = record.data["libelle"];
								image = record.data["image"];
							}
						});
				return {
					"code" : idElement,
					"description" : description,
					"conseils" : conseils,
					"faq" : faq,
					"image" : image,
					"libelle" : libelle
				}
			}

		});
