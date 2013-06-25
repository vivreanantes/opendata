Ext.define('VivreANantes.model.AbstractStructureModel', {
			extend : 'Ext.data.Model'
		});

/*
 * Traduit un libellé. Si on ne le trouve pas, renvoie la clé.
 */

function translate(stKey) {
	// invoque la fonction définie dans translation.js
	return _translate(stKey, "fr");
};

/*
 * Retourne un objet String correspondant à l'année actuelle. Exemple "2014"
 */
function utilGetStringCurrentYearAAAA() {
	return (new Date()).getFullYear();
};