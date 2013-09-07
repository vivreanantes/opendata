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
							type : 'string',
							defaultValue: ''
					}	,{
							name : 'nom_description_sansAccents',
							type : 'string',
							convert: function(value, record) {
								var result = "";
								var result2 = "";
								if (record.data["nom"]!=null && record.data["nom"]!="") {
									result = record.data["nom"];
									result = result.toLowerCase();
									result = result.replace(/[ÀàÁáÂâÃãÄäÅåÆæĀāĂăĄą]/g,"a");
									result = result.replace(/[ÈèÉéÊêËëĒēĔĕĖėĘęĚě]/g,"e");
									// TODO Remplace Chaussures par Chaussure
								}
								if (record.data["description"]!=null && record.data["description"]!="") {
									result2 = record.data["description"];
									result2 = result2.toLowerCase();
									result2 = result2.replace(/[ÀàÁáÂâÃãÄäÅåÆæĀāĂăĄą]/g,"a");
									result2 = result2.replace(/[ÈèÉéÊêËëĒēĔĕĖėĘęĚě]/g,"e");
									// TODO Remplace Chaussures par Chaussure
								}
								return result + " " + result2;
							}
						},
						{
							name : 'concerne_aussi',
							type : 'string'
							// Vide au chargement, mais remplacé par : label_concerne_aussi : description
						}, {
							name : 'image',
							type : 'string',
							defaultValue: 'image_defaut_mini.png'
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