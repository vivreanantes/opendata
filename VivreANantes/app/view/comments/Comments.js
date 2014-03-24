/**
 * Vue des Déchets (présente avec un icone de déchets
 */
Ext.define('VivreANantes.view.comments.Comments', {
			extend : 'Ext.navigation.View',
			xtype : 'comments_xtype',

			config : {
				autoDestroy : false,
				iconCls : 'compose', // icône en forme de crayon
				title : 'Contacts', // Titre de l'icône
				scrollable : 'true',
				items : [{
							xtype : 'commentsContainer_xtype'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});