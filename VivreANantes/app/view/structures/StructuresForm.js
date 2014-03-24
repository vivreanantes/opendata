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
										value : /modco_ecopoint|modco_ecotox|modco_decheterie|modco_encombrants_resume/g
									}, {
										text : "Ecotox",
										value : "modco_ecotox"
									}, {
										text : "Déchèteries / Ecopoints",
										value : "(modco_decheterie|modco_ecopoint)"
									}, {
										text : "Encombrants",
										value : "modco_encombrants_resume"	
									}]
						}, {
							xtype : 'selectfield',
							label : 'Ville',
							id : 'structuresFormSelectQuartier'
							,options : [{}]
							/*options : [{
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