Ext.define('VivreANantes.view.trisac.TrisacList', {
	extend : 'Ext.List',
	xtype : 'TrisacList_xtype',
	config : {
		iconCls : 'action', // icône en forme de ?
		title : 'Modes de collecte à domicile',
		//itemTpl : 'Quartiers : {quartier} <div>{libelle}</div>Type de distribution : {soustype} ',
		itemTpl : '<div>{type} - {libelle} {ouvertAujourdhuiEtDemain} <br/>{plagesHoraires2}</div>'
	}

	

});