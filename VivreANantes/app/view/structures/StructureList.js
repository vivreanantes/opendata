Ext.define('VivreANantes.view.structures.StructuresList', {
	extend : 'Ext.List',
	xtype : 'structuresList_xtype',
	config : {
		// iconCls : 'action', // icône en forme de ?
		itemTpl : '<div><i>{type}</i> {libelle} {ouvertAujourdhuiEtDemain} <br/>{plagesHoraires2}</div>'
	}

	

});