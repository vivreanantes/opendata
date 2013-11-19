/**
 * Vue principale
 */
Ext.define('VivreANantes.view.Main', {

	extend : 'Ext.tab.Panel',
	xtype : 'main',
	id : 'mainView',
	config : {
		// remplace le tabbar créée automatiquement avec un tab.panel
		// tabBarPosition : 'bottom',
		tabBar : {
			docked : 'bottom',
			layout : {
				pack : 'center'
			},
            scrollable: {
                direction: 'horizontal',
                indicators: false
            }
		},
		items : [{
					xclass : 'VivreANantes.view.about.Description'
				},
				{
					xclass : 'VivreANantes.view.garbages.Garbages'
				}, {
					 xclass : 'VivreANantes.view.geo.MapOSM'
					// xclass : 'VivreANantes.view.geo.MapContainer'
				}, {
					xclass : 'VivreANantes.view.information.Informations'
				}, {
					xclass : 'VivreANantes.view.structures.Structures'
				}, {
					xclass : 'VivreANantes.view.reuses.Reuses'
				}, {
					xclass : 'VivreANantes.view.collectMod.CollectMods'
				}, {
					xclass : 'VivreANantes.view.homecollectmods.HomeCollectMods'
				}, {
					xclass : 'VivreANantes.view.trisac.Trisacs'
				}, {
					xclass : 'VivreANantes.view.comments.Comments'
				}]
	}
});
