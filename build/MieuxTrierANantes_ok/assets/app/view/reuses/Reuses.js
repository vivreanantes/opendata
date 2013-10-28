/**
 * Vue des Distribution Events (page principale)
 */
Ext.define('VivreANantes.view.reuses.Reuses', {
			extend : 'Ext.navigation.View',
			xtype : 'reusesView_xtype',
			requires: ['VivreANantes.view.reuses.ReusesContainer'],

			config : {
				autoDestroy : false,
				iconCls : 'maps',
				title : 'Réemploi',
				items : [{
							xtype : 'reusesContainer_xtype'
						}
				]
			}
		});