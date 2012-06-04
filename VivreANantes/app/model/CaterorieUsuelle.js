Ext.define('VivreANantes.model.CategorieUsuelle', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							name : 'id',
							type : 'int'
						}, {
							name : 'code',
							type : 'string',
							mapping : 'code'
						}, {
							name : 'nom',
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