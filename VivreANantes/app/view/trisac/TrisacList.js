Ext.define('VivreANantes.view.trisac.TrisacList', {
	extend : 'Ext.List',
	xtype : 'TrisacList',
	config : {
		iconCls : 'action', // icône en forme de ?
		title : 'Modes de collecte à domicile',
		itemTpl : 'Quartiers : {quartier} <div>{libelle}</div>Type de distribution : {soustype} ',
		store : 'TrisacStore'
	}

	

});