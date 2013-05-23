
/**
 * Controleur de la partie Structures
 */
Ext.define('VivreANantes.controller.AbstractController', {
	extend : 'Ext.app.Controller',

	/*
	 * Ajoute les éléments d'un tableau à un tableau existant
	 */

	utilPushArray : function(arSrc, arTarget) {
		arTarget.push.apply(arTarget, arSrc);
		return;
	},

	utilArrayContainObject : function(a, obj) {
		for (var i = 0; i < a.length; i++) {
			if (a[i] === obj) {
				return true;
			}
		}
		return false;
	},
	/**
	 * Renvoie la position du premier nombre sur la chaîne. Ex lu200313 renvoie
	 * 2 (car 0 est la première position) ou -1 si pas trouvé.
	 */

	utilPosFirstNumberInString : function(string) {
		var arrayNumbers = new Array("0", "1", "2", "3", "4", "5", "6", "7",
				"8", "9");
		var indexLastNumberPosition = string.length;
		for (var i = 0; i < arrayNumbers.length; i++) {
			var searchvalue = arrayNumbers[i];
			if (string.indexOf(searchvalue, 0) != -1
					&& string.indexOf(searchvalue, 0) < indexLastNumberPosition) {
				indexLastNumberPosition = string.indexOf(searchvalue, 0);
			}
		}
		if (indexLastNumberPosition == string.length) {
			indexLastNumberPosition = -1;
		}
		return indexLastNumberPosition;
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

	utilGetDayOfWeek : function(d, locale) {

		var weekday = new Array(7);
		if (locale == "en") {
			weekday[0] = "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";
		} else {
			weekday[0] = "Lundi";
			weekday[1] = "Mardi";
			weekday[2] = "Mercredi";
			weekday[3] = "Jeudi";
			weekday[4] = "Vendredi";
			weekday[5] = "Samedi";
			weekday[6] = "Dimanche";
		}
		return weekday[d.getDay()];
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
	 * Traduit un libellé. Si on ne le trouve pas renvoie la clé.
	 */

	translate : function(stKey, stLocale) {
		var result = stKey;
		var map = {
			"label_sauf_ferie" : {
				"en" : "except official holiday",
				"fr" : "sauf jours fériés"
			},
			"label_de" : {
				"en" : "from",
				"fr" : "de"
			},
			"label_le" : {
				"en" : " ",
				"fr" : "le"
			},
			"label_du" : {
				"en" : "from",
				"fr" : "du"
			},
			"label_toutelannee" : {
				"en" : "All the year",
				"fr" : "Toute l'année"
			},
			"label_au" : {
				"en" : "to the",
				"fr" : "au"
			},
			"label_a" : {
				"en" : "to",
				"fr" : "à"
			},
			"label_h" : {
				"en" : "h",
				"fr" : "h"
			},
			"label_et" : {
				"en" : "and",
				"fr" : "et"
			},
			"label_structure_template_detail" : {
				"en" : "Type : {type} - {soustype} <BR/>Name : {libelle} <BR/>Schedules : {plagesHoraires2} {ouvertAujourdhuiEtDemain} <BR/>Address : {adresseTemp} '+ ' <BR/>Phone : {telephoneTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}",
				"fr" : "Type : {type} - {soustype} <BR/>Nom : {libelle} <BR/>Horaires : {plagesHoraires2} {ouvertAujourdhuiEtDemain} <BR/>Adresse : {adresseTemp} '+ ' <BR/>Téléphone : {telephoneTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}"
			},
			"label_trisac_template_detail" : {
				"en" : "Name : {libelle} <BR/>Schedules : {horaires} {ouvertAujourdhuiEtDemain} <BR/>Address : {adresseTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}",
				"fr" : "Nom : {libelle} <BR/>Horaires : {horaires} {ouvertAujourdhuiEtDemain} <BR/>Adresse : {adresseTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}"
			}

		};
		if (stLocale == "en" && map[stKey]["en"] != null) {
			result = map[stKey]["en"];
		} else if (map[stKey]["fr"] != null) {
			result = map[stKey]["fr"];
		}
		return result;
	},

	IMAGE_DIR : "resources/images/",

	/*
	 * Convertit un jour dans sa chaine de caractère. Ex "01" devient "janvier")
	 */

	convertDayNumberToString : function(stMonth, stLocale) {
		var result = "";
		if (stMonth == "01") {
			result = "janvier";
		} else if (stMonth == "02") {
			result = "février";
		} else if (stMonth == "03") {
			result = "mars";
		} else if (stMonth == "04") {
			result = "avril";
		} else if (stMonth == "05") {
			result = "mai";
		} else if (stMonth == "06") {
			result = "juin";
		} else if (stMonth == "07") {
			result = "juillet";
		} else if (stMonth == "08") {
			result = "août";
		} else if (stMonth == "09") {
			result = "septembre";
		} else if (stMonth == "10") {
			result = "octobre";
		} else if (stMonth == "11") {
			result = "novembre";
		} else if (stMonth == "02") {
			result = "décembre";
		}
		return result;
	},

	addDays : function(d, j) {
		return new Date(d.getTime() + (1000 * 60 * 60 * 24 * j));
	},

	getContentButtonsPanel : function(arrayItemsToShow) {
		var arrayItems = new Array();
		var nbElementsParLines = 3;

		for (var i = 0; i < arrayItemsToShow.length; i++) {
			// Si je suis sur un multiple de 3 je termine la ligne
			if (i / nbElementsParLines == Math.round(i / nbElementsParLines)) {
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

		return arrayItems;
	},
	/*
	 * Créer un lien verbeux vers une page de l'application.
	 * En paramètre l'identifiant :
	 * valeur autorisées : garbagePanel, mapPanel, informationsPanel,
	 * structuresPanel, reusesPanel, collectModsPanel, homeCollectsModsPanel,
	 * trisacsPanel, commentsPanel, aboutPanel
	 */
	makeTextLink : function(id) {
		var res = "";
		if (id == "garbagePanel") {
			res = "<br/>Voir les "
					+ this.makeLink(id) + " (recherche par texte ou image)";
		} else if (id == "mapPanel") {
			res = "<br/>Voir la localisation sur la " + this.makeLink(id);
		} else if (id == "informationsPanel") {
			res = "<br/>Voir les " + this.makeLink(id) + " sur la filière du tri.";
		} else if (id == "structuresPanel") {
			res = "<br/>Voir les adresses, horaires et déchets acceptés des " + this.makeLink(id);
		} else if (id == "reusesPanel") {
			res = "<br/>Voir les adresses, horaires et déchets acceptés des structures de " + this.makeLink(id);
		} else if (id == "collectModsPanel") {
			res = "<br/>Voir les jours de passage des collecte " + this.makeLink(id);
		} else if (id == "homeCollectsModsPanel") {
			res = "<br/>Voir les collectes " + this.makeLink(id);
		} else if (id == "trisacsPanel") {
			res = "<br/>Voir les lieux et horaires des distributions de " + this.makeLink(id);
		} else if (id == "commentsPanel") {
			res = "<br/> " + this.makeLink(id);
		} else if (id == "aboutPanel") {
			res = "<br/>Voir plus d'infos dans " + this.makeLink(id); 
		}
		return res;

	},
	/*
	 * Créer un lien vers une page de l'application.
	 * En paramètre l'identifiant :
	 * valeur autorisées : garbagePanel, mapPanel, informationsPanel,
	 * structuresPanel, reusesPanel, collectModsPanel, homeCollectsModsPanel,
	 * trisacsPanel, commentsPanel, aboutPanel
	 */
	makeLink : function(id) {
		var res = "";
		var st1 = "<a href='#' onClick='Javascript:";
		var st2 = "' >";
		var st3 = "</a>";

		if (id == "garbagePanel") {
			res = st1 + "showGarbagePanel()" + st2 + "Déchets" + st3;
		} else if (id == "mapPanel") {
			res = st1 + "showMapPanel()" + st2 + "Carte" + st3;
		} else if (id == "informationsPanel") {
			res = st1 + "showInformationsPanel()" + st2 + "Informations" + st3;
		} else if (id == "structuresPanel") {
			res = st1 + "showStructuresPanel()" + st2 + "Structures" + st3;
		} else if (id == "reusesPanel") {
			res = st1 + "showReusesPanel()" + st2 + "Réemploi" + st3;
		} else if (id == "collectModsPanel") {
			res = st1 + "showCollectModsPanel()" + st2 + "Modes de collectes"
					+ st3;
		} else if (id == "homeCollectsModsPanel") {
			res = st1 + "showHomeCollectsModsPanel()" + st2 + "A domicile"
					+ st3;
		} else if (id == "trisacsPanel") {
			res = st1 + "showTrisacsPanel()" + st2 + "Trisac" + st3;
		} else if (id == "commentsPanel") {
			res = st1 + "showCommentsPanel()" + st2 + "Commentaires" + st3;
		} else if (id == "aboutPanel") {
			res = st1 + "showAboutPanel()" + st2 + "A propos" + st3;
		}
		return res;
	}
});

function showGarbagePanel() {
	Ext.getCmp("mainView").setActiveItem(0);
};
function showMapPanel() {
	Ext.getCmp("mainView").setActiveItem(1);
};
function showInformationsPanel() {
	Ext.getCmp("mainView").setActiveItem(2);
};
function showStructuresPanel() {
	Ext.getCmp("mainView").setActiveItem(3);
};
function showReusesPanel() {
	Ext.getCmp("mainView").setActiveItem(4);
};
function showCollectModsPanel() {
	Ext.getCmp("mainView").setActiveItem(6);
};
function showHomeCollectsModsPanel() {
	Ext.getCmp("mainView").setActiveItem(7);
};
function showTrisacsPanel() {
	Ext.getCmp("mainView").setActiveItem(8);
};
function showCommentsPanel() {
	Ext.getCmp("mainView").setActiveItem(9);
};
function showAboutPanel() {
	Ext.getCmp("mainView").setActiveItem(9);
};