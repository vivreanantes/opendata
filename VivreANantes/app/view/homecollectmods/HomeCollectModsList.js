Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsList', {
	extend : 'Ext.List',
<<<<<<< HEAD
	xtype : 'HomeCollectModsList',
=======
	xtype : 'HomeCollectModsList_xtype',
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
	config : {
		iconCls : 'trash',	// icône en forme de poubelle
		title : 'Modes de collecte à domicile',
		// TODO regrouper par type de voie
<<<<<<< HEAD
		// TODO afficher SOIT jour collecte bacs bleus, SOIT bac jaune, SOIT trisac
		itemTpl : '<div>{denominationCompleteVoie}<br/><i>Collecte Trisac : {joursCollecteTriSac}</i></div>'
=======
		itemTpl : '<div>{denominationCompleteVoie}</div><div>Collecte Trisac : {joursCollecteTriSac}</div>'
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
	}
	
});