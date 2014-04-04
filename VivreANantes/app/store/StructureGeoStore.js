Ext.define('VivreANantes.store.StructureGeoStore', {
			extend : 'Ext.data.Store',			
			id : 'structuregeostore', 	
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
