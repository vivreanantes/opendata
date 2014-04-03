Ext.define('VivreANantes.view.comments.CommentsModal', {
			extend : 'Ext.Panel',
			alias : 'widget.modalpanel',

			config : {
				centered : true,
				height : 400,
				itemId : 'modalPanel',
				width : 300,
				hideOnMaskTap : true,
				modal : true,
				scrollable : true,
				layout : 'vbox',
				title : "Commentaires sur l'application et la filière tri",
				scrollable : 'true',
				items : [{
							xtype : 'commentsForm_xtype',
							height : 400,
							scrollable : false
						}]
			}

		});