Ext.define('VivreANantes.store.TrisacStore', {
			extend : 'Ext.data.Store',
			id : 'trisacstore',
			config : {
				autoLoad : true,
				model : 'VivreANantes.model.StructureModel',
				proxy : {
					type : 'ajax',
					// url : 'data/trisacs.json',
					url : 'data/structures2.json',
					reader : {
						type : 'json',
						rootProperty : 'structures'
					}
				},
				filters : [{
							property : "modesCollecte",
							value : /modco_distrisac/
						}]
			}
		});