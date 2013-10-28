Ext.define('VivreANantes.store.GarbageStore', {
			extend : 'Ext.data.Store',			
			id : 'garbagestore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.GarbageModel',
				proxy : {
					type : 'ajax',
					url : 'data/dechets.json',
					reader : {
						type : 'json',
						rootProperty : 'garbages'
					}
				}	
			}
		});