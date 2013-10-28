Ext.define('VivreANantes.store.CommentsStore', {
			extend : 'Ext.data.Store',			
			id : 'commentsStore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.CommentsModel',
				proxy : {
					type : 'ajax',
					url : 'data/comments.json',
					reader : {
						type : 'json',
						rootProperty : 'commentaires'
					}
				}	
			}
		});