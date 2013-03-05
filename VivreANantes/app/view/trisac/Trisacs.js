/**
 * Vue des Distribution Trisacs (page principale)
 */
Ext.define('VivreANantes.view.trisac.Trisacs', {
			extend : 'Ext.navigation.View',
			xtype : 'TrisacView',

			config : {
				autoDestroy : false,
				iconCls : 'action',
				title:'Trisac',
				items : [{
							xtype : 'TrisacContainer'
						}
				]
			}
		});