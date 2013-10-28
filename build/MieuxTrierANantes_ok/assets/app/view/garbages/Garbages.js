/**
 * Vue principale des Déchets (présente avec un icone de déchets)
 */
Ext.define('VivreANantes.view.garbages.Garbages', {
			extend : 'Ext.navigation.View',
			xtype : 'garbages_xtype',
			config : {
				autoDestroy : false,
				iconCls : 'trash',
				title:'Déchets',
				scrollable : true,
				items : [{
							xtype : 'garbagesContainer'
						}
				]
			}
		});