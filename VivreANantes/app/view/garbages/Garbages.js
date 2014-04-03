/**
 * Vue principale des Déchets (présente avec un icone de déchets)
 */
Ext.define('VivreANantes.view.garbages.Garbages', {
			extend : 'Ext.navigation.View',
			xtype : 'garbages_xtype',
			config : {
				autoDestroy : false,
				iconCls : 'garbageclass', // icône en forme de loupe 
				title:'Déchets',
				items : [{
							xtype : 'garbagescontainer_xtype'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});