/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.structures.StructuresForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'structuresForm_xtype',
			config : {
				items : [{
							xtype : 'selectfield',
							label : 'Type',
							id : 'structuresFormSelectType',
							options : [{
										text : 'Tous',
										value : 'all'
									}, {
										text : "Réutilisation",
										value : "reemploi"
									}, {
										text : "Distribution Trisac",
										value : "distrisac"
									}, {
										text : "Ecotox",
										value : "ecotox"
									}, {
										text : "Déchetteries / EcopointsSaint Donatien",
										value : "dechetterie / ecopoint"
									}]
						}, {
							xtype : 'selectfield',
							label : 'Quartier',
							id : 'structuresFormSelectQuartier',
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