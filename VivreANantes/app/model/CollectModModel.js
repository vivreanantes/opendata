Ext.define('VivreANantes.model.CollectModModel', {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'code'
						}, {
							name : 'libelle'
						}, {
							name : 'estSousModeCollecte'
						}, {
							name : 'description'
						}, {
							name : 'conseils'
						}, {
							name : 'recyclable'
						}, {
							name : 'image',
							type : 'string',
							convert : function(value, record) {
								if (value == null || value === "") {
									return "image_defaut.png";
								}
								return value;
							}
						}, {
							name : 'bouton'
						}]
			}
		});