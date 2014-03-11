Ext.define('VivreANantes.store.TrisacStore', {
			extend : 'Ext.data.Store',
			id : 'trisacstore',
			config : {
				autoLoad : true,
				model : 'VivreANantes.model.StructureModel',
				proxy : {
					type : 'ajax',
					url : 'data/structures.json',
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