Ext.define('VivreANantes.store.CategorieUsuelleStore', {
			extend : 'Ext.data.Store',
			id : 'categorieusuellestore',		
			config : {
				proxy : {
					type : 'ajax',
					url : 'data/categories_usuelles.json',
					reader : {
						type : 'json',
						rootProperty : 'categories_usuelles'
					}
				},
				model : 'VivreANantes.model.CategorieUsuelleModel',
				
				autoLoad : true,
				sorters : 'nom'

				
			}
			
		});