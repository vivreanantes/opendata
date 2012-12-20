/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.garbages.GarbagesContainer', {
			extend : 'Ext.Container',
			xtype : 'garbagesContainer',
			
			config : {	
				layout : 'vbox',				
				items : [ {
						xtype:'garbagesForm',
						height:120,
						scrollable:false
				},

						{
							xtype : 'garbagesList',
							scrollable : 'vertical',
								
							flex : 1
							// title : 'Déchets'
					}

				]
			}

		});
