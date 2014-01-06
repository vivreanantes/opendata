/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsForm', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.field.Text', 'Ext.field.Select'],
	xtype : 'homecollectmodsform_xtype',
	config : {
		items : [{
					xtype : 'textfield',
					name : 'name',
					label : 'Adresse recherchée',
					id : 'homeCollectModsFormText',
					placeHolder : 'Sans dénomination. Exemple : Alain Gerbault'
				},
				{
					xtype : 'label',
					html : '<I>Source : Open Data Nantes, valable <font color=red>à partir du 16/09/2013</font></I>'
				}
				]
	}

});