/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.reuses.ReusesForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'reusesForm_xtype',
			config : {
				items : [{
							xtype : 'selectfield',
							label : 'Type',
							id : 'reusesFormSelectType',
							options : [{
										text : 'Tous',
										value : 'all'
									}, {
										text : "Meuble",
										value : "smco_reempmeuble"
									}, {
										text : "Informatique",
										value : "smco_reempinfo"
									}]
						}, {
							xtype : 'selectfield',
							label : 'Quartier',
							id : 'reusesFormSelectQuartier',
							options : [{
										text : 'Tous',
										value : 'all'
									}, {
										text : "Chantenay",
										value : "Chantenay"
									}, {
										text : "Breil / Dervallières / Bellevue",
										value : "Breil Dervallières Bellevue"
									}, {
										text : "Hauts Pavé / Saint Félix",
										value : "Hauts Pavé Saint Félix"
									}, {
										text : "Ile De Nantes",
										value : "Ile De Nantes"
									}, {
										text : "Nantes Nord / Barberie",
										value : "Nantes Nord Barberie"
									}, {
										text : "Erdre / Ranzay / Bottière / Perray",
										value : "Erdre Ranzay Bottière Perray"
									}, {
										text : "Malakoff",
										value : "Malakoff"
									}, {
										text : "Saint Donatien",
										value : "Saint Donatien"
									}]
						}]
			}

		});