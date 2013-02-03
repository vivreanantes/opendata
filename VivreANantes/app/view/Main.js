/**
 * Vue principale
 */
Ext.define('VivreANantes.view.Main', {

			extend : 'Ext.tab.Panel',
			xtype : 'main',
			config : {
				// remplace le tabbar créée automatiquement avec un tab.panel
				// tabBarPosition : 'bottom',
				tabBar : {
					docked : 'bottom',
					layout : {
						pack : 'center'
					}
				},
				items : [{
							xclass : 'VivreANantes.view.welcome.Welcome'
						}, {
							xclass : 'VivreANantes.view.information.Informations'
							// xtype : 'informations'
						}, {
							xclass : 'VivreANantes.view.garbages.Garbages',
							// TODO mise en valeur par badgetText ne fonctionne
							// pas
							badgetText : '*'
						}, {
							xclass : 'VivreANantes.view.geo.MapOSM'
						}, {
							xclass : 'VivreANantes.view.game.Guess'
						}, {
							xclass : 'VivreANantes.view.calendar.Calendar'
						}, {
							xclass : 'VivreANantes.view.about.Description'
						}]
			}
		});
