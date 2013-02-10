Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsList', {
	extend : 'Ext.List',
	xtype : 'HomeCollectModsList',
	config : {
		iconCls : 'trash',	// icône en forme de poubelle
		title : 'Modes de collecte à domicile',
		// TODO regrouper par type de voie
		// TODO afficher SOIT jour collecte bacs bleus, SOIT bac jaune, SOIT trisac
		itemTpl : '<div>{denominationCompleteVoie}<br/><i>Collecte Trisac : {joursCollecteTriSac}</i></div>'
	}
	
});