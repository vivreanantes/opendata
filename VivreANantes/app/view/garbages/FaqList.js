Ext.define('VivreANantes.view.garbages.FaqList', {
	extend : 'Ext.List',
	xtype : 'faqList',
	config : {
		iconCls : 'home',
		title : 'FAQ',
		itemTpl : '<div>{libelle}</div>'
	}
	
});