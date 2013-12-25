
/**
 * Controleur abstrait de l'application
 */
Ext.define('VivreANantes.controller.AbstractController', {
	extend : 'Ext.app.Controller',

	/**
	 * Retire les accents
	 */
	utilRetireAccent : function(result) {
		result = result.replace(/[ÀàÁáÂâÃãÄäÅåÆæĀāĂăĄą]/g,"a");
		result = result.replace(/[ÈèÉéÊêËëĒēĔĕĖėĘęĚě]/g,"e");
		result =  result.replace(/[Çç]/g,"c");
		result =  result.replace(/[Ð]/g,"d");
		result =  result.replace(/[ÌÍÎÏìíîï]/g,"i");
		result =  result.replace(/[ÙÚÛÜùúûü]/g,"u");
		result =  result.replace(/[Ññ]/g,"n");
		result =  result.replace(/[ÌÍÎÏìíîï]/g,"i");
		result =  result.replace(/[Šš]/g,"s");
		result =  result.replace(/[Ÿÿý]/g,"y");
		result =  result.replace(/[Žž]/g,"z");
		return result;
	},

	/*
	 * Ajoute les éléments d'un tableau à un tableau existant
	 */

	utilPushArray : function(arSrc, arTarget) {
		arTarget.push.apply(arTarget, arSrc);
		return;
	},

	utilArrayContainObject : function(a, obj) {
		return _utilArrayContainObject(a, obj);
	},

	/**
	 * Met la première lettre en majuscule
	 */
	stringUpperFirstLetter : function(result) {
		if (result != null && result.length > 1) {
			result = result.substring(0, 1).toUpperCase() + result.substring(1);
		}
		return result;
	},

	/**
	 * Traduit et met la première lettre en majuscule
	 */
	translateWithUpperFirstLetter : function(result) {
		return this.stringUpperFirstLetter(this.translate(result));
	},
	/*
	 * Retourne un objet String correspondant à l'année actuelle. Exemple "2014"
	 */

	utilGetStringCurrentYearAAAA : function() {
		return (new Date()).getFullYear();
	},

	utilGetDateTodayWithoutSeconds : function() {
		// var today = new Date();
		// return today;
		var today = new Date();
		today.setHours(0);
		today.setMinutes(0, 0, 0);
		return today;
	},

	utilGetDateTomorrowWithoutSeconds : function() {
		var today = this.utilGetDateTodayWithoutSeconds();
		return this.addDays(today, 1);
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

	utilGetDayOfWeekTwoCharacters : function(d) {

		var weekday = new Array(7);
		weekday[0] = "di";
		weekday[1] = "lu";
		weekday[2] = "ma";
		weekday[3] = "me";
		weekday[4] = "je";
		weekday[5] = "ve";
		weekday[6] = "sa";

		return weekday[d.getDay()];
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
	
	SEPARATOR : "#",

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
	
	/*onTapCommentButton : function(button) {
		alert(button.id);
	},*/

	addDays : function(d, j) {
		return new Date(d.getTime() + (1000 * 60 * 60 * 24 * j));
	},

	getContentButtonsPanel : function(arrayItemsToShow) {
		var arrayItems = new Array();
		var arrayitemsLine = new Array();
		var nbElementsParLines = 3;
		if (arrayItemsToShow) {
			for (var i = 0; i < arrayItemsToShow.length; i++) {
				// Si je suis sur un multiple de 3 je termine la ligne
				if (i / nbElementsParLines == Math
						.round(i / nbElementsParLines)) {
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
				var libelle = "<font size='3'>"+arrayItemsToShow[i]["libelle"]+"</font>";
				arrayitemsLine.push({
							xtype : "button", height : '120px', width : '33%', 
							id : arrayItemsToShow[i]["id"],
							// code : arrayItemsToShow[i]["id"],
							html :  "<center>"+libelle
									+ "<br/><img src='resources/images/"
									+ arrayItemsToShow[i]["image"]
									+ "' width='60px' /></center>"
						});
			}
			// Si la dernière ligne n'est pas terminée
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
		}
		return arrayItems;
	},
	
	removeAllAndSetItems : function(panel, arrayItems) {
		panel.removeAll(true, true);
		panel.setItems(arrayItems);
	},
	
	setDataInButtonsWithManyLines : function(panel, prefix, arrayItems, nbMaxElements, nbElementsPerLine) {
		var idElementToChange = 0;
		for (var i = 0; i < arrayItems.length; i++) {
			var element = arrayItems[i];
			var idElementToChange = i+1;
			var prefixComplet = prefix + "_"+idElementToChange;
			var nbLine = Math.floor(i/nbElementsPerLine);
			// Si la ligne n'existe pas
			if ( panel.items.items[nbLine]==null) {
				item = -1;
			} else {
				var item = panel.items.items[nbLine].items.keys.indexOf(prefixComplet);
			}
			if (item!=-1) {
				panel.items.items[nbLine].items.items[item].setData(element);
				panel.items.items[nbLine].items.items[item].setHidden(false);
			}
		};
		for (var i = idElementToChange; i < nbMaxElements; i++) {
		// Cache les éléments restants
			var idElementToChange = i+1;
			var prefixComplet = prefix + "_"+idElementToChange;
			var nbLine = Math.floor(i/nbElementsPerLine);
			// Si la ligne n'existe pas
			if ( panel.items.items[nbLine]==null) {
				item = -1;
			} else {
				var item = panel.items.items[nbLine].items.keys.indexOf(prefixComplet);
			}
			if (item!=-1) {
				panel.items.items[nbLine].items.items[item].setHidden(true);
			}
		}
	},
	
	
	setDataInButtons : function(panel, prefix, arrayItems, nbMaxElements) {

		var idElementToChange = 0;
		for (var i = 0; i < arrayItems.length; i++) {
			var element = arrayItems[i];
			var idElementToChange = i+1;
			var prefixComplet = prefix + "_"+idElementToChange;
			var item = panel.items.keys.indexOf(prefixComplet); 
			if (item!=-1) {
				panel.items.items[item].setData(element);
				panel.items.items[item].setHidden(false);
			}
		};
		// Cache les éléments restants
		for (var i = idElementToChange; i < nbMaxElements; i++) {
			var idElementToChange = idElementToChange+1;
			var prefixComplet = prefix + "_"+idElementToChange;
			var item = panel.items.keys.indexOf(prefixComplet); 
			if (item!=-1) {
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
	getItemsComments : function(commentsString, title) {
		var result = new Array();
		var thisController = this;
	
		// On parcourt les remarques de la faq
		var dataFaq = this.getApplication()
				.getController("VivreANantes.controller.CommentsController")
				.getCommentsList().getStore().getData();
		var nombre = 0;
		dataFaq.each(function(recordFaq) {
			if (recordFaq.raw["elements"]!=null) {
					// TODO utiliser getArrayFromString à la place
					var arrayElementsFaq = recordFaq.raw["elements"].replace(
							", /g", ",").replace(" ,/g", ",").split(',');
					for (i in arrayElementsFaq) {
					
						if (arrayElementsFaq[i] === commentsString) {
							result.push({
										html : "<B>" + recordFaq.raw["libelle"]	+ "</B><BR/>"
												+ recordFaq.raw["description"]
												+ "<br/>",
										style: "background-color:" + thisController.getColorPairImpair(nombre)
									}
									);
							nombre ++;
						}
						
					}
				}
			});
		// TODO Ajout d'un formulaire
		title = title.replace("-/g", "_").replace("<I>", "").replace("</I>", "");
		var codeValue = "comments_xtype"+this.SEPARATOR + " "+title+" ("+commentsString+")";
		result.push(
			/*{
					xtype : 'button',
					text : 'Envoyez un commentaire',
					centered : 'true',
					data : {
						code : codeValue
					}
				}*/
				
				{
					xtype : 'container',
					layout : 'vbox',
					padding: '20 200 20 200',
					style: "background-color:" + thisController.getColorPairImpair(nombre),
					items : [{
						xtype : 'button',
						id : "garbagesdetails_informations", 
						text : "Envoyez un commentaire",
						data : {
							code : codeValue
						}	
					}]
				}
				);
		return result;
	},
	
	getColorPairImpair : function(nombre) {
		if (nombre%2 == 0)
		{  //pair 
			return color = "#5E99AA";		
		}
		else
		{  //impair
			return color = "#5E99EE";
		
		}
	},

	/**
	 * Affecte les items (les éléments fils d'un container) à un élement dont
	 * l'identifiant est elementId de l'élément view.
	 */
	setItemsElement : function(view, elementId, arrayItems) {
		var theItems = view.items.items;
		for (var i = 0; i < theItems.length; i++) {
			if (theItems[i].id == elementId) {
				// Cet élément devient actif
				theItems[i].setItems(arrayItems);
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
	getArrayItemsToShowAdvices : function(advicesString) {
		var result1 = new Array();
		var result2 = new Array();
		var thisController = this;
		var arrayConseils = advicesString.replace(", /g", ",").replace(" ,/g",
				",").split(',');
		// On parcourt les conseils
		if (arrayConseils.length > 0) {
			var dataAdvices = this
					.getApplication()
					.getController("VivreANantes.controller.GarbagesController")
					.getAdvicesList().getStore().getData();
			var thisController = this;
			dataAdvices.each(function(recordAdvice) {
				for (i in arrayConseils) {
					if (recordAdvice.raw["code"] === arrayConseils[i]) {
						result1.push({
									libelle : recordAdvice.raw["libelle"],
									description : recordAdvice.raw["description"]
								});
						if (recordAdvice.raw["fiche"] != null
								&& recordAdvice.raw["fiche"] != "") {
							result2.push({
										"libelle" : recordAdvice.raw["libelle"],
										code : "informations"
												+ thisController.SEPARATOR
												+ recordAdvice.raw["fiche"]
									});
						}
					}
				}
			});
		}
		return {
			les_libelles : result1,
			les_boutons : result2
		};
	},
	
	setDatasConseils : function(panel, prefix, prefix2, arrayItems,
			nbMaxElements, nbElementsPerLine) {

		// 1. les libellés
		var idElementToChange = 0;
		for (var i = 0; i < arrayItems.length; i++) {
			var element = arrayItems[i];
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
					panelParent.items.items[index].setHidden(false);
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
	
	getArrayItemsToShowComments : function(commentsString, title) {
		var result = new Array();
		var thisController = this;

		// On parcourt les remarques de la faq
		var dataFaq = this.getApplication()
				.getController("VivreANantes.controller.CommentsController")
				.getCommentsList().getStore().getData();
		dataFaq.each(function(recordFaq) {
					if (recordFaq.raw["elements"] != null) {
						// TODO utiliser getArrayFromString à la place
						var arrayElementsFaq = recordFaq.raw["elements"]
								.replace(", /g", ",").replace(" ,/g", ",")
								.split(',');
						for (i in arrayElementsFaq) {

							if (arrayElementsFaq[i] === commentsString) {
								result.push({
											libelle : recordFaq.raw["libelle"],
											description : recordFaq.raw["description"]
										});
							}

						}
					}
				});
		title = title.replace("-/g", "_").replace("<I>", "").replace("</I>", "");
		var codeValue = "comments_xtype"+this.SEPARATOR + " "+title+" ("+commentsString+")";
		return {
			les_libelles : result,
			le_titre : codeValue
		};
	},
	
	/**
	 * Renvoie les items (les éléments fils d'un container) correspondant à la
	 * partie "conseils" d'une page
	 * 
	 * @params advicesString chaine de caractère listant les codes des conseils
	 *         (ex : ",cons_1,cons2,cons3")
	 */
	getItemsAdvices : function(advicesString) {
		var result = new Array();
		var thisController = this;
		var arrayConseils = advicesString.replace(", /g", ",").replace(" ,/g",
				",").split(',');
		// On parcourt les conseils
		if (arrayConseils.length > 0) {
			var dataAdvices = this
					.getApplication()
					.getController("VivreANantes.controller.GarbagesController")
					.getAdvicesList().getStore().getData();
			var thisController = this;
			dataAdvices.each(function(recordAdvice) {
				for (i in arrayConseils) {
					if (recordAdvice.raw["code"] === arrayConseils[i]) {
						if (recordAdvice.raw["fiche"]!=null && recordAdvice.raw["fiche"] != "") {
							// lien vers une fiche
							result.push({
										xtype : 'container',
										layout : 'hbox',
										// style : 'background-color: #759E60;',
										id : "garbagesdetails_commentaires_"+recordAdvice.raw["code"],
										items : [{
											html : "<b>"
													+ recordAdvice.raw["libelle"]
													+ "</b><br/>"
													+ recordAdvice.raw["description"]
													+ "<br/><br/>",
											flex : 1
										}, {
											xtype : 'container',
											layout : 'vbox',
											items : [{
												xtype : 'button',
												id : "garbagesdetails_informations", 
												text : "Fiche explicative",
												data: {
													code : "informations" + thisController.SEPARATOR + recordAdvice.raw["fiche"]
												}
											}]
										}]
									});
						}

						// pas de lien vers une fiche
						else {
							result.push({
										id : "garbagesdetails_commentaires_"+recordAdvice.raw["code"],
										html : "<b>"
												+ recordAdvice.raw["libelle"]
												+ "<br/></b>"
												+ recordAdvice.raw["description"]
												+ "<br/><br/>"
									});
						}
					}
				}
			});
		}
		return result;
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
					+ "Réemploi" + st3;
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
		var idComplet = id + this.SEPARATOR + idDetail;
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
			this.manageBackButton(Ext.getCmp("mainView").stBackButton,
								  Ext.getCmp("mainView").stBackButtonMain);
		}
	},
	
	manageBackButton : function(mainPageXtype, mainOrNot) {
		
		// On recherche la page dont le xtype correspond au buttonId
		var mainItems = Ext.getCmp("mainView").items.items;
		for (var i = 0; i < mainItems.length; i++) {
			if (mainItems[i].xtype == mainPageXtype) {
				// if (mainOrNot) {
				// 	Ext.getCmp("mainView").items.items[i-1].setActiveItem(0);
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
		var arrayButtonsId = buttonId.split(this.SEPARATOR);
		var mainPageXtype = arrayButtonsId[0];
		if (arrayButtonsId.length > 1) {
			var elementToShowInPage = arrayButtonsId[1];
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
			var myController = this
					.getApplication()
					.getController("VivreANantes.controller.GarbagesController");
			var datas = myController.getInformationsList().getStore().getData();
			myController = this
					.getApplication()
					.getController("VivreANantes.controller.InformationsController");
			// CRN_TEMPO
			datas.each(function(record) {
						// bascule vers la page
						if (record.data["code"] == elementToShowInPage) {
							myController.showDetails(elementToShowInPage);
						}
					});

		}
		// OU On affiche le commentaire
		else if (mainPageXtype == "comments_xtype") {
			Ext.getCmp("commentsFormTextfield").setValue("A propos de '"+elementToShowInPage+"'");
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
		var arrayItemsToShow = new Array();
		var thisController = this;
		datas.each(function(record) {
					if (record.data["bouton"] == buttonLabel) {

						// Ajoute les <br/>
						var stLibelle = thisController
								.decoupe(record.data["libelle"]);

						arrayItemsToShow.push({
									"libelle" : stLibelle,
									"image" : record.data["image"],
									"id" : record.data["code"]
								});
					}

				});
		return arrayItemsToShow;
	},
	/**
	 * Découpe une chaîne de caractère (notamment pour les boutons) en insérant
	 * des balises "<br/>
	 */
	decoupe : function(stChaine) {
		var result = "";
		if (stChaine != undefined) {
			var iTailleMax = 30;

			// séparateurs : ", " OU " ," OU " -" OU "- " OU "-" OU " "
			var array = stChaine.split(/, | ,| -|- |-| /);
			var tailleRestanteLigne = iTailleMax;
			for (var i = 0; i < array.length; i++) {
				result += array[i];
				tailleRestanteLigne = tailleRestanteLigne - array[i].length;
				// Si il reste des mots
				if (i + 1 < array.length) {
					// Si le prochain mot n'est pas trop long, on ajoute juste
					// un
					// espace
					if (array[i + 1].length <= tailleRestanteLigne) {
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