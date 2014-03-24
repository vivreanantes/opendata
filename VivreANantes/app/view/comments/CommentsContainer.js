/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.comments.CommentsContainer', {
	extend : 'Ext.Container',
	xtype : 'commentsContainer_xtype',

	config : {
		layout : 'vbox',
		title : "Contacts", // Titre de la page
		scrollable : 'true',
		items : [{
			xtype : 'label',
			html : "<p>Application réalisée par des bénévoles <font color='blue'>en développement</font> (mars 2014). <a href='http://www.mieuxtrieranantes.fr' target=_blank>www.mieuxtrieranantes.fr</a></p>"
		}, {
			xtype : 'commentsForm_xtype',
			height : 400,
			scrollable : false
		}]
	}

});
