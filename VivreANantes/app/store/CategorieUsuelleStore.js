Ext.define('VivreANantes.store.CategorieUsuelleStore', {
			extend : 'Ext.data.Store',
			model : 'VivreANantes.model.CategorieUsuelle',
			id : 'CategorieUsuelleStore',
			autoLoad : true,
			/*getGroupString : function(record) {
				return record.get('categories_usuelles');
			},*/
			proxy : {
				type : 'ajax',
				url : 'data/categories_usuelles.json',
				reader : {
					type : 'json',
					rootProperty : 'categories_usuelles'
				}
			}
		});