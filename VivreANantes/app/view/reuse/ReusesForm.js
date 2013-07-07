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
										// value : 'all'
										value : /smco_reempdivers|smco_reempcartouchetoner|smco_reempelectromenag|smco_reempinfo|smco_reempjouet|smco_reemplivreCD|smco_reempmeuble|smco_reempvet|smco_conteneurlerelais/g
									}, {
										text : "Cartouches d'encres/tuners imprimantes",
										value : "smco_reempcartouchetoner"
									}, {
										text : "Electroménager",
										value : "smco_reempelectromenag"
									}, {
										text : "Informatique",
										value : "smco_reempinfo"
									}, {
										text : "Jouets",
										value : "smco_reempjouet"
									}, {
										text : "Livres, CDs, BDs...",
										value : "smco_reemplivreCD"
									}, {
										text : "Meubles",
										value : "smco_reempmeuble"
									}, {
										text : "Vêtements (dont Le Relais)",
										value : /smco_reempvet|smco_conteneurlerelais/g
									}, {
										// Celui-ci n'est pas visible (le 8ème élément)
									 text : "Divers",
									 	value : "smco_reempdivers"
									}
									]
						}, {
							xtype : 'selectfield',
							label : 'Quartier',
							id : 'reusesFormSelectQuartier',
							options : [{}]
							/*,
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
									}]*/
						}]
			}

		});