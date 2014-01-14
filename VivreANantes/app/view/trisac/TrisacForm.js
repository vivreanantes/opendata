/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.trisac.TrisacForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'TrisacForm_xtype',
			config : {
				items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Nom ',
							id : 'trisacFormText'
						}
						, {
							xtype : 'selectfield',
							label : 'Quartier',
							id : 'trisacFormSelect'
							,options : [{}]
						},
				{
					xtype : 'label',
					html : '<I><font color=red>Open Data Nantes</font>, à partir de 01/2014</I>'
				}]
			}

		});