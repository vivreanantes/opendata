/**
 * Renvoie une chaine de caractère correspondant au bloc de la partie
 * commentaires sur un élément de l'application
 * 
 * @param {code}
 *            le code, ou plusieurs codes sépararés par des virgules.
 * 
 * @return {}
 */
function _getCommentsBloc(code) {

	var faqTraduit = "";
	// var commentLink = this.makeLink("commentsPanel");

	// On parcours les remarques de la faq _objComments
	for (var j = 0; j < _objComments.length; j++) {
		if (_objComments[j]["elements"] != null) {

			var arComments = _objComments[j]["elements"]
					.replace(", /g", ",").replace(" ,/g", ",").split(',');
			for (var i = 0; i < arComments.length; i++) {
				if (arComments[i] === code) {
					faqTraduit += "<br/><B>"
							+ _objComments[j]["libelle"] + "</B><BR/>"
							+ _objComments[j]["description"];
				}
			}
		}
	}

	if (faqTraduit != "") {
		faqTraduit += "<br/>";
	}
	return faqTraduit;
}

/**
 * Renvoie le mode de collecte
 */
function _getCollectMod(idElement) {
	var description = "";
	var conseils = "";
	var faq = "";
	var image = "";
	var libelle = "";

	for (j in _objCollectMods) {
		if (_objCollectMods[j].code === idElement) {
			description = _objCollectMods[j]["description"];
			conseils = _objCollectMods[j]["conseils"];
			faq = _objCollectMods[j]["faq"];
			libelle = _objCollectMods[j]["libelle"];
			image = _objCollectMods[j]["image"];
		}
	}

	return {
		"code" : idElement,
		"description" : description,
		"conseils" : conseils,
		"faq" : faq,
		"image" : image,
		"libelle" : libelle
	}
}

/**
 * Renvoie le déchet
 */
function _getGarbage(idElement) {
	var result = '';
	for (j in _objGarbages) {
		if (_objGarbages[j]["code"] === idElement) {
			result = _objGarbages[j];
		}
	}
	return result;
}

/**
 * Renvoie une information
 */
function _getInfo(idElement) {
	var description = "";
	var faq = "";
	var libelle = "";
	var image = "";
	var bouton = "";

	for (j in _objInfos) {
		if (_objInfos[j]["code"] === idElement) {
			description = _objInfos[j]["description_fr"];
			libelle = _objInfos[j]["libelle"];
			image = _objInfos[j]["image"];
			bouton = _objInfos[j]["bouton"];
			faq = _objInfos[j]["faq"];
		}
	}
	return {
		"code" : idElement,
		"faq" : faq,
		"description" : description,
		"libelle" : libelle,
		"image" : image,
		"bouton" : bouton
	}
}

/**
	 * Renvoie les items (les éléments fils d'un container) correspondant à la
	 * partie "conseils" d'une page
	 * 
	 * @params advicesString chaine de caractère listant les codes des conseils
	 *         (ex : ",cons_1,cons2,cons3")
	 */
function _getAdvicesBlock (advicesString) {
		var result = new Array();
		var thisController = this;
		var arConseils = advicesString.replace(", /g", ",").replace(" ,/g",
				",").split(',');
		// On parcourt les conseils
		if (arConseils.length > 0) {

			for (j in _objAdvices) {
				// STORE datasAdvices
				// var dataAdvices = this.getApplication().getController("VivreANantes.controller.GarbagesController").getAdvicesList().getStore().getData();
				// var thisController = this;
				// dataAdvices.each(function (recordAdvice) {
				for (i in arConseils) {
					if (_objAdvices[j]["code"] === arConseils[i]) {
						if (_objAdvices[j]["fiche"] != null && _objAdvices[j]["fiche"] != "") {
							// lien vers une fiche
							result.push({
								xtype : 'container',
								layout : 'hbox',
								id : "garbagesdetails_commentaires_" + _objAdvices[j]["code"],
								items : [{
										html : "<b>" + _objAdvices[j]["libelle"] + "</b><br/>" + _objAdvices[j]["description"] + "<br/><br/>",
										flex : 1
									}, {
										xtype : 'container',
										layout : 'vbox',
										items : [{
												xtype : 'button',
												id : "garbagesdetails_informations",
												text : "Plus d'infos",
												data : {
													code : "informations" + _SEPARATOR + _objAdvices[j]["fiche"]
												}
											}
										]
									}
								]
							});
						}

						// pas de lien vers une fiche
						else {
							result.push({
								id : "garbagesdetails_commentaires_" + _objAdvices[j]["code"],
								html : "<b>" + _objAdvices[j]["libelle"] + "<br/></b>" + _objAdvices[j]["description"] + "<br/><br/>"
							});
						}
					}
				}
				// });
			}
		}
		return result;
	}