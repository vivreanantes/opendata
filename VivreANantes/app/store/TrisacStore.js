Ext.define('VivreANantes.store.TrisacStore', {
			extend : 'Ext.data.Store',			
			id : 'trisacstore', 	
			config :{
				autoLoad : true,
				fields : ['code', 'type', 'libelle', 'plagesHoraires', 'adresse_',
								'horaires', 'conseils', 'quartier_'],
				proxy : {
					type : 'ajax',
					url : 'data/trisacs.json',
					reader : {
						type : 'json',
						rootProperty : 'distrisac'
					}
				}	
			}
		});