/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.garbages.GarbagesContainer2', {
			extend : 'Ext.navigation.View',
			xtype : 'garbagesContainer2_xtype',
			config : {
				items : [{
							xtype : 'usualCategoriesButtonsPanel_xtype'
						}]
			}

		});
