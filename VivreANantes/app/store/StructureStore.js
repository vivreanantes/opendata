Ext.define('VivreANantes.store.StructureStore', {
			extend : 'Ext.data.Store',			
			id : 'structurestore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.Structure',
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