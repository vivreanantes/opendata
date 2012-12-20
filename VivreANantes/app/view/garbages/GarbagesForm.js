Ext.define('VivreANantes.view.garbages.GarbagesForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'garbagesForm',
			config : {
				items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Name',
							id : 'garbagesFormText'
						}, {
							xtype : 'selectfield',
							label : 'Choose one',
							id : 'garbagesFormSelect',
							options : [{
										text : 'Tous',
										value : 'all'
									}, {
										text : 'Plastique',
										value : 'cu_plastique'
									}, {
										text : 'Divers',
										value : 'cu_divers'
									}]
						}
				]
			}

		});