/**
 * Controleur de la partie Structures
 */
Ext.define("VivreANantes.controller.AbstractStructuresController", {
	extend : "VivreANantes.controller.AbstractController"

	,
	config : {
/*
 * refs : { structuresView : "structuresView_xtype", structuresList :
 * "structuresList_xtype", structuresDetail : "structuresDetails_xtype",
 * structuresForm : "structuresForm_xtype", structuresFormSelectQuartier :
 * "#structuresFormSelectQuartier", structuresFormSelectType :
 * "#structuresFormSelectType", structuresButtons : "#structuresButtons" },
 * control : {
 * 
 * structuresDetail : { updatedata : "onUpdateDataDetail" },
 * 
 * structuresList : { initialize : "onInitStructures", itemtap :
 * "showStructuresDetail", refresh : "onListRefresh" },
 * 
 * structuresView : {} , structuresFormSelectQuartier : { change :
 * "onStructuresStoreFilter" } , structuresFormSelectType : { change :
 * "onStructuresStoreFilter" } , structuresButtons : { toggle :
 * "onStructuresStoreFilter" } }
 */
}

	,
	calculateDatas : function(store) {
		// var dataResult = new Array();
		var datas = store.getData();
		var dataLength = datas.length;
		if (dataLength > 0 && datas.items[0].data["type"] != null) {
			/*
			 * if (datas.items[0].data["plagesHoraires"].substring(0,1)==="" //
			 * Et si je n'ai pas encore été initialisé ||
			 * datas.items[0].data["plagesHoraires"].substring(0,1)!=="-") {
			 */
			// On ajoute les éléments (1 par jour)
			for (var i = 0; i < dataLength; i++) {
				var arNewItem = this.getPlageHoraire(datas.items[i]);
				store.add(arNewItem);
			}
			// On supprime les anciens éléments
			for (var i = 0; i < dataLength; i++) {
				store.removeAt(0);
			}
			/* } */
		}
		return store;
	}

	,
	showStructuresDetail : function(list, index, node, record) {
		var stLocale = "fr";
		if (record) {
			if (!this.structuresDetail) {
				this.structuresDetail = Ext
						.create("VivreANantes.view.structures.StructuresDetails");

				// description_fr
				var description_fr = "";
				if (record.data["description_fr"] !== "") {
					description_fr = record.data["description_fr"] + "<br/><br/>";
				}		
				// calcule la chaîne correspondant aux commentaires
				var faqTraduit = this.getApplication()
						.getController("VivreANantes.controller.CommentsController")
						.getCommentString(record.data["code"]);
				// calcule la chaîne correspondant aux conseils
				var conseils = "";
				if (record.data["conseils"] !== "") {
					conseils = record.data["conseils"] + ",";
				}
				conseilTraduit = this.getApplication()
						.getController("VivreANantes.controller.GarbagesController")
						.getAdviceString(conseils);
				// fabrique la chaîne affichée sur la page détail
				this.structuresDetail.setTpl("<div>"
						// this.structuresDetail.setHtml("<div>"
						+ this.translate("label_structure_template_detail",
								stLocale) + description_fr + conseilTraduit + faqTraduit
						+ "</div>");
				this.structuresDetail.setTitle(record.data["libelle"]);
			}

			console.log(record.data);

			console.log(this.structuresDetail);
			// Bind the record onto the show contact view
			this.structuresDetail.setData(record.data);
			// Push this view into the navigation view
			this.getStructuresView().push(this.structuresDetail);
		}
	},

	/*
	 * filterElements : function() {
	 * 
	 * var selectQuartier = this.getStructuresFormSelectQuartier(); var
	 * selectType = this.getStructuresFormSelectType(); var delay =
	 * this.getStructuresButtons().getPressedButtons()[0] .getText();
	 * 
	 * var store = this.getStructuresList().getStore(); store.clearFilter();
	 * 
	 * var filterElements = Ext.create("Ext.util.Filter", { filterFn :
	 * function(item) { var escaperegex = Ext.String.escapeRegex; var
	 * stQuartierRegexp = new RegExp(selectQuartier.getValue()); var
	 * stTypeRegexp = new RegExp(selectType.getValue()); var stQuartier =
	 * item.data["quartier"]; var stType = item.data["modesCollecte"]; return
	 * ((selectQuartier.getValue() === "all" || stQuartierRegexp
	 * .test(stQuartier)) && (selectType.getValue() === "all" || stTypeRegexp
	 * .test(stType))); } }); store.filter(filterElements); },
	 */

	// ///////////////////////////////////////////////////////////////////////////////
	/*
	 * Renvoie les horaires (ou complete ceux existant) horaires "de 14h30 à
	 * 19h00", debut "Tue Jan 01 2013 00:00:00 GMT+0100 (Paris, Madrid)"
	 * horaires "de 14h30 à 19h00 et de 14h30 à 19h00"
	 */
	getAttributes_HoursFromToAsTextAndDaysFromToAsTextAttribute : function(
			arPlagesHoraires, dateDebut, dateFin, heureDebut, heureFin,
			stLocale) {

		var stSchedule;

		var stLabelDe = this.translate("label_de", stLocale);
		var stLabelH = this.translate("label_h", stLocale);
		var stLabelA = this.translate("label_a", stLocale);
		var stLabelEt = this.translate("label_et", stLocale);

		if (heureDebut != null) {
			var heuresDebutInt = parseInt(heureDebut.substring(0, 2));
			var minutesDebut = heureDebut.substring(3, 5);
		}
		if (heureFin != null) {
			var heuresFinInt = parseInt(heureFin.substring(0, 2));
			var minutesFin = heureFin.substring(3, 5);
		}
		var stHoraires = stLabelDe + " " + heuresDebutInt + stLabelH
				+ minutesDebut + " " + stLabelA + " " + heuresFinInt + stLabelH
				+ minutesFin;
		var estPresent = false;
		for (var i = 0; i < arPlagesHoraires.length; i++) {
			if (arPlagesHoraires[i]["dateDebut"].toString() === dateDebut
					.toString()
					&& arPlagesHoraires[i]["dateFin"].toString() === dateFin
							.toString()) {
				// On complète les horaires
				stSchedule = arPlagesHoraires[i]["schedule"] + " " + stLabelEt
						+ " " + stHoraires;
				estPresent = true;
			}
		}
		if (estPresent === false) {
			// On ajoute l"horaire
			stSchedule = stHoraires;
		}
		return stSchedule;
	}

	,
	getPlageHoraire : function(objStructures) {

		// var strName = objStructures.get("libelle");
		// var strType = objStructures.get("type");
		// var strAdresse = objStructures.get("adresseTemp");
		// var strConseils = objStructures.get("conseils");
		var arNewAttributes = this
				.getAttributes_FillPeriod(objStructures, "fr");

		return {
			"libelle" : objStructures.get("libelle"),
			"description_fr" : objStructures.get("description_fr"),
			"type" : objStructures.get("type"),
			"modesCollecte" : objStructures.get("modesCollecte"),
			"sousModesCollecte" : objStructures.get("sousModesCollecte"),
			"adresseTemp" : objStructures.get("adresseTemp"),
			"quartier" : objStructures.get("quartier"),
			"conseils" : objStructures.get("conseils"),
			"plagesHoraires" : objStructures.get("plagesHoraires"),
			"plagesHoraires2" : arNewAttributes["plagesHoraires"],
			"horaires" : objStructures.get("horaires"),
			"ouvertAujourdhuiEtDemain" : arNewAttributes["ouvertAujourdhuiEtDemain"]
		};
	},

	getDaysOfWeekString : function(strsDaysOfWeek) {

		var result = "";
		// 2. Si pas lu-ma, ma-me, me-je, je-ve, ve-sa, sa-di, on met de
		// "du...au"
		if (strsDaysOfWeek.length == 5) {
			var dayOfWeekStart = strsDaysOfWeek.substring(0, 2);
			var dayOfWeekEnd = strsDaysOfWeek.substring(3, 5);
			if (strsDaysOfWeek != "lu-ma" && strsDaysOfWeek != "ma-me"
					&& strsDaysOfWeek != "me-je" && strsDaysOfWeek != "je-ve"
					&& strsDaysOfWeek != "ve-sa" && strsDaysOfWeek != "sa-di") {
				result = "du " + this.getDayString(dayOfWeekStart, 1) + " au "
						+ this.getDayString(dayOfWeekEnd, 1);
			} else {
				result = this.getDayString(dayOfWeekStart, 1) + " et "
						+ this.getDayString(dayOfWeekEnd, 1);
			}
		} else {
			var posFirstNumber = this
					.utilPosFirstNumberInString(strsDaysOfWeek);
			if (posFirstNumber != -1) {
				strsDaysOfWeek = strsDaysOfWeek.substring(0, posFirstNumber);
			}
			var arDays = strsDaysOfWeek.split("-");
			for (var i = 0; i < arDays.length; i++) {
				var day = arDays[i];
				result += this.getDayString(day, i);
				if (i != (arDays.length - 1)) {
					result += ", ";
				}
			}
		}
		return result;
	},

	getDayString : function(strDay, firstLetterInUpper) {
		result = strDay;
		if (strDay == "lu") {
			result = "lundi"
		} else if (strDay == "ma") {
			result = "mardi"
		} else if (strDay == "me") {
			result = "mercredi"
		} else if (strDay == "je") {
			result = "jeudi"
		} else if (strDay == "ve") {
			result = "vendredi"
		} else if (strDay == "sa") {
			result = "samedi"
		} else if (strDay == "di") {
			result = "dimanche"
		}
		if (firstLetterInUpper == 0) {
			result = result.substring(0, 1).toUpperCase() + result.substring(1);
		}
		return result;
	}

	,
	getAttributes_FillPeriod : function(objStructures, stLocale) {
		var stPlagesHoraire = objStructures.get("plagesHoraires");

		var bOuvertAujourdhui = false;
		var bOuvertDemain = false;

		var stTodayFerieSpecialDay = this.getTodaySpecialDay();
		var stTomorrowSpecialDay = this.getTomorrowSpecialDay();
		// var stOuvertAujourdhui = "<FONT COLOR=red>Ouvert aujourd'hui</FONT>";
		// var stOuvertDemain = "<FONT COLOR=red>Ouvert demain</FONT>";
		// var stOuvertAujourdhui = "Ouvert aujourd'hui";
		// var stOuvertDemain = "Ouvert demain";

		// Ce qui sera ajouté à l"objet Structures
		var arNewAttributes = Array();
		if (stPlagesHoraire != null && stPlagesHoraire != "") {

			// Split la chaîne de caractère "plagesHoraires" pour fabriquer le
			// tableau des plages horaires
			var arPlagesHoraires = stPlagesHoraire.split(",");

			// Récupère le contenu de la zône des jours fériés
			var specialDayZone = "";
			for (var i = 0; i < arPlagesHoraires.length; i++) {
				var plageHoraire = arPlagesHoraires[i];
				if (plageHoraire.substring(0, 5) == "sauf_") {
					specialDayZone = plageHoraire;
				}
			}
			// var specialDayZone =
			// this.utilArrayContainObject(arPlagesHoraires,this.SAUF_FERIE);

			// Parcours le tableau des plages horaires pour obtenir plusieurs
			// évènements
			for (var i = 0; i < arPlagesHoraires.length; i++) {
				var plageHoraire = arPlagesHoraires[i];
				// On traite hors zone Jour ferie et si il y a des données
				if (plageHoraire != specialDayZone && plageHoraire.length > 0) {
					var indexSeparator1 = plageHoraire.indexOf("_", 0);
					var indexSeparator2 = plageHoraire.indexOf("_",
							indexSeparator1 + 1);
					var indexSeparator3 = plageHoraire.indexOf("_",
							indexSeparator3 + 1);
					var timeZones = this
							.getTimeZone_JourDebutMoisDebutJourFinMoisFin(plageHoraire);
					var jourDebutJJ = timeZones.jourDebutJJ;
					var moisDebutMM = timeZones.moisDebutMM;
					var jourFinJJ = timeZones.jourFinJJ;
					var moisFinMM = timeZones.moisFinMM;
					var jourDebut = timeZones.jourDebut;
					var moisDebut = timeZones.moisDebut;
					var jourFin = timeZones.jourFin;
					var moisFin = timeZones.moisFin;
					var currentYearAAAA = this.utilGetStringCurrentYearAAAA();
					// daysOfWeekZone vaut me120613 ou lu-ma
					var daysOfWeekZone = plageHoraire.substring(indexSeparator1
									+ 1, indexSeparator2);
					var timeZone = plageHoraire.substring(indexSeparator2 + 1);
					var indexFinHeure = timeZone.indexOf("-", 0);
					var heureDebutHHDeuxPointsMM = timeZone.substring(0,
							indexFinHeure);
					var heureFinHHDeuxPointsMM = timeZone
							.substring(indexFinHeure + 1);
					// En javascript on met "0" pour le premier mois (donc on
					// fait "-1")
					var dateDebut = new Date(currentYearAAAA, moisDebut - 1,
							jourDebut);
					// En javascript on met "0" pour le premier mois (donc on
					// fait "-1")
					var dateFin = new Date(currentYearAAAA, moisFin - 1,
							jourFin);
					var stSchedule = this
							.getAttributes_HoursFromToAsTextAndDaysFromToAsTextAttribute(
									arNewAttributes, dateDebut, dateFin,
									heureDebutHHDeuxPointsMM,
									heureFinHHDeuxPointsMM, stLocale);
					var fromToAttribute = this.getAttribute_FromTo(jourDebutJJ,
							moisDebutMM, jourFinJJ, moisFinMM, true,
							daysOfWeekZone, 3, stLocale);

					// -- verifie si
					var obAujoudhuiDemain = this.verifieOuvertAujourdhuiDemain(
							stTodayFerieSpecialDay, stTomorrowSpecialDay,
							dateDebut, dateFin, daysOfWeekZone, specialDayZone);
					if (obAujoudhuiDemain["bOuvertAujourdhui"] == true) {
						bOuvertAujourdhui = true;
					}
					if (obAujoudhuiDemain["bOuvertDemain"] == true) {
						bOuvertDemain = true;
					}
					// -- on regroupe par journee
					var isPresent = false;
					for (var j = 0; j < arNewAttributes.length; j++) {
						if (arNewAttributes[j]["jourDebutJJ"] == jourDebutJJ
								&& arNewAttributes[j]["moisDebutMM"] == moisDebutMM
								&& arNewAttributes[j]["jourFinJJ"] == jourFinJJ
								&& arNewAttributes[j]["moisFinMM"] == moisFinMM) {
							isPresent = true;
						}
					}
					if (isPresent == false) {
						// on ajoute
						arNewAttributes.push({
									"fromTo" : fromToAttribute,
									"jourDebutJJ" : jourDebutJJ,
									"moisDebutMM" : moisDebutMM,
									"jourFinJJ" : jourFinJJ,
									"moisFinMM" : moisFinMM,
									"schedule" : stSchedule,
									"fromTo" : fromToAttribute,
									"dateDebut" : dateDebut,
									"dateFin" : dateFin
								});
					}
				}
			}
			var stplagesHoraires = "";
			// var period = this.getAttribute_FromTo(jourDebut, moisDebut,
			// jourFin, moisFin, allDays, daysOfWeekZone,
			// deleteBetweenActualDay);
			// Parcours tous les évènements obtenus
			for (var i = 0; i < arNewAttributes.length; i++) {
				stplagesHoraires = stplagesHoraires + "- "
						+ arNewAttributes[i]["fromTo"] + " "
						+ arNewAttributes[i]["schedule"] + "<br/>";

			}
			if (specialDayZone != "") {
				stplagesHoraires = stplagesHoraires + "- "
						+ this.translate("label_sauf_ferie", stLocale);
			}
		}

		if (bOuvertAujourdhui == true && bOuvertDemain == true) {
			var stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>Ouvert aujourd'hui et demain</FONT>"
		} else if (bOuvertAujourdhui == true && bOuvertDemain == false) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>Ouvert aujourd'hui</FONT>"
		} else if (bOuvertAujourdhui == false && bOuvertDemain == true) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>Ouvert demain</FONT>"
		} else {
			var stOuvertAujourdhuiEtDemain = " ";
		}
		// ajout des attributs à l"objet
		return {
			"plagesHoraires" : stplagesHoraires,
			"ouvertAujourdhuiEtDemain" : stOuvertAujourdhuiEtDemain,
			"periods" : arNewAttributes
		};
	}

	,
	getTimeZone_JourDebutMoisDebutJourFinMoisFin : function(plageHoraire) {
		var index1 = plageHoraire.indexOf("_", 0);
		if (index1 == 9) {
			// On est sur une plage horaire
			var periodZone = plageHoraire.substring(0, index1);
			var indexFinHeure = periodZone.indexOf("-", 0);
			var strDateDebut = periodZone.substring(0, indexFinHeure);
			var jourDebutJJ = strDateDebut.substring(0, 2);
			var moisDebutMM = strDateDebut.substring(2, 4);
			var strDateFin = periodZone.substring(indexFinHeure + 1);
			var jourFinJJ = strDateFin.substring(0, 2);
			var moisFinMM = strDateFin.substring(2, 4);
		} else if (index1 == 6) {
			// On est dans le cas d"une dare précise
			var stDate = plageHoraire.substring(0, index1);
			if (stDate.length === 6) {
				var jourDebutJJ = stDate.substring(0, 2);
				var moisDebutMM = stDate.substring(2, 4);
				var jourFinJJ = jourDebutJJ;
				var moisFinMM = moisDebutMM;
			} else if (stDate.length === 9) {
				var jourDebutJJ = stDate.substring(0, 2);
				var moisDebutMM = stDate.substring(2, 4);
				var jourFinJJ = stDate.substring(5, 7);
				var moisFinMM = stDate.substring(7, 9);
			}
		}
		var jourDebut = parseInt(jourDebutJJ);
		var moisDebut = parseInt(moisDebutMM);
		var jourFin = parseInt(jourFinJJ);
		var moisFin = parseInt(moisFinMM);

		return {
			"jourDebut" : jourDebut,
			"moisDebut" : moisDebut,
			"jourFin" : jourFin,
			"moisFin" : moisFin,
			"jourDebutJJ" : jourDebutJJ,
			"moisDebutMM" : moisDebutMM,
			"jourFinJJ" : jourFinJJ,
			"moisFinMM" : moisFinMM
		};
	}

	/*
	 * exemple "Le Mercredi 15 janvier"
	 */
	,
	getAttribute_FromTo : function(jourDebut, moisDebut, jourFin, moisFin,
			allDays, daysOfWeekZone, deleteBetweenActualDay, stLocale) {
		var result = "";
		var stLabelDu = this.translate("label_du", stLocale);
		var stLabelLe = this.translate("label_le", stLocale);
		var stLabelTouteLAnnee = this.translate("label_toutelannee", stLocale);
		var stLabelAu = this.translate("label_au", stLocale);

		var stDays = this.getDaysOfWeekString(daysOfWeekZone);
		if (allDays == true) {
			if (jourDebut == "01" && moisDebut == "01" && jourFin == "31"
					&& moisFin == "12") {
				result = stLabelTouteLAnnee + " (" + stDays + ")";
			} else if (jourDebut == jourFin && moisDebut == moisFin) {
				result = stLabelLe + " " + stDays + " " + jourDebut + " "
						+ this.convertDayNumberToString(moisDebut, stLocale);
			} else {
				result = stLabelDu + " " + jourDebut + " "
						+ this.convertDayNumberToString(moisDebut, stLocale)
						+ " " + stLabelAu + " " + jourFin + " "
						+ this.convertDayNumberToString(moisFin, stLocale)
						+ " " + stDays;
			}
		}
		return result;
	}

	,
	verifieOuvertAujourdhuiDemain : function(stTodayFerieSpecialDay,
			stTomorrowSpecialDay, dateDebut, dateFin, daysOfWeekZone,
			specialDayZone) {

		var today = this.utilGetDateTodayWithoutSeconds();
		var todayTwoDays = this.utilGetDayOfWeekTwoCharacters(today);
		var tomorrow = this.utilGetDateTomorrowWithoutSeconds();
		var tomorrowTwoDays = this.utilGetDayOfWeekTwoCharacters(tomorrow);
		var bOuvertAujourdhui = false;
		var bOuvertDemain = false;

		// var annee = this.utilGetStringCurrentYearAAAA();
		var arDays = daysOfWeekZone.split("-");

		// var dateDebut = new Date(annee, moisDebut - 1, jourDebut);
		// var dateFin = new Date(annee, moisFin - 1, jourFin);

		if (today >= dateDebut && today <= dateFin
				&& this.utilArrayContainObject(arDays, todayTwoDays)) {
			bOuvertAujourdhui = true;
		}

		if (tomorrow >= dateDebut && tomorrow <= dateFin
				&& this.utilArrayContainObject(arDays, tomorrowTwoDays)) {
			bOuvertDemain = true;
		}
		// 3 - Vérif les jours fériés
		if (this.verifSpecialDay(stTodayFerieSpecialDay, specialDayZone)) {
			bOuvertAujourdhui = false;
		}
		if (this.verifSpecialDay(stTomorrowSpecialDay, specialDayZone)) {
			bOuvertDemain = false;
		}

		return {
			"bOuvertAujourdhui" : bOuvertAujourdhui,
			"bOuvertDemain" : bOuvertDemain
		}
	},

	/*
	 * Vérifie si un jour est parmi les jours fériés.
	 */
	verifSpecialDay : function(stSpecialDay, specialDayZone) {
		var result = false;

		// Si le jour recherché est un jour férié
		if (stSpecialDay != "") {
			// Je transforme la zone des jours fériés, puis je recherche mon
			// jour
			var arSpecialDays = specialDayZone.split("-");
			if (specialDayZone == "sauf_ferie") {
				result = true;
			} else if (this.utilArrayContainObject(arSpecialDays, stSpecialDay)) {
				result = true;
			}
		}
		return result;
	},

	getTodaySpecialDay : function() {
		var today = this.utilGetDateTodayWithoutSeconds();
		return this.getSpecialDay(today);
	},

	getTomorrowSpecialDay : function() {
		var tomorrow = this.utilGetDateTomorrowWithoutSeconds();
		return this.getSpecialDay(tomorrow);
	},

	SAUF_FERIE : "sauf_ferie",
	FERIE_SAINT_SYLVESTRE : "sauf_saint_sylvestre",
	FERIE_PAQUES : "sauf_paques",
	FERIE_FETE_TRAVAIL : "sauf_fete_travail",
	FERIE_8_MAI : "sauf_8_mai",
	FERIE_ASCENSION : "sauf_ascenscion",
	FERIE_PENTECOTE : "sauf_pentecote",
	FERIE_FETE_NATIONALE : "sauf_fete_nationale",
	FERIE_ASSOMPTION : "sauf_assomption",
	FERIE_LA_TOUSSAINT : "sauf_la_toussaint",
	FERIE_ARMISTICE : "sauf_armistice",
	FERIE_NOEL : "sauf_noel",

	/**
	 * Renvoie une chaine correspondant au nom du jour ferie de la date fournie.
	 * Exemple : la date "01/01/2014" renvoie "sauf_saint_sylvestre"
	 */
	getSpecialDay : function(date) {

		var jourDateJJ = date.getDate();
		// on ajoute le "0" pour avoir "01"
		if (jourDateJJ < 10) {
			jourDateJJ = "0" + jourDateJJ;
		} else {
			jourDateJJ = "" + jourDateJJ;
		}
		// on ajoute le "0" pour avoir "01"
		var moisDateMM = date.getMonth() + 1;
		if (moisDateMM < 10) {
			moisDateMM = "0" + moisDateMM;
		} else {
			moisDateMM = "" + moisDateMM;
		}
		var yearDateYY = (date.getFullYear() + "").substring(2, 4);
		var dayString = "" + jourDateJJ + moisDateMM + yearDateYY;

		var arraySaintSylvestre = new Array("010113", "010114", "010115", //
				"010116", "010117", "010118");
		var arrayPaques = new Array("010413", "210414", "060415", //
				"280316", "160417", "010418");
		var arrayFeteTravail = new Array("010513", "010514", "010515", //
				"010516", "010517", "010518");
		var array8mai = new Array("080513", "080514", "080515", //
				"080516", "080517", "080518");
		var arrayAscension = new Array("090513", "290514", "140515", //
				"050516", "250517", "100518");
		var arrayPentecote = new Array("200513", "090614", "250515", //
				"160516", "050617", "210518");
		var arrayFeteNationale = new Array("140713", "140714", "140715", //
				"140716", "140717", "140718");
		var arrayAssomption = new Array("150813", "150814", "150815", //
				"150816", "150817", "150818");
		var arrayLaToussaint = new Array("011113", "011114", "011115", //
				"011116", "011117", "011118");
		var arrayArmistice = new Array("111113", "111114", "111115", //
				"111116", "111117", "111118");
		var arrayNoel = new Array("251213", "251214", "251215", //
				"251216", "251217", "251218");

		// TODO Test : à supprimer
		if (dayString == "230513") {
			return this.FERIE_PAQUES;
		}
		if (this.utilArrayContainObject(arraySaintSylvestre, dayString)) {
			return this.FERIE_SAINT_SYLVESTRE;
		} else if (this.utilArrayContainObject(arrayPaques, dayString)) {
			return this.FERIE_PAQUES;
		} else if (this.utilArrayContainObject(arrayFeteTravail, dayString)) {
			return this.FERIE_FETE_TRAVAIL;
		} else if (this.utilArrayContainObject(array8mai, dayString)) {
			return this.FERIE_8_MAI;
		} else if (this.utilArrayContainObject(arrayAscension, dayString)) {
			return this.FERIE_ASCENSION;
		} else if (this.utilArrayContainObject(arrayPentecote, dayString)) {
			return this.FERIE_PENTECOTE;
		} else if (this.utilArrayContainObject(arrayFeteNationale, dayString)) {
			return this.FERIE_FETE_NATIONALE;
		} else if (this.utilArrayContainObject(arrayAssomption, dayString)) {
			return this.FERIE_ASSOMPTION;
		} else if (this.utilArrayContainObject(arrayLaToussaint, dayString)) {
			return this.FERIE_LA_TOUSSAINT;
		} else if (this.utilArrayContainObject(arrayArmistice, dayString)) {
			return this.FERIE_ARMISTICE;
		} else if (this.utilArrayContainObject(arrayNoel, dayString)) {
			return this.FERIE_NOEL;
		} else {
			return "";
		}
	}

});