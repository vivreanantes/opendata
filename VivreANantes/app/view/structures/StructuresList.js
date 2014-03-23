Ext.define('VivreANantes.view.structures.StructuresList', {
	extend : 'Ext.List',
	xtype : 'structuresList_xtype',
	config : {
		itemTpl : '<div><i>{type}</i> {libelle} {plagesHoraires_prochainsJours} <br/>{plagesHoraires_lisible}</div>'
	}

	

});