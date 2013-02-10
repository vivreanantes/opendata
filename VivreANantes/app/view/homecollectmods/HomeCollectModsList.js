Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsList', {
	extend : 'Ext.List',
	xtype : 'HomeCollectModsList_xtype',
	config : {
		iconCls : 'trash',	// icône en forme de poubelle
		title : 'Modes de collecte à domicile',
		// TODO regrouper par type de voie
		itemTpl : '<div>{denominationCompleteVoie}</div><div>Collecte Trisac : {joursCollecteTriSac}</div>'
	}
	
});