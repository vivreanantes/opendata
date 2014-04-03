/**
 * Vue des Distribution Events (page principale)
 */
Ext.define('VivreANantes.view.structures.Structures', {
			extend : 'Ext.navigation.View',
			xtype : 'structuresView_xtype',
			id : 'structuresView',
			config : {
				autoDestroy : false,
				iconCls : 'structureclass',
				title : 'Lieux',
				items : [
					{
						xtype : 'structuresContainer_xtype'
					}
				],
				defaultBackButtonText : "Retour"
			}
		});