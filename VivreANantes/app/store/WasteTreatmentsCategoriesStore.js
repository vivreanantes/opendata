Ext.define('VivreANantes.store.WasteTreatmentsCategoriesStore', {
			extend : 'Ext.data.Store',			
			id : 'wastetraitementscategoriesstore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.WasteTreatmentsCategories',
				proxy : {
					type : 'ajax',
					url : 'data/categories_traitements.json',
					reader : {
						type : 'json',
						rootProperty : 'categories_traitements'
					}
				}	
			}
		});