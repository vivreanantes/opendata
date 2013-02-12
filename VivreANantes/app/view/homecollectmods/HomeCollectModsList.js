Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsList', {
	extend : 'Ext.List',
	xtype : 'HomeCollectModsList',
	config : {
		iconCls : 'trash', // icône en forme de poubelle
		title : 'Modes de collecte à domicile',
		// TODO regrouper par type de voie
		// On affiche {joursCollecteBacsBleus}{joursCollecteBacsJaunes}{joursCollecteTriSac} car un seul des trois est valorisé.
		itemTpl : '<div>{denominationCompleteVoie}{complementInformation}<br/>Collecte "{modesCollecte}" : {joursCollecteBacsBleus}{joursCollecteBacsJaunes}{joursCollecteTriSac}</div>'
	}

	

});