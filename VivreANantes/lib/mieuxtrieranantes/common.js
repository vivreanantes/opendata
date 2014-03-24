

function _utilArrayContainObject(a, obj) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] === obj) {
			return true;
		}
	}
	return false;
}


function _utilGetDateTodayWithoutSeconds() {
	var today = new Date();
	today.setHours(0);
	today.setMinutes(0, 0, 0);
	return today;
}

/**
 * Met la première lettre en majuscule
 */
function _stringUpperFirstLetter(result) {
	if (result != null && result.length > 1) {
		result = result.substring(0, 1).toUpperCase() + result.substring(1);
	}
	return result;
}

/**
 * Ajoute un nombre de jours.
 */
function _addDays (d, j) {
		return new Date(d.getTime() + (1000 * 60 * 60 * 24 * j));
}

/**
 * Retourne un objet String correspondant à l'année actuelle. Exemple "2014"
 */
function _utilGetStringCurrentYearAAAA () {
	return (new Date()).getFullYear();
}

function translateWithUpperFirstLetter (result) {
	return _stringUpperFirstLetter(_translate(result));
}


/**
 * Découpe une chaîne de caractère (notamment pour les boutons) en insérant
 * des balises "<br/>
 */
function _decoupe(stChaine, iTailleMax) {
	var result = "";
	if (stChaine != undefined) {
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
