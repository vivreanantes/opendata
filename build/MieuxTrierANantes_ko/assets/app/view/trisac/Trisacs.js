/**
 * Vue des Distribution Trisacs (page principale)
 */
Ext.define('VivreANantes.view.trisac.Trisacs', {
			extend : 'Ext.navigation.View',
			xtype : 'Trisac_xtype',

			config : {
				autoDestroy : false,
				iconCls : 'action',
				title:'Trisac',
				items : [{
							xtype : 'TrisacContainer_xtype'
						}
				]
			}
		});