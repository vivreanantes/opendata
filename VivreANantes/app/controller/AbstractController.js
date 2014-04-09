
/**
 * Controleur abstrait de l'application
 */
Ext.define('VivreANantes.controller.AbstractController', {
	extend : 'Ext.app.Controller',

	/**
	 * Ajoute les éléments d'un tableau arSrc  à un tableau existant arTarget
	 */
	utilPushArray : function(arSrc, arTarget) {
		arTarget.push.apply(arTarget, arSrc);
		return;
	},

	/**
	 * Vérifie si un tableau arSrc contient un objet obj
	 */
	utilArrayContainObject : function(arSrc, obj) {
		return _utilArrayContainObject(arSrc, obj);
	},

	/**
	 * Met la première lettre en majuscule
	 */
	stringUpperFirstLetter : function(result) {
		return _stringUpperFirstLetter(result);
	},

	/**
	 * Traduit et met la première lettre en majuscule
	 */
	translateWithUpperFirstLetter : function(result) {
		return translateWithUpperFirstLetter(result);
	},

	/**
	 * Retourne un objet String correspondant à l'année actuelle. Exemple "2014"
	 */
	utilGetStringCurrentYearAAAA : function() {
		return _utilGetStringCurrentYearAAAA();
	},

	utilGetDateTodayWithoutSeconds : function() {
		return _utilGetDateTodayWithoutSeconds();
	},

	/*
	 * Retourne sous forme d'une chaîne de caractère le jour de la semaine d'une
	 * date
	 */

	utilGetDayOfWeek : function(d) {

		var weekday = new Array(7);
		weekday[0] = "label_dimanche";
		weekday[1] = "label_lundi";
		weekday[2] = "label_mardi";
		weekday[3] = "label_mercredi";
		weekday[4] = "label_jeudi";
		weekday[5] = "label_vendredi";
		weekday[6] = "label_samedi";
		var day = weekday[d.getDay()];
		var result = this.translate(day);
		return result;
	},

	utilGetDayOfWeekTwoCharacters : function(day) {
		return utilGetDayOfWeekTwoCharacters(day);
	},

	utilReplace : function(strSrc, avant, apres) {
		return strSrc.split(avant).join(apres);
	},

	/*
	 * Traduit un libellé. Si on ne le trouve pas, renvoie la clé.
	 */

	translate : function(stKey) {
		if (this.stLocale == null) {
			this.stLocale = this.getLocale();
		}
		// invoque la fonction définie dans translation.js
		return _translate(stKey, this.stLocale);
	},

	/**
	 * Renvoie la locale (par exemple "fr" ou "en"). Cette fonction invoque le
	 * LocalStorageController.
	 */
	getLocale : function() {
		var result = "";
		var localStorageController = this
				.getApplication()
				.getController("VivreANantes.controller.LocalStorageController");
		result = localStorageController.getLocale();
		return result;
	},

	IMAGE_DIR : "resources/images/",

	/**
	 * Convertit un jour dans sa chaine de caractère. Ex "01" devient "janvier".
	 */
	convertDayNumberToString : function(stMonth) {
		var result = "";
		if (stMonth == "01") {
			result = "label_janvier";
		} else if (stMonth == "02") {
			result = "label_fevrier";
		} else if (stMonth == "03") {
			result = "label_mars";
		} else if (stMonth == "04") {
			result = "label_avril";
		} else if (stMonth == "05") {
			result = "label_mai";
		} else if (stMonth == "06") {
			result = "label_juin";
		} else if (stMonth == "07") {
			result = "label_juillet";
		} else if (stMonth == "08") {
			result = "label_aout";
		} else if (stMonth == "09") {
			result = "label_septembre";
		} else if (stMonth == "10") {
			result = "label_octobre";
		} else if (stMonth == "11") {
			result = "label_novembre";
		} else if (stMonth == "12") {
			result = "label_decembre";
		}
		result = this.translate(result);
		return result;
	},

	/*
	 * onTapCommentButton : function(button) { alert(button.id); },
	 */

	getContentButtonsPanel : function(arItemsToShow) {
		var arItems = new Array();
		var aritemsLine = new Array();
		var nbElementsParLines = 3;
		if (arItemsToShow) {
			for (var i = 0; i < arItemsToShow.length; i++) {
				// Si je suis sur un multiple de 3 je termine la ligne
				if (i / nbElementsParLines == Math
						.round(i / nbElementsParLines)) {
					if (aritemsLine != null) {
						var objectItem1 = {
							'layout' : {
								type : 'hbox',
								align : 'stretch'
							},
							'items' : aritemsLine
						};
						arItems.push(objectItem1);
					}

					var aritemsLine = new Array();
				}
				var libelle = "<font size='3'>"
						+ arItemsToShow[i]["libelle"] + "</font>";
				aritemsLine.push({
							xtype : "button",
							height : '120px',
							width : '33%',
							id : arItemsToShow[i]["id"],
							// code : arItemsToShow[i]["id"],
							html : "<center>" + libelle
									+ "<br/><img src='resources/images/"
									+ arItemsToShow[i]["image"]
									+ "' /></center>"
						});
			}
			// Si la dernière ligne n'est pas terminée
			if (aritemsLine.length != 0) {
				var objectItem1 = {
					'layout' : {
						type : 'hbox',
						align : 'stretch'
					},
					'items' : aritemsLine
				};
				arItems.push(objectItem1);
			}
		}
		return arItems;
	},

	removeAllAndSetItems : function(panel, arItems) {
		panel.removeAll(true, true);
		panel.setItems(arItems);
	},

	setDataInButtonsWithManyLines : function(panel, prefix, arItems,
			nbMaxElements, nbElementsPerLine) {
		var idElementToChange = 0;
		for (var i = 0; i < arItems.length; i++) {
			var element = arItems[i];
			var idElementToChange = i + 1;
			var prefixComplet = prefix + "_" + idElementToChange;
			var nbLine = Math.floor(i / nbElementsPerLine);
			// Si la ligne n'existe pas
			if (panel.items.items[nbLine] == null) {
				item = -1;
			} else {
				var item = panel.items.items[nbLine].items.keys
						.indexOf(prefixComplet);
			}
			if (item != -1) {
				panel.items.items[nbLine].items.items[item].setData(element);
				panel.items.items[nbLine].items.items[item].setHidden(false);
			}
		};
		for (var i = idElementToChange; i < nbMaxElements; i++) {
			// Cache les éléments restants
			var idElementToChange = i + 1;
			var prefixComplet = prefix + "_" + idElementToChange;
			var nbLine = Math.floor(i / nbElementsPerLine);
			// Si la ligne n'existe pas
			if (panel.items.items[nbLine] == null) {
				item = -1;
			} else {
				var item = panel.items.items[nbLine].items.keys
						.indexOf(prefixComplet);
			}
			if (item != -1) {
				panel.items.items[nbLine].items.items[item].setHidden(true);
			}
		}
	},

	setDataInButtons : function(panel, prefix, arItems, nbMaxElements) {

		var idElementToChange = 0;
		for (var i = 0; i < arItems.length; i++) {
			var element = arItems[i];
			var idElementToChange = i + 1;
			var prefixComplet = prefix + "_" + idElementToChange;
			var item = panel.items.keys.indexOf(prefixComplet);
			if (item != -1) {
				panel.items.items[item].setData(element);
				panel.items.items[item].setHidden(false);
			}
		};
		// Cache les éléments restants
		for (var i = idElementToChange; i < nbMaxElements; i++) {
			var idElementToChange = idElementToChange + 1;
			var prefixComplet = prefix + "_" + idElementToChange;
			var item = panel.items.keys.indexOf(prefixComplet);
			if (item != -1) {
				panel.items.items[item].setHidden(true);
			}
		}
	},
	/**
	 * Renvoie les items (les éléments fils d'un container) correspondant à la
	 * partie "commentaires" d'une page
	 *
	 * @params commentsString chaine de caractère correspondant au code de
	 *         l'élément dont on recherche des commentaires (ex :
	 *         "dec_bouchons")
	 */
		getItemsComments : function (commentsString, title) {
		var result = new Array();

		// On parcourt les remarques de la faq
		for (j in _objComments) {
			if (_objComments[j]["elements"] != null) {

				if (_objComments[j]["elements"]!=null) {
					var arElementsFaq = _objComments[j]["elements"].replace(", /g", ",").replace(" ,/g", ",").split(',');
					for (i in arElementsFaq) {
	
						if (arElementsFaq[i] === commentsString) {
							result.push({
								html : "<B>" + _objComments[j]["libelle"] + "</B><BR/>" + _objComments[j]["description"] + "<br/>"
							});
						}

				}
				}
			}
		}
		title = title.replace("-/g", "_").replace("<I>", "").replace("</I>", "");
		var codeValue = "comments_xtype" + _SEPARATOR + " " + title + " (" + commentsString + ")";
		result.push({
			xtype : 'button',
			width : 200,
			id : "garbagesdetails_informations",
			text : "Envoyer un commentaire",
			data : {
				code : codeValue
			}
		}
		
		);
		return result;
	},

	getColorPairImpair : function(nombre) {
		if (nombre % 2 == 0) { // pair
			return color = "#5E99AA";
		} else { // impair
			return color = "#5E99EE";

		}
	},

	/**
	 * Affecte les items (les éléments fils d'un container) à un élement dont
	 * l'identifiant est elementId de l'élément view.
	 */
	setItemsElement : function(view, elementId, arItems) {
		var theItems = view.items.items;
		for (var i = 0; i < theItems.length; i++) {
			if (theItems[i].id == elementId) {
				// Cet élément devient actif
				theItems[i].setItems(arItems);
			}
		};
	},

	/**
	 * Affecte les datas d'un élement dont l'identifiant est elementId de
	 * l'élément view.
	 */
	setDataElement : function(view, elementId, objectData) {
		var theItems = view.items.items;
		for (var i = 0; i < theItems.length; i++) {
			if (theItems[i].id == elementId) {
				// Cet élément devient actif
				theItems[i].setData(objectData);
			}
		};
	},
	/**
	 * Renvoie les items (les éléments fils d'un container) correspondant à la
	 * partie "conseils" d'une page
	 *
	 * @params advicesString chaine de caractère listant les codes des conseils
	 *         (ex : ",cons_1,cons2,cons3")
	 */

		getArrayItemsToShowAdvices : function (advicesString) {
		var result1 = new Array();
		var result2 = new Array();
		if (advicesString!=null) {
			var arConseils = advicesString.replace(", /g", ",").replace(" ,/g", ",").split(',');
			
			// On parcourt les conseils
			if (arConseils.length > 0) {
				for (j in _objAdvices) {
					for (i in arConseils) {
						if (_objAdvices[j]["code"] === arConseils[i]) {
							result1.push({
								libelle : _objAdvices[j]["libelle"],
								description : _objAdvices[j]["description"]
							});
							if (_objAdvices[j]["fiche"] != null
								 && _objAdvices[j]["fiche"] != "") {
								result2.push({
									"libelle" : _objAdvices[j]["libelle"],
									code : "informations" + _SEPARATOR + _objAdvices[j]["fiche"]
								});
							}
						}
					}
				}
			}
		}
		return {
			les_libelles : result1,
			les_boutons : result2
		};
	},

	setDatasConseils : function(panel, prefix, prefix2, prefix3, arItems, arItemsBoutons,
			nbMaxElements, nbElementsPerLine) {

		// 1. les libellés
		var idElementToChange = 0;
		for (var i = 0; i < arItems.length; i++) {
			var element = arItems[i];
			var elementButton = arItemsBoutons[i];
			var idElementToChange = i + 1;
			// On retrouve l'index de l'élément parent
			var indexParent = panel.keys.indexOf(prefix + "_"
					+ idElementToChange);
			if (indexParent != -1) {
				var panelParent = panel.items[indexParent];
				panelParent.setHidden(false);
				var prefixComplet = prefix + "_" + idElementToChange + "_"
						+ prefix2;
				var index = panelParent.items.keys.indexOf(prefixComplet);
				if (index != -1) {
					panelParent.items.items[index].setData(element);
					// panelParent.items.items[index].setHidden(false);
				}
				if (elementButton) {
					var prefixComplet = prefix + "_" + idElementToChange + "_"
						+ prefix3;
					var index = panelParent.items.keys.indexOf(prefixComplet);
					if (index != -1) {
						panelParent.items.items[index].setData(elementButton);
					}
				}
			}
		}
		// Cache les éléments restants
		for (var i = idElementToChange; i < nbMaxElements; i++) {
			var idElementToChange = idElementToChange + 1;
			// On retrouve l'index de l'élément parent
			var indexParent = panel.keys.indexOf(prefix + "_"
					+ idElementToChange);
			if (indexParent != -1) {
				var panelParent = panel.items[indexParent];
				panelParent.setHidden(true);
			}
		}

	},

	getArrayItemsToShowComments : function (commentsString, title) {
		var result = new Array();

		// On parcourt les commentaires
		for (j in _objComments) {
			if (_objComments[j]["elements"] != null) {
				var arElementsFaq = _objComments[j]["elements"].replace(", /g", ",").replace(" ,/g", ",").split(',');
				for (i in arElementsFaq) {

					if (arElementsFaq[i] === commentsString) {
						result.push({
							libelle : _objComments[j]["libelle"],
							description : _objComments[j]["description"]
						});
					}
				}
			}
		}
		title = title.replace("-/g", "_").replace("<I>", "").replace("</I>", "");
		var codeValue = "comments_xtype" + _SEPARATOR + " " + title + " (" + commentsString + ")";
		return {
			les_libelles : result,
			le_titre : codeValue
		};
	},

	

	/*
	 * Créer un lien vers une page de l'application. En paramètre l'identifiant :
	 * valeur autorisées : garbagePanel, mapPanel, informationsPanel,
	 * structuresPanel, reusesPanel, collectModsPanel, homeCollectsModsPanel,
	 * trisacsPanel, commentsPanel, aboutPanel
	 */
	makeLink : function(id, idDetail) {
		if (idDetail == undefined) {
			idDetail = "";
		}
		var res = "";
		var st1 = "<a href='#' onClick='Javascript:";
		var st2 = "' >";
		var st3 = "</a>";

		if (id == "garbagePanel") {
			res = st1 + "showGarbagePanel(\"" + idDetail + "\")" + st2
					+ "Déchets" + st3;
		} else if (id == "mapPanel") {
			res = st1 + "showMapPanel(\"" + idDetail + "\")" + st2 + "Carte"
					+ st3;
		} else if (id == "informationsPanel") {
			res = st1 + "showInformationsPanel(\"" + idDetail + "\")" + st2
					+ "Informations" + st3;
		} else if (id == "structuresPanel") {
			res = st1 + "showStructuresPanel(\"" + idDetail + "\")" + st2
					+ "Structures" + st3;
		} else if (id == "reusesPanel") {
			res = st1 + "showReusesPanel(\"" + idDetail + "\")" + st2
					+ "Récup." + st3;
		} else if (id == "collectModsPanel") {
			if (idDetail != "") {
				var label = this.translate("label_" + idDetail);
			}
			if (label == "" || label == idDetail) {
				label = "Modes de collectes";
			}
			res = st1 + "showCollectModsPanel(\"" + idDetail + "\")" + st2
					+ label + st3;

		} else if (id == "homeCollectsModsPanel") {
			res = st1 + "showHomeCollectsModsPanel(\"" + idDetail + "\")" + st2
					+ "A domicile" + st3;
		} else if (id == "trisacsPanel") {
			res = st1 + "showTrisacsPanel(\"" + idDetail + "\")" + st2
					+ "Trisac" + st3;
		} else if (id == "commentsPanel") {
			res = st1 + "showCommentsPanel(\"" + idDetail + "\")" + st2
					+ "Commentaires" + st3;
		} else if (id == "aboutPanel") {
			res = st1 + "showAboutPanel(\"" + idDetail + "\")" + st2
					+ "A propos" + st3;
		}
		return res;
	},

	/**
	 * Construit un bouton dont l'identifiant est mainPageXtype +
	 * elementToShowInPage (ex : "garbagesView-dec_aerosols").
	 */
	makeLinkButton : function(id, idDetail) {
		var label = this.translate("label_" + idDetail);
		var idComplet = id + _SEPARATOR + idDetail;
		var idComplet = "collectMods-contembjournmag";
		var res = {
			xtype : 'button',
			id : idComplet,
			text : label
		};
		return res;
	},

	saveBackButton : function(buttonId, mainOrNot) {
		Ext.getCmp("mainView").stBackButton = buttonId;
		Ext.getCmp("mainView").stBackButtonMain = mainOrNot;
	},

	onPushBackButton : function() {
		if (Ext.getCmp("mainView").stBackButton) {
			this.manageBackButton(Ext.getCmp("mainView").stBackButton, Ext
							.getCmp("mainView").stBackButtonMain);
		}
	},

	manageBackButton : function(mainPageXtype, mainOrNot) {

		// On recherche la page dont le xtype correspond au buttonId
		var mainItems = Ext.getCmp("mainView").items.items;
		for (var i = 0; i < mainItems.length; i++) {
			if (mainItems[i].xtype == mainPageXtype) {
				// if (mainOrNot) {
				// Ext.getCmp("mainView").items.items[i-1].setActiveItem(0);
				// }
				// Cet élément devient actif
				Ext.getCmp("mainView").setActiveItem(i - 1);
			}
		};
	},

	/**
	 * Effectue le changement de page
	 * 
	 * @param {}
	 *            buttonId : mainPageXtype + elementToShowInPage (ex :
	 *            "garbagesView-dec_aerosols")
	 */
	manageLinkButtons : function(buttonId) {

		// On décompose buttonId pour initialiser mainPageXtype et
		// elementToShowInPage
		var arButtonsId = buttonId.split(_SEPARATOR);
		var mainPageXtype = arButtonsId[0];
		if (arButtonsId.length > 1) {
			var elementToShowInPage = arButtonsId[1];
		}

		// On affiche le déchet
		if (mainPageXtype == "garbages_xtype") {
			var myController = this
					.getApplication()
					.getController("VivreANantes.controller.GarbagesController");
			var datas = myController.getGarbagesList().getStore().getData();
			datas.each(function(record) {
						if (record.data["code"] == elementToShowInPage) {
							// On doit effacer le filtre pour être sur que la
							// liste contient bien l'élément
							store.clearFilter();
							myController.showGarbagesDetail(null, null, null,
									record);
						}
					});
		}
		// OU On affiche le mode de collecte
		else if (mainPageXtype == "collectMods_xtype") {
			var myController = this
					.getApplication()
					.getController("VivreANantes.controller.CollectModsController");
			if (elementToShowInPage != null) {
				myController.showDetails(elementToShowInPage);
			}
		}
		// OU On affiche la fiche explicative
		else if (mainPageXtype == "informations") {
			informationsController = this.getApplication().getController("VivreANantes.controller.InformationsController");
			if (_getInfo(elementToShowInPage)) {
				informationsController.showDetails(elementToShowInPage);
			}
			

			//			// STORE datasInformations
			//			var myController = this	.getApplication().getController("VivreANantes.controller.GarbagesController");
			//			var datas = myController.getInformationsList().getStore().getData();
			//			myController = this.getApplication().getController("VivreANantes.controller.InformationsController");
			//			// CRN_TEMPO
			//			datas.each(function (record) {
			//				// bascule vers la page
			//				if (record.data["code"] == elementToShowInPage) {
			//					myController.showDetails(elementToShowInPage);
			//				}
			//			});

		}
		// OU On affiche le commentaire
		else if (mainPageXtype == "comments_xtype") {
			Ext.getCmp("commentsFormTextfield").setValue("A propos de '"
					+ elementToShowInPage + "'");
			Ext.getCmp("commentsFormTextareafield").setValue("");
		}

		// On recherche la page dont le xtype correspond au buttonId
		var mainItems = Ext.getCmp("mainView").items.items;
		for (var i = 0; i < mainItems.length; i++) {
			if (mainItems[i].xtype == mainPageXtype) {
				// Cet élément devient actif
				Ext.getCmp("mainView").setActiveItem(i - 1);
			}
		};

	},

	/**
	 * Renvoie les boutons d'après le data d'un store
	 * 
	 * @param {}
	 *            datas buttonLabel le label du bouton a affiche (exemple "cu"
	 *            pour "catégories usuelles")
	 * @return {} tableau des items (les items sont des objets permettant de
	 *         créer des boutons)
	 */
	getDatasForButtons : function(datas, buttonLabel) {
		var arItemsToShow = new Array();
		var thisController = this;
		datas.each(function(record) {
					if (record.data["bouton"] == buttonLabel) {

						// Ajoute les <br/>
						var stLibelle = _cutWithBr(record.data["libelle"]);

						arItemsToShow.push({
									"libelle" : stLibelle,
									"image" : record.data["image"],
									"id" : record.data["code"]
								});
					}

				});
		return arItemsToShow;
	},
	/**
	 * Découpe une chaîne de caractère (notamment pour les boutons) en insérant
	 * des balises "<br/>
	 */
	/*decoupe : function(stChaine) {
		var result = "";
		if (stChaine != undefined) {
			var iTailleMax = 30;

			// séparateurs : ", " OU " ," OU " -" OU "- " OU "-" OU " "
			var ar = stChaine.split(/, | ,| -|- |-| /);
			var tailleRestanteLigne = iTailleMax;
			for (var i = 0; i < ar.length; i++) {
				result += ar[i];
				tailleRestanteLigne = tailleRestanteLigne - ar[i].length;
				// Si il reste des mots
				if (i + 1 < ar.length) {
					// Si le prochain mot n'est pas trop long, on ajoute juste
					// un
					// espace
					if (ar[i + 1].length <= tailleRestanteLigne) {
						result += " ";
						tailleRestanteLigne = tailleRestanteLigne - 1;
					}
					// Sinon on ajoute un retour à la ligne
					else {
						result += "<br/>";
						tailleRestanteLigne = iTailleMax;
					}
				}
			}
		}
		return result;
	},*/
	
	/**
	 * Renvoie les boutons d'après le data
	 *
	 * @param {Array} data objet correspond aux boutons
	 * @param {string} buttonLabel le label du bouton a affiche (exemple "cu"
	 *            pour "catégories usuelles")
	 * @return {Array} tableau des items (les items sont des objets permettant de
	 *         créer des boutons)
	 */

	getArrayItemsToShowForButtons : function (datas, buttonLabel) {
		var arItemsToShow = new Array();
		for (var i = 0; i < datas.length; i++) {
			if (datas[i].bouton == buttonLabel) {
				var stLibelle = _cutWithBr(datas[i]["libelle"]); // Ajoute les <br/>
				arItemsToShow.push({
					"libelle" : stLibelle,
					"image" : datas[i].image,
					"id" : datas[i].code
				});
			}
		};
		return arItemsToShow;

	}
});

