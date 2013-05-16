Ext.define('VivreANantes.model.CategorieUsuelle', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							name : 'id',
							type : 'int',
							defaultValue : 0
						}, {
							name : 'code',
							type : 'string'
						}, {
							// 'nom' dans json, 'libelle' dans js
							name : 'nom',
							type : 'string',
							mapping : 'libelle'
						}, {
							name : 'description_fr',
							type : 'string'
						}, {
							// 'sousCategories' dans json,
							// 'sous_categories' dans js
							name : 'sousCategories',
							type : 'string',
							mapping : 'sous_categories'
						}, {
							// 'estSousCategorie' dans json,
							// 'est_sous_sategorie' dans js
							name : 'estSousCategorie',
							type : 'string',
							mapping : 'est_sous_sategorie'
						}, {
							name : 'conseils',
							type : 'string'
						}, {
							name : 'source',
							type : 'string'
						}, {
							name : 'statut',
							type : 'string'
						}]
			}
		});