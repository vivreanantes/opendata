Ext.define('VivreANantes.view.structures.StructuresList', {
	extend : 'Ext.List',
	xtype : 'structuresList_xtype',
	config : {
		itemTpl : '<div><i>{type}</i> {libelle} <br/>{plagesHoraires_prochainsJours}</div>'
	}
});