Ext.define('VivreANantes.controller.InformationsController', {
			extend : 'VivreANantes.controller.AbstractController',

			config : {
				refs : {
					informations : 'informations',
					informationsList : 'informationsbuttonslist_xtype'
				},
				control : {
					/*
					 * informationsList : { itemtap : 'showInformations' },
					 */
					informations : {
						activate : 'onActivate'
					},
					// fonctionne comme une CSS selecteur
					'informationsbuttonslist_xtype button' : {
						tap : 'onShowDetails',
						back : 'onPushBackButton10'
					}
				}
			},
			onShowDetails : function(button, e, eOpts) {
				if (button.id === 'envoyez') {
					Ext.Viewport.add({
								xtype : 'commentmodal'
							});
				} else {
					this.showDetails(button._data.code);
				}
			},
			onPushBackButton10 : function() {
				// console.log("onPushBackButton10");
				// this.onPushBackButton();
			},

			showDetails : function(elementId) {
				// Récupère l'élément
				var myElement = _getInfo(elementId);

				var description = myElement["description"]
						+ _getCommentsBloc(myElement["code"]);
				/*
				 * var description = description + this .getApplication()
				 * .getController("VivreANantes.controller.CommentsController")
				 * .getCommentString(myElement["code"]);
				 */
				/*var title = "<I>"
						+ _translateWithUpperFirstLetter("label_fiche")
						+ "</I> " + myElement["libelle"];*/
				var title = myElement["libelle"];
				// Met l'élément dans le détail
				this.getInformations().push({
							xtype : 'panel',
							title : title,
							html : description,
							scrollable : true,
							styleHtmlContent : true
						}, {
							xtype : 'button',
							width : '200px',
							id : "commentez",
							text : "Commentez"
						});
				/*
				 * this.getInformations().push({ layout : 'vbox', items : [{
				 * xtype : 'panel', title : title, html : description,
				 * scrollable : true, styleHtmlContent : true }, { id :
				 * "collectModsDetails_comments" }] });
				 */
				// this.setItemsElement(this.structuresDetail,"informations",
				// this.getItemsComments(myElement["code"], title));
			},

			/*
			 * Renvoie le mode de collecte
			 */
			/*getElementFromStore : function(idElement) {
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
			},*/

			onActivate : function(newActiveItem, container, oldActiveItem,
					eOpts) {
				var arItemsToShow = this.getArrayItemsToShowForButtons(
						_infosDatas, "fiche");

				var result = new Array();
				if (arItemsToShow.length > 0) {
					var theItems = arItemsToShow;
					for (var i = 0; i < theItems.length; i++) {
						if (theItems[i]["id"]!='') {
							var stLibelle = _cutWithBr(theItems[i]["libelle"]);
							result.push({
									code : theItems[i]["id"],
									label : stLibelle,
									image : theItems[i]["image"]
							});
						}
					}
				}

				// _infosDatas
				var nbGarbagesMax = 18; // la page InformationsButtonsPanel.js
										// affiche
				// 18 éléments
				this.setDataInButtonsWithManyLines(this.getInformationsList(),
						"informationsButtonsPanel", result, nbGarbagesMax, 3);
			}

		});