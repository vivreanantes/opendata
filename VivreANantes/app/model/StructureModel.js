Ext.define('VivreANantes.model.StructureModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							name : 'code',
							type : 'string'
						}, {
							name : 'libelle',
							type : 'string'
						}, {
							name : 'latitude',
							type : 'float'
						}, {
							name : 'longitude',
							type : 'float'
						}, {
							name:'description_fr',
							type:'string'
						},{
							name:'modesCollecte',
							type:'string',
							defaultValue:'d'
						},{
							name:'src',
							type:'string'
						},{
							name:'numeroTelephone',
							type:'string'
						},{
							name:'adresseTemp',
							type:'string'
						}]
			}
		});