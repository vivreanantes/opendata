/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define(
				'VivreANantes.view.comments.CommentsContainer',
				{
					extend : 'Ext.Container',
					xtype : 'commentsContainer_xtype',

					config : {
						layout : 'vbox',
						title : "Commenter",
						scrollable : 'true',
						items : [
								/*{
									xtype : 'label',
									html : "<p>Application réalisées par des bénévoles <font color='blue'>en phase de développement</font>. Version 0.1403 (mars 2014). <a href='hhtp://www.mieuxtrieranantes.fr' target=_blank>www.mieuxtrieranantes.fr</a></p>"
								},*/{
										xtype : 'label',
										html : "<I>Sur l'application ou la filière tri.</I>"
									}, {
									xtype : 'commentsForm_xtype',
									height : 400,
									scrollable : false
								} ]
					}

				});
