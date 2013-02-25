Ext.define('VivreANantes.view.garbages.AdvicesList', {
	extend : 'Ext.List',
	xtype : 'advicesList',
	config : {
		iconCls : 'home',
		title : 'Conseils',
		// itemTpl : '<div><img src="resources/images/{image}" height="80"/> {nom} </div>'
		itemTpl : '<div>{libelle}</div>'
		// html : 'tempo',
		// grouped : true,
		//onItemDisclosure : true
	}
	
});