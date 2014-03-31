/**
 * Vue de Description de l'application
 * 
 */
Ext.define('VivreANantes.view.about.Description', {
	extend : 'Ext.Container',
	xtype : 'xtype_description',
	config : {
		title : 'A propos',
		iconCls : 'team', // icône représentant plusieurs visages
		styleHtmlContent : true,
		items : [{
			html : ""
		}]
	}
});