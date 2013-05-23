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
							name : 'image'
						}]
			}
		});