Ext.define('VivreANantes.model.Structure', {
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
						}]
			}
		});