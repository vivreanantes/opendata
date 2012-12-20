Ext.define('VivreANantes.model.CategorieUsuelle', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							name : 'id',
							type : 'int'
						}, {
							name : 'value',
							type : 'string',
							mapping : 'code'
						}, {
							name : 'text',
							type : 'string',
							mapping : 'libelle'
						},
						{
							name : 'conseils',
							type : 'string',
							mapping : 'conseils'
						}]
			}

		});