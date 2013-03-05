Ext.define('VivreANantes.model.Faq', {
			extend : 'Ext.data.Model',

			config : {
				fields : [
						{
							name : 'code'
						}, {
							name : 'libelle'
						},{
							name : 'description',
							type : 'string',
							mapping : 'description_fr'
						}, {
							name : 'element'
						}]
			}

		});