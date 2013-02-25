Ext.define('VivreANantes.view.garbages.CollectModsList', {
	extend : 'Ext.List',
	xtype : 'collectModList',
	config : {
		iconCls : 'home',
		title : 'Modes de collectes',
		itemTpl : '<div>{libelle}</div>'
	}
	
});