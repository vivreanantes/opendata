/**
 * Vue des Distribution Events (page principale)
 */
Ext.define('VivreANantes.view.reuses.Reuses', {
			extend : 'Ext.navigation.View',
			requires: ['VivreANantes.view.reuses.ReusesContainer'],
			xtype : 'reusesView_xtype',
			config : {
				autoDestroy : false,
				iconCls : 'maps',
				title : 'Réemploi',
				items : [{
							xtype : 'reusesContainer_xtype'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});