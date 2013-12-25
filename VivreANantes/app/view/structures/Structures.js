/**
 * Vue des Distribution Events (page principale)
 */
Ext.define('VivreANantes.view.structures.Structures', {
			extend : 'Ext.navigation.View',
			xtype : 'structuresView_xtype',
			id : 'structuresView',
			config : {
				autoDestroy : false,
				iconCls : 'maps',
				title : 'Structures',
				items : [
					{
						xtype : 'structuresContainer_xtype'
					}
				],
				defaultBackButtonText : "Retour"
			}
		});