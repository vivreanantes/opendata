Ext.define('VivreANantes.view.welcome.WelcomeList', {
	extend : 'Ext.List',
	xtype : 'welcomelist',
	config : {
		iconCls : 'home',
		title : 'Déchets',
		itemTpl : '<div>{nom} |  {description}<img src ="resources/images/{image}" height="80"/></div>' ,
		// itemTpl : '<div>{nom}</div>' ,
		// grouped : true,
		// 
		onItemDisclosure : true
	}
	
});