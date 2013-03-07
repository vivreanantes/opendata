Ext.define('VivreANantes.store.AdviceStore', {
			extend : 'Ext.data.Store',			
			id : 'advicestore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.Advice',
				proxy : {
					type : 'ajax',
					url : 'data/conseils.json',
					reader : {
						type : 'json',
						rootProperty : 'conseils'
					}
				}	
			}
		});