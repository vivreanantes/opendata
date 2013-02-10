/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'HomeCollectModsForm_xtype',
			config : {
				items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Recherche',
							id : 'HomeCollectModsFormText'
						}, {
							xtype : 'selectfield',
							label : 'Type de voie',
							id : 'HomeCollectModsFormSelect',
							options : [
						            {text : 'Tous', value : 'all'},
						            {text : "Allée", value : "rue" },
									{text : "Rue", value : "rue" },
									{text : "Ruelle", value : "ruelle" }
								]
						}
				]
			}

		});