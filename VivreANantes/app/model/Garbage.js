Ext.define('VivreANantes.model.Garbage', {
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
							mapping : 'nom'
						},

						{
							name : 'description',
							type : 'string',
							mapping : 'concerne_aussi'
						},
						{
							name : 'image',
							type : 'string',
							defaultValue : 'bouteille_cidre.png',
							mapping : 'image'
						},
						
						// TODO Association Ext
						{
							name : 'categorieUsuelle',
							type : 'string',
							mapping : 'categorie_usuelle'
						}, {
							name : 'categorie',
							type : 'string',
							mapping : 'categorie_traitement'
						}, {
							name : 'conseils',
							type : 'string',
							mapping : 'conseils'
						}, {
							name : 'modeDeCollecte',
							type : 'string',
							mapping : 'modesdecollecte'
						}]
			}

		});