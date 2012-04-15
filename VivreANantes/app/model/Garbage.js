Ext.define('VivreANantes.model.Garbage', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							name : 'id',
							type : 'int'
						}, {
							name : 'code',
							type : 'string',
							mapping : 'col_0'
						}, {
							name : 'nom',
							type : 'string',
							mapping : 'col_1'
						},

						{
							name : 'description',
							type : 'string',
							mapping : 'col_5'
						},
						{
							name : 'image',
							type : 'string',
							defaultValue : 'bouteille_cidre.png',
							mapping : 'col_7'
						},
						
						// TODO Association Ext
						{
							name : 'categorieUsuelle',
							type : 'string',
							mapping : 'col_2'
						}, {
							name : 'categorie',
							type : 'string',
							mapping : 'col_3'
						}, {
							name : 'conseils',
							type : 'string',
							mapping : 'col_6'
						}, {
							name : 'modeDeCollecte',
							type : 'string',
							mapping : 'col_4'
						}]
			}

		});