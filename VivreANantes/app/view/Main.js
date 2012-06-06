/**
 * Vue principale
 */
Ext.define('VivreANantes.view.Main', {
			extend : 'Ext.tab.Panel',
			
			xtype : 'main',
			config : {
				tabBarPosition : 'bottom',
				items : [{
							xclass : 'VivreANantes.view.welcome.Welcome'
						}, {
							xclass : 'VivreANantes.view.geo.MapOSM'
						},						
						{
							xclass : 'VivreANantes.view.game.Guess'
						}, {
							xclass : 'VivreANantes.view.calendar.Calendar'
						}, {
							xclass : 'VivreANantes.view.about.Description'
						}]
			}
		});
