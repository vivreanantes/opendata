Ext.define('VivreANantes.store.CategorieUsuelleStore', {
			extend : 'Ext.data.Store',
			model : 'VivreANantes.model.CategorieUsuelle',
			id : 'categorieusuellestore',
			autoLoad : true,
			sorters : 'nom',
			proxy : {
				type : 'ajax',
				url : 'data/categories_usuelles.json',
				reader : {
					type : 'json',
					rootProperty : 'categories_usuelles'
				}
			}
		});