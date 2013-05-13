/**
 * Controleur de la partie Structures
 */
Ext.define('VivreANantes.controller.AbstractController', {
	extend : 'Ext.app.Controller'

/*
 * Ajoute les éléments d'un tableau à un tableau existant 
 */
,utilPushArray : function(arSrc, arTarget) {
	arTarget.push.apply(arTarget, arSrc);
	return;
}

,utilArrayContainObject : function(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

/**
 * Renvoie la position du premier nombre sur la chaîne. Ex lu200313 renvoie 2 (car 0 est la première position) ou -1 si pas trouvé.
 */
,utilPosFirstNumberInString : function(string) {
	var arrayNumbers = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
	var indexLastNumberPosition = string.length;
	 for (var i = 0; i < arrayNumbers.length; i++) {
	 	var searchvalue = arrayNumbers[i];
	 	if (string.indexOf(searchvalue,0)!=-1 && string.indexOf(searchvalue,0)<indexLastNumberPosition) {
	 		indexLastNumberPosition = string.indexOf(searchvalue,0);
	 	}
	 }
	 if (indexLastNumberPosition==string.length) {
	 	indexLastNumberPosition = -1;
	 }
	return indexLastNumberPosition;
}


/*
 * Retourne un objet String correspondant à l'année actuelle. Exemple "2014" 
 */
,utilGetStringCurrentYearAAAA : function() {
 	return (new Date()).getFullYear();
}

/*
 * Retourne sous forme d'une chaîne de caractère le jour de la semaine d'une date
 */
,utilGetDayOfWeek : function(d, locale) {

	var weekday=new Array(7);
	if (locale=="en") {
		weekday[0]="Sunday";
		weekday[1]="Monday";
		weekday[2]="Tuesday";
		weekday[3]="Wednesday";
		weekday[4]="Thursday";
		weekday[5]="Friday";
		weekday[6]="Saturday";
	} else {
		weekday[0]="Lundi";
		weekday[1]="Mardi";
		weekday[2]="Mercredi";
		weekday[3]="Jeudi";
		weekday[4]="Vendredi";
		weekday[5]="Samedi";
		weekday[6]="Dimanche";
	}
	return weekday[d.getDay()];
}


,utilReplace : function(strSrc, avant, apres) {
	return strSrc.split(avant).join(apres);
}

/*
 * Traduit un libellé. Si on ne le trouve pas renvoie la clé.
 */
,translate : function(stKey, stLocale) {
	var result = stKey;
	var map = {
		"label_sauf_ferie" : { 
			"en" : "sauf jours fériés", 
			"fr" : "except official holiday"
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
			"en" : "au", 
			"fr" : "to the"
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
		},"label_structure_template_detail" : { 
			"en" : "Type : {type} - {soustype} <BR/>Name : {libelle} <BR/>Schedules : {plagesHoraires2} <BR/>Address : {adresseTemp} '+ ' <BR/>Phone : {telephoneTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}", 
			"fr" : "Type : {type} - {soustype} <BR/>Nom : {libelle} <BR/>Horaires : {plagesHoraires2} <BR/>Adresse : {adresseTemp} '+ ' <BR/>Téléphone : {telephoneTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}"
		},"label_trisac_template_detail" : {
			"en" : "Type : {type} <BR/>Name : {libelle} <BR/>Schedules : {horaires} <BR/>Address : {adresseTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}",
			"fr" : "Type : {type} <BR/>Nom : {libelle} <BR/>Horaires : {horaires} <BR/>Adresse : {adresseTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}"
		}
	
	};
	if (stLocale=="en" && map[stKey]["en"]!=null) {
		result = map[stKey]["en"];
	} else if (map[stKey]["fr"]!=null) {
		result = map[stKey]["fr"];
	}
	return result;
}

	,SAUF_FERIE : "sauf_ferie"
	
	/*
	 * Vérifie si un jour est férié.
	 */
	,verifFerie : function(saufFerie, jourDebut, moisDebut, currentYear) {
		var valid = true;
		if (saufFerie) {
			var arrayJoursFeries = new Array("010113","010413","010513","080513","090513","200513","140713","150813","011113","111113","251213","010114","210414","010514","080514","290514","090614","140714","150814","011114","111114","251214","010115","060415","010515","080515","140515","250515","140715","150815","011115","111115","251215","010116","060116","270316","280316","010516","050516","080516","160516","140716","150816","011116","111116","251216","010117","060117","160417","170417","010517","080517","250517","050617","140717","150817","011117","111117","251217","010118","010418","020418","010518","080518","100518","210518","140718","150818","011118","111118","251218");
			// Si c'est un jour férié
			if (this.utilArrayContainObject(arrayJoursFeries, ""+jourDebut+moisDebut+currentYear)) {
				var valid = false;
			};
		}
		return valid;
	}


	/*
	 * Convertit un jour dans sa chaine de caractère. Ex "01" devient "janvier") 
	 */
	,convertDayNumberToString : function(stMonth, stLocale) {
		var result = "";
		     if (stMonth=="01") {  result = "janvier";  }
		else if (stMonth=="02") {  result = "février";  }
		else if (stMonth=="03") {  result = "mars";  }
		else if (stMonth=="04") {  result = "avril";  }
		else if (stMonth=="05") {  result = "mai";  }
		else if (stMonth=="06") {  result = "juin";  }
		else if (stMonth=="07") {  result = "juillet";  }
		else if (stMonth=="08") {  result = "août";  }
		else if (stMonth=="09") {  result = "septembre";  }
		else if (stMonth=="10") {  result = "octobre";  }
		else if (stMonth=="11") {  result = "novembre";  }
		else if (stMonth=="02") {  result = "décembre";  }
		return result;
	}




});