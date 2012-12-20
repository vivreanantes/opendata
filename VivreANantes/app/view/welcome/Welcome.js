/**
 * Accueil
 */
Ext.define('VivreANantes.view.welcome.Welcome', {
	extend : 'Ext.NavigationView',
	xtype : 'accueilContainer',
	requires: [
		'VivreANantes.view.welcome.WelcomeList'
	
	],
	config : {
		title : 'Vivre A Nantes',
		iconCls : 'home',
		autoDestroy : false,
		html : 'Application Vivre A Nantes',
		items : [
		         {
		        	 xtype:'toolbar',
		        	 title:'Accueil'
		         }
		         
		]
	}
});