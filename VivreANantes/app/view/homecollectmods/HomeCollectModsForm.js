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
					label : 'Rue',
					id : 'homeCollectModsFormText',
					placeHolder : "Sans 'rue'. Ex : Alain Gerbault"
				}
		]}
});