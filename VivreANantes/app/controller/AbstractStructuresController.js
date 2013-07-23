/**
 * Controleur de la partie Structures
 */
Ext.define("VivreANantes.controller.AbstractStructuresController", {
	extend : "VivreANantes.controller.AbstractController",

	onTapLinkButton : function(button, e, eOpts) {
		this.manageLinkButtons(button._data["code"]);
	},
	
	
	calculateDatas : function(store) {
		var datas = store.getData();
		var dataLength = datas.length;
		if (dataLength > 0 && datas.items[0].data["type"] != null) {
			
			// On parcours tous les éléments pour valoriser "plagesHoraires_prochainsJours", "plagesHoraires_lisible" et "plagesHoraires_periodes"
			for (var i = 0; i < dataLength; i++) {
				this.fillAttributs_PlagesHoraires(datas.items[i]);
			}
		}
		return store;
	}

	,
	showStructuresDetail : function(list, index, node, record) {
		if (record) {
			if (!this.structuresDetail) {
				this.structuresDetail = Ext
						.create("VivreANantes.view.structures.StructuresDetails");
			}
			// Ajout de la description
			var descriptionTraduit = "";
			if (record.data["description_fr"] != null
					&& record.data["description_fr"] !== "") {
				descriptionTraduit = record.data["description_fr"]
						+ "<br/><br/>";
			}
			if (record.data["adresseTemp"] != null
					&& record.data["adresseTemp"] !== "") {
				var label = this.stringUpperFirstLetter(this
						.translate("label_adresse"));
				descriptionTraduit += label + " : "
						+ record.data["adresseTemp"] + "<br/><br/>";
			}
			if (record.data["numeroTemp"] != null
					&& record.data["numeroTemp"] !== "") {
				var label = this.stringUpperFirstLetter(this
						.translate("label_telephone"));
				descriptionTraduit += label + " : " + record.data["numeroTemp"]
						+ "<br/><br/>";
			}
			if (record.data["plagesHoraires_lisible"] != null
					&& record.data["plagesHoraires_lisible"] !== "") {
				var label = this.stringUpperFirstLetter(this
						.translate("label_horaires"));
				descriptionTraduit += label + " : "
						+ record.data["plagesHoraires_prochainsJours"] + "<br/>"
						+ record.data["plagesHoraires_lisible"] + "<br/><br/>";
			}
			if (record.data["src"] != null && record.data["src"] !== "") {
				// var label = this.stringUpperFirstLetter(this.translate("label_source"));
				descriptionTraduit += record.data["src"]
						+ "<br/><br/>";
			}
			this.setDataElement(this.structuresDetail,
					"structuresDetails_description", {
						'description' : descriptionTraduit
					})

			// Ajout des conseils
			var conseils = "";
			if (record.data["conseils"] !== "") {
				conseils = record.data["conseils"] + ",";
			}
			var arraysItemsAdvices = this.getItemsAdvices(conseils);
			this.setItemsElement(this.structuresDetail,
					"structuresDetails_advices", arraysItemsAdvices);

			// Affectation du titre
			var title = "<I>" + record.data["type"] + "</I>" + " "
					+ this.stringUpperFirstLetter(record.data["libelle"]);
			this.structuresDetail.setTitle(title);
			
			// Ajout des commentaires
			var code = record.data["code"];
			this.setItemsElement(this.structuresDetail,
					"structuresDetails_comments", this.getItemsComments(code, title));

			// Bind the record onto the show contact view
			this.structuresDetail.setData(record.data);
			// Push this view into the navigation view
			this.getStructuresView().push(this.structuresDetail);
		}
	},


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

		var stLabelDe = this.translate("label_de");
		var stLabelH = this.translate("label_h");
		var stLabelA = this.translate("label_a");
		var stLabelEt = this.translate("label_et");

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

	getDayString : function(strDay, firstLetterInUpper) {
		result = strDay;
		if (strDay == "lu") {
			result = "label_lundi"
		} else if (strDay == "ma") {
			result = "label_mardi"
		} else if (strDay == "me") {
			result = "label_mercredi"
		} else if (strDay == "je") {
			result = "label_jeudi"
		} else if (strDay == "ve") {
			result = "label_vendredi"
		} else if (strDay == "sa") {
			result = "label_samedi"
		} else if (strDay == "di") {
			result = "label_dimanche"
		}
		result = this.translate(result);
		if (firstLetterInUpper == 0) {
			this.stringUpperFirstLetter(result);
		}
		return result;
	}

	,
	fillAttributs_PlagesHoraires : function(objStructures) {
		var stPlagesHoraire = objStructures.get("plagesHoraires");

		var bOuvertAujourdhui = false;
		var bOuvertDemain = false;

		var stTodayFerieSpecialDay = this.getTodaySpecialDay();
		var stTomorrowSpecialDay = this.getTomorrowSpecialDay();


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
									heureFinHHDeuxPointsMM);
					var fromToAttribute = this.getAttribute_FromTo(jourDebutJJ,
							moisDebutMM, jourFinJJ, moisFinMM, true,
							daysOfWeekZone, 3);

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
			// Parcours tous les évènements obtenus
			for (var i = 0; i < arNewAttributes.length; i++) {
				stplagesHoraires = stplagesHoraires + "- "
						+ arNewAttributes[i]["fromTo"] + " "
						+ arNewAttributes[i]["schedule"] + "<br/>";

			}
			if (specialDayZone != "") {
				stplagesHoraires = stplagesHoraires + "- "
						+ this.translate("label_sauf_ferie");
			}
		}

		if (bOuvertAujourdhui == true && bOuvertDemain == true) {
			var stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>"
					+ this.translate("label_ouvert_aujourdhui_et_demain")
					+ "</FONT>"
		} else if (bOuvertAujourdhui == true && bOuvertDemain == false) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>"
					+ this.translate("label_ouvert_aujourdhui") + "</FONT>"
		} else if (bOuvertAujourdhui == false && bOuvertDemain == true) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR=red>"
					+ this.translate("label_ouvert_demain") + "</FONT>"
		} else {
			var stOuvertAujourdhuiEtDemain = " ";
		}
		
		objStructures.data["plagesHoraires_lisible"] = stplagesHoraires;
		objStructures.data["plagesHoraires_prochainsJours"] = stOuvertAujourdhuiEtDemain;
		objStructures.data["plagesHoraires_periodes"] = arNewAttributes;

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
			allDays, daysOfWeekZone, deleteBetweenActualDay) {
		var result = "";
		var stLabelDu = this.translate("label_du");
		var stLabelLe = this.translate("label_le");
		var stLabelTouteLAnnee = this.translate("label_toutelannee");
		var stLabelAu = this.translate("label_au");

		var stDays = this.getDaysOfWeekString(daysOfWeekZone);
		if (allDays == true) {
			if (jourDebut == "01" && moisDebut == "01" && jourFin == "31"
					&& moisFin == "12") {
				result = stLabelTouteLAnnee + " (" + stDays + ")";
			} else if (jourDebut == jourFin && moisDebut == moisFin) {
				result = stLabelLe + " " + stDays + " " + jourDebut + " "
						+ this.convertDayNumberToString(moisDebut);
			} else {
				result = stLabelDu + " " + jourDebut + " "
						+ this.convertDayNumberToString(moisDebut) + " "
						+ stLabelAu + " " + jourFin + " "
						+ this.convertDayNumberToString(moisFin) + " " + stDays;
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

	/*
	 * SAUF_FERIE : "sauf_ferie", FERIE_SAINT_SYLVESTRE :
	 * "sauf_saint_sylvestre", FERIE_PAQUES : "sauf_paques", FERIE_FETE_TRAVAIL :
	 * "sauf_fete_travail", FERIE_8_MAI : "sauf_8_mai", FERIE_ASCENSION :
	 * "sauf_ascenscion", FERIE_PENTECOTE : "sauf_pentecote",
	 * FERIE_FETE_NATIONALE : "sauf_fete_nationale", FERIE_ASSOMPTION :
	 * "sauf_assomption", FERIE_LA_TOUSSAINT : "sauf_la_toussaint",
	 * FERIE_ARMISTICE : "sauf_armistice", FERIE_NOEL : "sauf_noel",
	 */

	/**
	 * Renvoie une chaine correspondant au nom du jour ferie de la date fournie.
	 * Exemple : la date "01/01/2014" renvoie "sauf_saint_sylvestre"
	 */
	getSpecialDay : function(date) {

		return _getSpecialDay(date);
		/*
		 * var jourDateJJ = date.getDate(); // on ajoute le "0" pour avoir "01"
		 * if (jourDateJJ < 10) { jourDateJJ = "0" + jourDateJJ; } else {
		 * jourDateJJ = "" + jourDateJJ; } // on ajoute le "0" pour avoir "01"
		 * var moisDateMM = date.getMonth() + 1; if (moisDateMM < 10) {
		 * moisDateMM = "0" + moisDateMM; } else { moisDateMM = "" + moisDateMM; }
		 * var yearDateYY = (date.getFullYear() + "").substring(2, 4); var
		 * dayString = "" + jourDateJJ + moisDateMM + yearDateYY;
		 * 
		 * var arraySaintSylvestre = new Array("010113", "010114", "010115", //
		 * "010116", "010117", "010118"); var arrayPaques = new Array("010413",
		 * "210414", "060415", // "280316", "160417", "010418"); var
		 * arrayFeteTravail = new Array("010513", "010514", "010515", //
		 * "010516", "010517", "010518"); var array8mai = new Array("080513",
		 * "080514", "080515", // "080516", "080517", "080518"); var
		 * arrayAscension = new Array("090513", "290514", "140515", // "050516",
		 * "250517", "100518"); var arrayPentecote = new Array("200513",
		 * "090614", "250515", // "160516", "050617", "210518"); var
		 * arrayFeteNationale = new Array("140713", "140714", "140715", //
		 * "140716", "140717", "140718"); var arrayAssomption = new
		 * Array("150813", "150814", "150815", // "150816", "150817", "150818");
		 * var arrayLaToussaint = new Array("011113", "011114", "011115", //
		 * "011116", "011117", "011118"); var arrayArmistice = new
		 * Array("111113", "111114", "111115", // "111116", "111117", "111118");
		 * var arrayNoel = new Array("251213", "251214", "251215", // "251216",
		 * "251217", "251218");
		 * 
		 * if (this.utilArrayContainObject(arraySaintSylvestre, dayString)) {
		 * return this.FERIE_SAINT_SYLVESTRE; } else if
		 * (this.utilArrayContainObject(arrayPaques, dayString)) { return
		 * this.FERIE_PAQUES; } else if
		 * (this.utilArrayContainObject(arrayFeteTravail, dayString)) { return
		 * this.FERIE_FETE_TRAVAIL; } else if
		 * (this.utilArrayContainObject(array8mai, dayString)) { return
		 * this.FERIE_8_MAI; } else if
		 * (this.utilArrayContainObject(arrayAscension, dayString)) { return
		 * this.FERIE_ASCENSION; } else if
		 * (this.utilArrayContainObject(arrayPentecote, dayString)) { return
		 * this.FERIE_PENTECOTE; } else if
		 * (this.utilArrayContainObject(arrayFeteNationale, dayString)) { return
		 * this.FERIE_FETE_NATIONALE; } else if
		 * (this.utilArrayContainObject(arrayAssomption, dayString)) { return
		 * this.FERIE_ASSOMPTION; } else if
		 * (this.utilArrayContainObject(arrayLaToussaint, dayString)) { return
		 * this.FERIE_LA_TOUSSAINT; } else if
		 * (this.utilArrayContainObject(arrayArmistice, dayString)) { return
		 * this.FERIE_ARMISTICE; } else if
		 * (this.utilArrayContainObject(arrayNoel, dayString)) { return
		 * this.FERIE_NOEL; } else { return ""; }
		 */
	},

	/**
	 * Valorise les options des listes déroulantes "quartier"
	 */
	setOptionsQuartier : function(selectField) {

		selectField.setOptions([{
					text : 'Tous',
					value : 'all'
				}, {
					text : "Bellevue Chantenay",
					value : "Bellevue Chantenay"
				}, {
					text : "Breil Barberie",
					value : "Breil Barberie"
				}, {
					text : "Centre-ville",
					value : "Centre-ville"
				}, {
					text : "Dervallières Zola",
					value : "Dervallieres Zola"
				}, {
					text : "Doulon Bottière",
					value : "Doulon Bottiere"
				}, {
					text : "Hauts-Pavés Saint-Félix",
					value : "Hauts-Paves Saint-Felix"
				}, {
					text : "Île de Nantes",
					value : "Ile de Nantes"
				}, {
					text : "Malakoff Saint-Donatien",
					value : "Malakoff Saint-Donatien"
				}, {
					text : "Nantes Erdre",
					value : "Nantes Erdre"
				}, {
					text : "Nantes Nord",
					value : "Nantes Nord"
				}, {
					text : "Nantes Sud",
					value : "Nantes Sud"
				}]);
	}

});