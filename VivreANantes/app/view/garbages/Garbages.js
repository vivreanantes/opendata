Ext.define('VivreANantes.view.garbages.Garbages', {
	extend : 'Ext.navigation.View',
	xtype : 'garbagesContainer',
	config : {
		
		autoDestroy: false,
		iconCls : 'list',
		title : 'Garbages',
		itemTpl : '<div>{nom}</div>',
		scrollable : 'vertical',
		items : [ {
			xtype : 'garbagesList',
			title : 'Déchets'
		} ]
	}
});