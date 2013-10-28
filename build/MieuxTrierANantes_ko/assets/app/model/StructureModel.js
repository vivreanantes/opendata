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
				}/*, {
					name : 'sousModesCollecte',
					type : 'string'
				}*/, {
					name : 'description_fr',
					type : 'string'
				}, {
					name : 'modesCollecte',
					type : 'string'
				}, {
					name : 'src',
					type : 'string'
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
				}, {
					name : 'latitude',
					type : 'string'
				}, {
					name : 'longitude',
					type : 'object'
				}]
	}
});