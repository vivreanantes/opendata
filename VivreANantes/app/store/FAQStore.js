Ext.define('VivreANantes.store.FaqStore', {
			extend : 'Ext.data.Store',			
			id : 'faqstore', 	
			config :{
				autoLoad : true,
				model : 'VivreANantes.model.Faq',
				proxy : {
					type : 'ajax',
					url : 'data/faq.json',
					reader : {
						type : 'json',
						rootProperty : 'faq'
					}
				}	
			}
		});