Ext.define('VivreANantes.model.CommentsModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [
						{
							name : 'code'
						}, {
							name : 'libelle'
						},{
							name : 'description'
						}, {
							name : 'element'
						}]
			}

		});