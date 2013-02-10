/**
 * Vue des Modes de collecte (page principale)
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectMods', {
			extend : 'Ext.navigation.View',
			xtype : 'HomeCollectModsView',

			config : {
				autoDestroy : false,
				iconCls : 'trash',
				title:'Collecte à domicile',
				items : [{
							xtype : 'HomeCollectModsContainer'
						}
				]
			}
		});