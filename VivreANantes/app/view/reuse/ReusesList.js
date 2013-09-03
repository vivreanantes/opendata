Ext.define('VivreANantes.view.reuses.ReusesList', {
	extend : 'Ext.List',
	xtype : 'reusesList_xtype',
	config : {
		// iconCls : 'action', // icône en forme de ?
		// title : 'Modes de collecte à domicile',
		// TODO : initialiser ce template avec translate 
		itemTpl : '<div>{libelle} {plagesHoraires_prochainsJours}<br/>{plagesHoraires_lisible}</div>'
	}

	

});