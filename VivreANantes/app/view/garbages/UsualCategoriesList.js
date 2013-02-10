Ext.define('VivreANantes.view.UsualCategories.UsualCategoriesList', {
	extend : 'Ext.List',
	xtype : 'UsualCategoriesList',
	config : {
		iconCls : 'home',
		title : 'Déchets',
		// itemTpl : '<div><img src="resources/images/{image}" height="80"/> {nom} </div>'
		itemTpl : '<div><img src=resources/images/{image} height=80 /><br/>{nom} </div>'
		// html : 'tempo',
		// grouped : true,
		//onItemDisclosure : true
	}
	
});