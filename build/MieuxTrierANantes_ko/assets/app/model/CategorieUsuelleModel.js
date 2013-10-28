Ext.define('VivreANantes.model.CategorieUsuelleModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							// 'code' dans json, 'id' dans js
							name : 'code',
							type : 'string'
						}, {
							// 'nom' dans json, 'libelle' dans js
							name : 'libelle',
							type : 'string',
							mapping : 'nom'
						}, {
							// 'description_fr' dans json,
							// 'description' dans js
							name : 'description',
							type : 'string',
							mapping : 'description_fr'
						}, {
							// 'sousCategories' dans json,
							// 'sous_categories' dans js
							name : 'sous_categories',
							type : 'string',
							mapping : 'sousCategories'
						}, {
							// 'estSousCategorie' dans json,
							// 'est_sous_sategorie' dans js
							name : 'est_sous_sategorie',
							type : 'string',
							mapping : 'estSousCategorie'
						}, {
							name : 'conseils',
							type : 'string'
						}, {
							name : 'source',
							type : 'string'
						}, {
							name : 'statut',
							type : 'string'
						}, {
							name : 'image',
							type : 'string'
						}, {
							name : 'bouton',
							type : 'string'
						}]
			}
		});