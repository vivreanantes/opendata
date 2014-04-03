/**
 * Vue des Modes de collecte (page principale)
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectMods', {
			extend : 'Ext.navigation.View',
			xtype : 'HomeCollectModsView',

			config : {
				autoDestroy : false,
				iconCls : 'homecollectclass', // icône en forme de camion
				title:'A domicile',
				items : [{
							xtype : 'HomeCollectModsContainer'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});