function showGarbagePanel(id) {
	Ext.getCmp("mainView").setActiveItem(0);
};
function showMapPanel(id) {
	Ext.getCmp("mainView").setActiveItem(1);
};
function showInformationsPanel(id) {
	Ext.getCmp("mainView").setActiveItem(2);
};
function showStructuresPanel(id) {
	Ext.getCmp("mainView").setActiveItem(3);
};
function showReusesPanel(id) {
	Ext.getCmp("mainView").setActiveItem(4);
};
function showCollectModsPanel(collectModId) {
	/*
	 * if (collectModId != "") {
	 * Ext.getCmp("collectModsController").showDetails(collectModId);
	 * this.getApplication()
	 * .getController('VivreANantes.controller.CollectModsController')
	 * .showDetails(collectModId); }
	 */
	Ext.getCmp("mainView").setActiveItem(6);
};
function showHomeCollectsModsPanel(id) {
	Ext.getCmp("mainView").setActiveItem(7);
};
function showTrisacsPanel(id) {
	Ext.getCmp("mainView").setActiveItem(8);
};
function showCommentsPanel(id) {
	Ext.getCmp("mainView").setActiveItem(9);
};
function showAboutPanel(id) {
	Ext.getCmp("mainView").setActiveItem(9);
};

sendMail = function(id) {
	var msg = {
		subject : "Ajouter un commentaire " + id,
		body : "N'oubliez pas votre nom."
	};
	window.location = "mailto:vivreanantes@gmail.com" + "?"
			+ Ext.urlEncode(msg);
}