Ext.define('VivreANantes.view.garbages.Garbages', {
	extend : 'Ext.Navigation.View',
	xtype : 'garbagesContainer',
	requires: [
		'VivreANantes.view.garbages.GarbagesList',
		'VivreANantes.view.garbages.GarbagesDetails'
	],
	config : {
		/*items : [
		         {
		        	 xtype:'garbageslist',
		        	 title:'Accueil'
		         }
		]*/
	}
});