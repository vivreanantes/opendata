/**
 * Vue des Modes de collecte (page principale)
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectMods', {
			extend : 'Ext.navigation.View',
			xtype : 'HomeCollectModsView',

			config : {
				autoDestroy : false,
				iconCls : 'home', // icône en forme de maison
				title:'Domicile',
				items : [{
							xtype : 'HomeCollectModsContainer'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});