Ext.define('VivreANantes.view.structures.StructuresList', {
	extend : 'Ext.List',
	xtype : 'structuresList_xtype',
	config : {
		// iconCls : 'action', // icône en forme de ?
		itemTpl : '<div><i>{type}</i> {libelle} {plagesHoraires_prochainsJours} <br/>{plagesHoraires_lisible}</div>'
	}

	

});