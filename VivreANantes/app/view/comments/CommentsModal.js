Ext.define('VivreANantes.view.comments.CommentsModal', {
			extend : 'Ext.Panel',
			alias : 'widget.commentmodal',

			config : {
				centered : true,
				height : "320px",
				itemId : 'modalPanel',
				width : "280px",
				hideOnMaskTap : true,
				modal : true,
				scrollable : true,
				layout : 'vbox',
				title : "Commentaires sur l'application et la filière tri",
				scrollable : 'true',
				items : [{
							xtype : 'commentsForm_xtype',
							height : "300px",
							scrollable : false
						}]
			}

		});