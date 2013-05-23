/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.comments.CommentsContainer', {
			extend : 'Ext.Container',
			xtype : 'commentsContainer_xtype',

			config : {
				layout : 'vbox',
				title : "Commentaires sur l'application et la filière tri",
				scrollable : 'true',
				items : [{
							xtype : 'commentsForm_xtype',
							height : 300,
							scrollable : false
						}, {
							xtype : 'commentsList_xtype',
							scrollable : 'vertical',
							flex : 1
						}

				]
			}

		});
