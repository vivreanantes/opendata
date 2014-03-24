Ext.define('VivreANantes.store.StructureStoreGeo', {
			extend : 'Ext.data.Store',			
			id : 'structurestoregeo', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.StructureModel',
				proxy : {
					type : 'ajax',
					url : 'data/structures.json',
					reader : {
						type : 'json',
						rootProperty : 'structures'
					}
				}	
			}
		});
