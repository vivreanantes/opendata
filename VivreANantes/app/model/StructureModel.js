Ext.define('VivreANantes.model.StructureModel', {
	extend : 'VivreANantes.model.AbstractStructureModel',

	config : {
		fields : [{
					name : 'code',
					type : 'string'
				}, {
					name : 'libelle',
					type : 'string'
				}, {
					name : 'type',
					type : 'string'
				}, {
					name : 'conseils',
					type : 'string'
				}, {
					name : 'horaires',
					type : 'string'
				}, {
					name : 'plagesHoraires',
					type : 'string'
				}, {
					name : 'quartier',
					type : 'string'
				}, {
					name : 'sousModesCollecte',
					type : 'string'
				}, {
					name : 'description_fr',
					type : 'string'
				}, {
					name : 'modesCollecte',
					type : 'string'
				}, {
					name : 'src',
					type : 'string',
					// On affiche la source uniquement si pas MieuxTrierANantes
					convert : function(value, record) {
						if (value == "MieuxTrierANantes") {
							return "";
						} else {
							return "<BR/><I>Source : " + value + "</I>";
						}
					}
				}, {
					name : 'numeroTemp',
					type : 'string'
				}, {
					name : 'adresseTemp',
					type : 'string'
				}, {
					name : 'plagesHoraires_prochainsJours',
					type : 'string'
				}, {
					name : 'plagesHoraires_lisible',
					type : 'string'
				}, {
					name : 'plagesHoraires_periodes',
					type : 'object'
				}]
	}
});