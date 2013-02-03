/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.garbages.GarbagesForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'garbagesForm',
			config : {
				items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Recherche',
							id : 'garbagesFormText'
						}, {
							xtype : 'selectfield',
							label : 'Catégorie',
							id : 'garbagesFormSelect',
							options : [
						            {text : 'Tous', value : 'all'},
						            {text : "Plastique", value : "cu_plastique" },
									{text : "Papiers-cartons", value : "cu_papierscartons" },
									{text : "Métal", value : "cu_metal" },
									{text : "Déchets verts / bois", value : "cu_vertbois" },
									{text : "Verre / Vaisselle / Pots", value : "cu_verrevaisselle" },
									{text : "Vêtements / tissu", value : "cu_vetementtissu"},
									{text : "Encombrants", value : "cu_encombrant" },
									{text : "Toxique", value : "cu_toxique" },
									{text : "Divers", value : "cu_divers" },
									{text : "Nourriture", value : "cu_nourriture" },
									{text : "Electronique", value : "cu_electronique" }
								]
						}
				]
			}

		});