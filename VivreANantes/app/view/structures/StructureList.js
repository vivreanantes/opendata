Ext.define('VivreANantes.view.structures.StructuresList', {
	extend : 'Ext.List',
	xtype : 'structuresList_xtype',
	config : {
		// iconCls : 'action', // icône en forme de ?
		// title : 'Modes de collecte à domicile',
		// TODO : initialiser ce template avec translate 
		itemTpl : '<div>{type} {soustype} - {libelle}<br/>{plagesHoraires2}</div>'
	}

	

});