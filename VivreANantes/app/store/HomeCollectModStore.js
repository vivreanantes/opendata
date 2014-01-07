Ext.define('VivreANantes.store.HomeCollectModStore', {
			extend : 'Ext.data.Store',			
			id : 'homecollectmodstore', 	
			config :{
				autoLoad : false,
				model : 'VivreANantes.model.HomeCollectModModel',
				proxy : {
					type : 'ajax',
					url : 'data/modes_collecte_a_domicile.json',
					reader : {
						type : 'json',
						rootProperty : 'modes_collecte_a_domicile'
					}
				}	
			}
		});