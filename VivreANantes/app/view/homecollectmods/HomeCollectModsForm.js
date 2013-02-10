/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'HomeCollectModsForm',
			config : {
				items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Recherche',
							id : 'homeCollectModsFormText'
						}, {
							xtype : 'selectfield',
							label : 'Type de voie',
							id : 'homeCollectModsFormSelect',
							options : [
						            {text : 'Tous', value : 'all'},
						            {text : "Allée", value : "Allée" },
									{text : "Rue", value : "Rue" },
									{text : "Ruelle", value : "Ruelle" },
									{text : "Sentier", value : "Sentier" },
									{text : "Square", value : "Square" },
									{text : "Venelle", value : "Venelle" }
								]
						}
				]
			}

		});