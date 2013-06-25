/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.garbages.GarbagesContainer', {
			extend : 'Ext.Container',
			xtype : 'garbagesContainer',

			config : {
				layout : 'vbox',
				title : 'Déchets',
				items : [{
							xtype : 'garbagesForm_xtype',
							height : 80,
							scrollable : false
						}, {
							xtype : 'usualCategoriesButtonsPanel_xtype'
						}, {
							xtype : 'garbagesList_xtype'
						}, {
							xtype : 'advicesList_xtype'
						}, {
							xtype : 'commentsList_xtype'
						}, {
							xtype : 'wasteTreatmentsCategoriesList'
						}, {
							xtype : 'collectModList_xtype'
						}, {
							xtype : 'informationsList_xtype'
						}, {
							xtype : 'usualCategoriesList2_xtype'
						}
				]
			}

		});
