Ext.define('VivreANantes.store.Structure2Store_2', {
			extend : 'Ext.data.Store',			

			config :{
				autoLoad : true,

				
				fields : ['code', 'type', 'modesCollecte', 'plagesHoraires2', 'libelle', 'plagesHoraires', 'adresseTemp',
								'horaires', 'conseils', 'quartier', 'sousModesCollecte'],
				proxy : {
					type : 'ajax',
					// url : 'data/events.json',
					url : 'data/structures2.json',
					reader : {
						type : 'json',
						rootProperty : 'structures'
					}
				}
				/*,filters: [
        		{
            		// property: "type",
        			property : "modesCollecte",
            		// le type correspond aux modes de collectes possibles
            		// voir http://quentinc.net/javascript/testeur-expressions-regulieres/
            		value: /modco_ecopoint|modco_ecotox|modco_reemploi|modco_decheterie/g
        			// value: /modco_reemploi/g
        		}]*/
			}
		});