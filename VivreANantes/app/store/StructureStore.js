Ext.define('VivreANantes.store.Structure2Store', {
			extend : 'Ext.data.Store',			

			config :{
				autoLoad : false,
				model : 'VivreANantes.model.StructureModel',
				proxy : {
					type : 'ajax',
					url : 'data/structures2.json',
					reader : {
						type : 'json',
						rootProperty : 'structures'
					}
				}
			}
		});