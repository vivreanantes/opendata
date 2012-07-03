Ext.define('VivreANantes.view.garbages.GarbagesList', {
	extend : 'Ext.List',
	xtype : 'GarbagesList',
	config : {
		iconCls : 'home',
		title : 'Déchets',
		itemTpl : '<div>{nom} | {concerne_aussi}<img src ="resources/images/{image}" height="80"/></div>' ,
		// itemTpl : 'toto<div>{nom}</div>',
		// html : 'tempo',
		// grouped : true,
		onItemDisclosure : true
		/*onItemDisclosure : function() {
			console.log('onItemDisclosure');
		}*/
	}
	
});