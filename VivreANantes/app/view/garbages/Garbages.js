/**
 * Vue des Déchets (présente avec un icone de déchets
 */
Ext.define('VivreANantes.view.garbages.Garbages', {
			extend : 'Ext.navigation.View',
			xtype : 'garbagesView',

			config : {
				autoDestroy : false,
				iconCls : 'trash',
				title:'Déchets',
				items : [{
							xtype : 'garbagesContainer'
						}
				]
			}
		});