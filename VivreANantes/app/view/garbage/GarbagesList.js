Ext.define('VivreANantes.view.garbages.GarbagesList', {
	extend : 'Ext.List',
	xtype : 'garbageslist',
	config : {
		iconCls : 'home',
		title : 'Déchets',
		// itemTpl : '<div>{nom} |  {description}<img src ="resources/images/{image}" height="80"/></div>' ,
		// itemTpl : '<div>{nom}</div>' ,
		html : 'tempo',
		// grouped : true,
		// 
		onItemDisclosure : true
		/*onItemDisclosure : function() {
			console.log('onItemDisclosure');
		}*/
	}
	
});