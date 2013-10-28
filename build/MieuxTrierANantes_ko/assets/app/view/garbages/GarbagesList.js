Ext.define('VivreANantes.view.garbages.GarbagesList', {
	extend : 'Ext.List',
	xtype : 'garbagesList_xtype',
	
	config : {
		iconCls : 'home',
		title : 'Déchets',
		// itemTpl : '<div><img src="resources/images/{image}" height="80"/>
		// {nom} </div>'
		itemTpl : '<div><img src=resources/images/{image} height=80 /><br/>{nom} </div>'
		// html : 'tempo',
		// grouped : true,
		// onItemDisclosure : true
	}

});