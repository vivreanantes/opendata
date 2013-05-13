Ext.define('VivreANantes.store.TrisacStore', {
			extend : 'Ext.data.Store',			
			id : 'trisacstore', 	
			config :{
				autoLoad : true,
				fields : ['code', 'type', 'libelle', 'plagesHoraires', 'adresseTemp',
								'horaires', 'conseils', 'quartier'],
				proxy : {
					type : 'ajax',
					// url : 'data/trisacs.json',
					url : 'data/structures2.json',
					reader : {
						type : 'json',
						rootProperty : 'distrisac'
					}
				}	
				,filters: [
        		{
            		property: "type",
            		value: /distrisac/
        		}
    		]
			}
		});