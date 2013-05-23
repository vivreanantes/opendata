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
					}
				},
				items : [
						/*
						 * { xclass : 'VivreANantes.view.welcome.Welcome' },
						 */
						/*
						 * { xclass : 'VivreANantes.view.game.Guess' },
						 */
						{
					xclass : 'VivreANantes.view.garbages.Garbages',
					// FIXME mise en valeur par badgetText ne fonctionne pas
					badgetText : '*'
				}, {
					xclass : 'VivreANantes.view.geo.MapOSM'
				}, {
					xclass : 'VivreANantes.view.information.Informations'
				}, {
					xclass : 'VivreANantes.view.structures.Structures'
				}, {
					xclass : 'VivreANantes.view.reuses.Reuses'
				}, {
					iconCls : 'more'
				}, {
					xclass : 'VivreANantes.view.collectMod.CollectMods'
				}, {
					// Page 'mode de collecte à domicile'
					xclass : 'VivreANantes.view.homecollectmods.HomeCollectMods'
				}, {
					xclass : 'VivreANantes.view.trisac.Trisacs'
				}, {
					xclass : 'VivreANantes.view.comments.Comments'
				}, {
					xclass : 'VivreANantes.view.about.Description'
				}]
			}
		});
