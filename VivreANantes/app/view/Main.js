/**
 * Vue principale
 */
Ext.define('VivreANantes.view.Main', {
	extend : 'Ext.tab.Panel',
	xtype : 'main',
	config : {
		tabBarPosition : 'bottom',
		items : [ {
			xclass : 'VivreANantes.view.welcome.Welcome'
		}, {
			xclass : 'VivreANantes.view.geo.MapContainer'
		}, {
			xclass : 'VivreANantes.view.game.Guess'
		},{
			xclass : 'VivreANantes.view.calendar.Calendrier'
		},{
			xclass : 'VivreANantes.view.about.Desc'
		},{
			xclass : 'VivreANantes.view.geo.MapOSM'
		}]
	}
});
