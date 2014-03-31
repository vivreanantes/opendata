Ext.define('VivreANantes.store.InformationsStore', {
			extend : 'Ext.data.Store',			
			id : 'informationsstore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.InformationsModel',
					proxy : {
						type : 'ajax',
						url : 'data/informations.json',
						reader : {
							type : 'json',
							rootProperty : 'informations'
						}
					}
			}
		});