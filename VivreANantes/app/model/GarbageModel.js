Ext.define('VivreANantes.model.GarbageModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							name : 'id',
							type : 'int'
						}, {
							name : 'code',
							type : 'string'
						}, {
							name : 'nom',
							type : 'string'
						}, {
							name : 'description',
							type : 'string'
							// mapping : 'description_fr'
					}	, {
							name : 'concerne_aussi',
							type : 'string'
						}, {
							name : 'image',
							type : 'string',
							convert : function(value, record) {
								if (value == null || value === "") {
									return "image_defaut.png";
								}
								return value;
							}
							// Utilisé en remplacement de null, mais pas d'une
						// chaîne vide
						// defaultValue : '',
					}	, {
							// 'categoriesUsuelles' dans json,
							// 'categorie_usuelle' dans js
							name : 'categorie_usuelle',
							type : 'string',
							mapping : 'categoriesUsuelles'
						}, {
							// 'categorieTraitement' dans json,
							// 'categorie_traitement' dans js
							name : 'categorie_traitement',
							type : 'string',
							mapping : 'categorieTraitement'
						}, {
							name : 'conseils',
							type : 'string',
							mapping : 'conseils'
						}, {
							// 'modesdecollecte' dans json, 'modeDeCollecte'
							// dans js
							name : 'modesCollecte',
							type : 'string',
							mapping : 'modeDeCollecte'
						}]
			}

		});