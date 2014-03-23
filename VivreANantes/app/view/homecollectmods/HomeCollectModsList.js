Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsList', {
	extend : 'Ext.List',
	xtype : 'homecollectmodslist_xtype',
	config : {
		iconCls : 'trash', // icône en forme de poubelle
		title : 'Modes de collecte à domicile',
		// TODO regrouper par type de voie
		// On affiche {joursCollecteBacsBleus}{joursCollecteBacsJaunes}{joursCollecteTriSac} car un ou deux des trois est valorisé.
		itemTpl : '<div>{dcv}{ci}<br/>Collecte "{modesCollecte}" : {jct} {jcbb} {jcbj} {src}</div>'
	}

	

});