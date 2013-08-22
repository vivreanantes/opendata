Ext.define('VivreANantes.store.StructureStore', {
			extend : 'Ext.data.Store',			
			id : 'structurestore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.StructureModel',
				proxy : {
					type : 'ajax',
					url : 'data/structures2.json',
					reader : {
						type : 'json',
						rootProperty : 'structures'
					}
				}	
			}
		});