/**
 * Vue des Modes de collecte (page principale)
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectMods', {
			extend : 'Ext.navigation.View',
<<<<<<< HEAD
			xtype : 'HomeCollectModsView',

			config : {
				autoDestroy : false,
				iconCls : 'trash',
				title:'Collecte à domicile',
				items : [{
							xtype : 'HomeCollectModsContainer'
=======
			xtype : 'HomeCollectModsView_xtype',

			config : {
				autoDestroy : false,
				iconCls : 'list',
				title:'Mode de collecte à domicile',
				items : [{
							xtype : 'HomeCollectModsContainer_xtype'
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
						}
				]
			}
		});