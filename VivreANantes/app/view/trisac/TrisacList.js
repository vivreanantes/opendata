Ext.define('VivreANantes.view.trisac.TrisacList', {
	extend : 'Ext.List',
	xtype : 'TrisacList',
	config : {
		iconCls : 'action', // icône en forme de ?
		title : 'Modes de collecte à domicile',
		itemTpl : '{type}<div>{libelle}</div>',
		store : 'TrisacStore'
	}

	

});