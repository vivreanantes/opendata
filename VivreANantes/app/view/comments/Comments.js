/**
 * Vue des Déchets (présente avec un icone de déchets
 */
Ext.define('VivreANantes.view.comments.Comments', {
			extend : 'Ext.navigation.View',
			xtype : 'comments_xtype',

			config : {
				autoDestroy : false,
				iconCls : 'team',
				title : 'Commentaires',
				items : [{
							xtype : 'commentsContainer_xtype'
						}
				]
			}
		});