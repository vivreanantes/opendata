/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à
 * domicile filtrée par cette recherche en dessous
 */
Ext.define('VivreANantes.view.reuses.ReusesContainer', {
			extend : 'Ext.Container',
			xtype : 'reusesContainer_xtype',
            requires: ['VivreANantes.view.reuses.ReusesForm','VivreANantes.view.reuses.ReusesList'],
			config : {
				layout : 'vbox',
				title : "Associations et entreprises de réemploi",
				items : [{
							xtype : 'reusesForm_xtype',
							height : 120,
							scrollable : false
						}, {
							xtype : 'reusesList_xtype',
							scrollable : 'vertical',
							flex : 1
						}]
			}
		});
