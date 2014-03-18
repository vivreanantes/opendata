Ext.define('VivreANantes.view.trisac.TrisacList', {
	extend : 'Ext.List',
	xtype : 'TrisacList_xtype',
	config : {
		iconCls : 'action', // icône en forme de ?
		title : 'Modes de collecte à domicile',
		itemTpl : '<div>{type} - {libelle} <br/>{plagesHoraires_prochainsJours}</div>'
	}
});