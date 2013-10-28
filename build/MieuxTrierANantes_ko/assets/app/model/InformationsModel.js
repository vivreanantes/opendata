Ext.define('VivreANantes.model.InformationsModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [
						{
							name : 'code'
						}, {
							name : 'libelle'
						},{
							name : 'description_fr'
						}, {
							name : 'image',
							defaultValue: 'image_defaut_mini.png'
						}, {
							name : 'bouton'
						}]
			}

		});