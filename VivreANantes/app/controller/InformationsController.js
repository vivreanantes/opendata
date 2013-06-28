Ext.define('VivreANantes.controller.InformationsController', {
			extend : 'VivreANantes.controller.AbstractController',

			config : {
				refs : {
					informations : 'informations',
					informationsList : 'informationsButtonsList_xtype'
				},
				control : {
					/*
					 * informationsList : { itemtap : 'showInformations' },
					 */
					informations : {
						activate : 'onActivate'
					},
					// fonctionne comme une CSS selecteur
					'informationsButtonsList_xtype button' : {
						tap : 'onShowDetails'
					}
				}
			},

			onShowDetails : function(button, e, eOpts) {
				this.showDetails(button.id);
			},

			showDetails : function(elementId) {
				// Récupère l'élément à partir du store
				var myElement = this.getElementFromStore(elementId);
				// Met l'élément dans le détail
				this.getInformations().push({
							xtype : 'panel',
							title : myElement["libelle"],
							html : myElement["description"],
							scrollable : true,
							styleHtmlContent : true
						});
			},

			/*
			 * Renvoie le mode de collecte
			 */
			getElementFromStore : function(idElement) {
				var description = "";
				var faq = "";
				var libelle = "";
				var image = "";
				var bouton = "";
				var dataInformations = this
						.getApplication()
						.getController("VivreANantes.controller.GarbagesController")
						.getInformationsList().getStore().getData();
				dataInformations.each(function(record) {
							if (record.data["code"] === idElement) {
								description = record.data["description_fr"];
								libelle = record.data["libelle"];
								image = record.data["image"];
								bouton = record.data["bouton"];
								faq = record.data["faq"];
							}
						});
				return {
					"code" : idElement,
					"faq" : faq,
					"description" : description,
					"libelle" : libelle,
					"image" : image,
					"bouton" : bouton
				}
			},

			onActivate : function(newActiveItem, container, oldActiveItem,
					eOpts) {
				var myController = this
						.getApplication()
						.getController("VivreANantes.controller.GarbagesController");
				var datas = myController.getInformationsList().getStore();

				var arrayItemsToShow = this.getDatasForButtons(datas, "fiche");
				var arrayItems = this.getContentButtonsPanel(arrayItemsToShow);
				this.removeAllAndSetItems(this.getInformationsList(), arrayItems);
			}
		});