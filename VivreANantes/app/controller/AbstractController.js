
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
	 * Met la première lettre en majuscule
	 */
	stringUpperFirstLetter : function(result) {
		if (result != null && result.length > 1) {
			result = result.substring(0, 1).toUpperCase() + result.substring(1);
		}
		return result;
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
			"label_Conseil" : {
				"en" : "Advise",
				"fr" : "Conseil"
			},
			"label_recyclable" : {
				"en" : "recycling",
				"fr" : "recyclable"
			},
			"label_ou" : {
				"en" : "or",
				"fr" : "ou"
			},
			"label_pour_collecte_bac_jaune" : {
				"en" : "only for yellow bacs",
				"fr" : "pour les bacs jaunes"
			},
			"label_OUI" : {
				"en" : "YES",
				"fr" : "OUI"
			},
			"label_NON" : {
				"en" : "NO",
				"fr" : "NON"
			},
			"label_pas_poubelle" : {
				"en" : ", nut do not put on the trash",
				"fr" : ", mais ne pas mettre à la poubelle"
			},
			"label_comment" : {
				"en" : "Comment",
				"fr" : "Commentez"
			},
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
			"label_de" : {
				"en" : "of",
				"fr" : "de"
			},
			"label_modco_contmpb" : {
				"en" : "",
				"fr" : "Conteneur métal / plastique / brique"
			},
			"label_modco_contpapiercarton" : {
				"en" : "",
				"fr" : "Conteneur papier-carton"
			},
			"label_modco_contverre" : {
				"en" : "",
				"fr" : "Conteneur verre"
			},
			"label_modco_bacbleu" : {
				"en" : "",
				"fr" : "Bac bleu"
			},
			"label_modco_bacjaune" : {
				"en" : "",
				"fr" : "Bac jaune"
			},
			"label_modco_sacbleu" : {
				"en" : "",
				"fr" : "Sac bleu"
			},
			"label_modco_sacjaune" : {
				"en" : "",
				"fr" : "Sac jaune"
			},
			"label_modco_ecopoint" : {
				"en" : "",
				"fr" : "Ecopoint"
			},
			"label_modco_ecotox" : {
				"en" : "",
				"fr" : "Ecotox"
			},
			"label_modco_reemploi" : {
				"en" : "",
				"fr" : "Réeemploi"
			},
			"label_modco_pointsdevente" : {
				"en" : "",
				"fr" : "Points de vente"
			},
			"label_modco_decheterie" : {
				"en" : "",
				"fr" : "Décheteries"
			},
			"label_modco_compostage" : {
				"en" : "",
				"fr" : "Compostage"
			},
			"label_modco_encombrant" : {
				"en" : "",
				"fr" : "Encombrant"
			},
			"label_smco_conteneurlerelais" : {
				"en" : "",
				"fr" : "Conteneur Le Relais"
			},
			"label_smco_reempelectromenag" : {
				"en" : "",
				"fr" : "Réemploi électroménager"
			},
			"label_smco_reempcartouchetoner" : {
				"en" : "",
				"fr" : "Réemploi cartouches d'encres/tuners imprimantes"
			},
			"label_smco_reempjouet" : {
				"en" : "",
				"fr" : "Réemploi de jouets"
			},
			"label_smco_reempmeuble" : {
				"en" : "",
				"fr" : "Réemploi de meuble"
			},
			"smco_reempdivers" : {
				"en" : "",
				"fr" : "Réemploi divers"
			},
			"label_smco_reempinfo" : {
				"en" : "",
				"fr" : "Réemploi informatique"
			},
			"label_smco_vendeurvoiture" : {
				"en" : "",
				"fr" : "Vendeur et casse automobile"
			},
			"labelsmco_reempelectromenag" : {
				"en" : "",
				"fr" : "Réemploi appareils électroménager"
			},
			"label_smco_reemplivreCD" : {
				"en" : "",
				"fr" : "Réemploi des livres, CDs, BDs, DVDs..."
			},
			"label_smco_reempvet" : {
				"en" : "",
				"fr" : "Réemploi des vêtements"
			},
			"label_smco_reempdivers" : {
				"en" : "",
				"fr" : "Réemploi d'objets divers"
			},
			"label_smco_batiment" : {
				"en" : "",
				"fr" : ""
			},
			"label_smco_vaisselle" : {
				"en" : "",
				"fr" : "Réemploi de la vaisselle"
			},
			"label_smco_papier" : {
				"en" : "",
				"fr" : "Recyclage du papier par des associations."
			},
			"label_smco_plastique" : {
				"en" : "",
				"fr" : "Recyclage du plastique par des associations."
			},
			"label_smco_electrique" : {
				"en" : "",
				"fr" : "Recyclage du matériel électrique par des associations."
			},
			"label_smco_vendeurcartoucheencre" : {
				"en" : "",
				"fr" : "Vendeur de cartouche d'encre"
			},
			"label_smco_vendeurpile" : {
				"en" : "",
				"fr" : "Vendeur de pile"
			},
			"label_smco_reprise" : {
				"en" : "",
				"fr" : "La reprise par les magasins"
			},
			"label_smco_vendeur_lampe_eco" : {
				"en" : "",
				"fr" : "Vendeur lampe économie d'énergie"
			},
			"label_smco_vendeurvoiture" : {
				"en" : "",
				"fr" : "Vendeur et casse automobile"
			},
			"label_smco_recupsupermarche" : {
				"en" : "",
				"fr" : "Réemploi dans les supermarchés"
			},
			"label_smco_recupmagasinbrico" : {
				"en" : "",
				"fr" : "Réemploi dans les magasins de bricolage"
			},
			"label_smco_garage" : {
				"en" : "",
				"fr" : "Garage, stations services"
			},
			"label_smco_velo" : {
				"en" : "",
				"fr" : "Réemploi des vélos"
			},
			"label_smco_pharmacie" : {
				"en" : "",
				"fr" : "Pharmacie"
			},
			"label_cu_papierscartons" : {
				"en" : "",
				"fr" : "Papiers-cartons"
			},
			"label_cu_metal" : {
				"en" : "",
				"fr" : "Métal"
			},
			"label_cu_vertbois" : {
				"en" : "",
				"fr" : "Déchets verts / bois"
			},
			"label_cu_verrevaisselle" : {
				"en" : "",
				"fr" : "Verre / Vaisselle / Pots"
			},
			"label_cu_vetementtissu" : {
				"en" : "",
				"fr" : "Vêtements / tissu"
			},
			"label_cu_encombrant" : {
				"en" : "",
				"fr" : "Encombrants"
			},
			"label_cu_divers" : {
				"en" : "",
				"fr" : "Divers"
			},
			"label_cu_nourriture" : {
				"en" : "",
				"fr" : "Nourriture"
			},
			"label_cu_electronique" : {
				"en" : "",
				"fr" : "Électronique"
			},
			"label_cu_toxique" : {
				"en" : "",
				"fr" : "Toxique"
			},
			"label_scu_toxiquejardin" : {
				"en" : "",
				"fr" : "Jardin"
			},
			"label_scu_toxiquegarage" : {
				"en" : "",
				"fr" : "Garage"
			},
			"label_scu_toxiquecuisine" : {
				"en" : "",
				"fr" : "Cuisine"
			},
			"label_scu_toxiquesdb" : {
				"en" : "",
				"fr" : "Salle de bain"
			},
			"label_scu_toxiquebrico" : {
				"en" : "",
				"fr" : "Bricolage"
			},
			"label_scu_toxiqueparasite" : {
				"en" : "",
				"fr" : "Parasite"
			},
			"label_scu_toxiquedivers" : {
				"en" : "",
				"fr" : "Divers"
			},
			"label_concerne_aussi" : {
				"en" : "Also concern",
				"fr" : "Concerne aussi"
			},
			"label_resultat_recherche" : {
				"en" : "Search result",
				"fr" : "Résultat de la recherche"
			},
			"label_structure_template_detail" : {
				"en" : "Type : {type} - {soustype} <BR/>{description_fr} <BR/>Schedules : {plagesHoraires2} {ouvertAujourdhuiEtDemain} <BR/>Address : {adresseTemp} '+ ' <BR/>Phone : {telephoneTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}",
				"fr" : "Type : {type} - {soustype} <BR/>{description_fr} <BR/><BR/>Horaires : {plagesHoraires2} {ouvertAujourdhuiEtDemain} <BR/>Adresse : {adresseTemp} '+ ' <BR/>Téléphone : {telephoneTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}"
			},
			"label_trisac_template_detail" : {
				"en" : "{description_fr} <BR/>Schedules : {horaires} {ouvertAujourdhuiEtDemain} <BR/>Address : {adresseTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}",
				"fr" : "{description_fr} <BR/>Horaires : {horaires} {ouvertAujourdhuiEtDemain} <BR/>Adresse : {adresseTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}"
			}

		};
		if (map[stKey] == null) {
			result = stKey;
		} else if (stLocale == "en" && map[stKey]["en"] != null) {
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
		var nbElementsParLines = 4;

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
	 * Créer un lien verbeux vers une page de l'application. En paramètre
	 * l'identifiant : valeur autorisées : garbagePanel, mapPanel,
	 * informationsPanel, structuresPanel, reusesPanel, collectModsPanel,
	 * homeCollectsModsPanel, trisacsPanel, commentsPanel, aboutPanel
	 */
	makeTextLink : function(id) {
		var res = "";
		if (id == "garbagePanel") {
			res = "<br/>Voir les " + this.makeLink(id)
					+ " (recherche par texte ou image)";
		} else if (id == "mapPanel") {
			res = "<br/>Voir la localisation sur la " + this.makeLink(id);
		} else if (id == "informationsPanel") {
			res = "<br/>Voir les " + this.makeLink(id)
					+ " sur la filière du tri.";
		} else if (id == "structuresPanel") {
			res = "<br/>Voir les adresses, horaires et déchets acceptés des "
					+ this.makeLink(id);
		} else if (id == "reusesPanel") {
			res = "<br/>Voir les adresses, horaires et déchets acceptés des structures de "
					+ this.makeLink(id);
		} else if (id == "collectModsPanel") {
			res = "<br/>Voir les jours de passage des collecte "
					+ this.makeLink(id);
		} else if (id == "homeCollectsModsPanel") {
			res = "<br/>Voir les collectes " + this.makeLink(id);
		} else if (id == "trisacsPanel") {
			res = "<br/>Voir les lieux et horaires des distributions de "
					+ this.makeLink(id);
		} else if (id == "commentsPanel") {
			res = "<br/> " + this.makeLink(id);
		} else if (id == "aboutPanel") {
			res = "<br/>Voir plus d'infos dans " + this.makeLink(id);
		}
		return res;

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
	 * Créer la chaine de caractère d'envoie de mail.
	 * 
	 * @param {}
	 *            id
	 * @return {}
	 */
	makeSendLink : function(id) {
		return "<a href='#' onClick='Javascript:sendMail(id)'>"
				+ this.translate("label_comment") + "</a>";
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