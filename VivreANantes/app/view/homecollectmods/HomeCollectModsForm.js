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
					label : 'Adresse',
					id : 'homeCollectModsFormText',
					placeHolder : 'Sans dénomination. Ex : Alain Gerbault'
				}/*,
				{
					xtype : 'label',
					html : '<I>Source <font color=red>Open Data Nantes</font></I>'
				}*/
		]}
});