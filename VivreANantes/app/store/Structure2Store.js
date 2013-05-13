Ext.define('VivreANantes.store.Structure2Store', {
			extend : 'Ext.data.Store',			
			id : 'structure2_store', 	
			config :{
				autoLoad : true,

				
				fields : ['code', 'type', 'soustype', 'libelle', 'plagesHoraires', 'plagesHoraires2', 'adresseTemp',
								'horaires', 'conseils', 'quartier'],
				proxy : {
					type : 'ajax',
					// url : 'data/events.json',
					url : 'data/structures2.json',
					reader : {
						type : 'json',
						rootProperty : 'structures'
					}
				}	
			}
		});