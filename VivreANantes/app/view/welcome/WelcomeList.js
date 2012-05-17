Ext.define('VivreANantes.view.welcome.WelcomeList', {
	extend : 'Ext.List',
	xtype : 'welcomelist',
	config : {
		iconCls : 'home',
		title : 'Liste',
		itemTpl : '<div>{nom} |  {description}<img src ="resources/images/{image}"/></div>' ,
grouped : true
	}
	
});