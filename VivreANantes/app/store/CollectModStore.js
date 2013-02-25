Ext.define('VivreANantes.store.CollectModStore', {
			extend : 'Ext.data.Store',			
			id : 'collectmodstore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.CollectMod',
				proxy : {
					type : 'ajax',
					url : 'data/modes_collecte.json',
					reader : {
						type : 'json',
						rootProperty : 'modes_collecte'
					}
				}	
			}
		});