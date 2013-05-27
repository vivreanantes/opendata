/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.garbages.GarbagesContainer', {
			extend : 'Ext.Container',
			xtype : 'garbagesContainer',
			
			config : {
				layout : 'vbox',
				title:'Déchets',
				items : [{
							xtype : 'garbagesForm',
							height : 80,
							scrollable : false
						},
						{
							xtype : 'usualCategoriesList_xtype',
							height : 120
					}/*,
					
						{
							xtype : 'garbagesList',
							scrollable : 'vertical',
							hidden:true,
							flex : 1
					}*/

						// CRN_DEBUT
						, {
							xtype : 'advicesList'
							// hidden : 'true'
					}	, {
							xtype : 'commentsList_xtype'
							// hidden : 'true'
					}	, {
							xtype : 'wasteTreatmentsCategoriesList'
							// hidden : 'true'
					}	, {
							xtype : 'collectModList'
							// hidden : 'true'
					}
				// CRN_FIN

				]
			}

		});
