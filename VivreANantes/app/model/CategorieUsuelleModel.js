Ext.define('VivreANantes.model.CategorieUsuelleModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [/*{
							name : 'id',
							type : 'int',
							defaultValue : 0
						},*/
						{
							// 'code' dans json,
							// 'id' dans js
							name : 'code',
							type : 'string',
							mapping : 'id'
						}, {
							// 'nom' dans json, 'libelle' dans js
							name : 'nom',
							type : 'string',
							mapping : 'libelle'
						}, {
							// 'description_fr' dans json,
							// 'descrption' dans js
							name : 'description_fr',
							type : 'string',
							mapping : 'descrption'
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
						}, {
							name : 'image',
							type : 'string'
						}, {
							name : 'accueil',
							type : 'string'
						}]
			}
		});