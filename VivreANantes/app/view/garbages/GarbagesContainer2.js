/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.garbages.GarbagesContainer2', {
						extend : 'Ext.navigation.View',
			xtype : 'garbagesContainer2_xtype',

			config : {
				autoDestroy : false,
				iconCls : 'team',
				title : 'Commentaires',
				items : [{
							xtype : 'commentsContainer_xtype'
						}
				]}}
			
			
			/*extend : 'Ext.navigation.View',
			xtype : 'garbagesContainer2_xtype',
			config : {
				autoDestroy : false,
				iconCls : 'home',
				title:'GarbagesContainer2',
				items : [{
							xtype : 'usualCategoriesButtonsPanel_xtype'
						}
				]
			}

		}*/);
