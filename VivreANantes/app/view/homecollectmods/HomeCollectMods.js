/**
 * Vue des Modes de collecte (page principale)
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectMods', {
			extend : 'Ext.navigation.View',
			xtype : 'HomeCollectModsView_xtype',

			config : {
				autoDestroy : false,
				iconCls : 'list',
				title:'Mode de collecte à domicile',
				items : [{
							xtype : 'HomeCollectModsContainer_xtype'
						}
				]
			}
		});