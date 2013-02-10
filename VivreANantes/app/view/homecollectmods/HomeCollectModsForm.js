/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
<<<<<<< HEAD
			xtype : 'HomeCollectModsForm',
=======
			xtype : 'HomeCollectModsForm_xtype',
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
			config : {
				items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Recherche',
<<<<<<< HEAD
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
=======
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
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
								]
						}
				]
			}

		});