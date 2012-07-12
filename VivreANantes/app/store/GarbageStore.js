Ext.define('VivreANantes.store.GarbageStore', {
			extend : 'Ext.data.Store',
			model : 'VivreANantes.model.Garbage',
			id : 'garbagestore',
			autoLoad : true,
			/*getGroupString : function(record) {
				return record.get('categorieUsuelle');
			},*/
			proxy : {
				type : 'ajax',
				url : 'data/dechets.json',
				reader : {
					type : 'json',
					rootProperty : 'garbages'
				}
			}
		});