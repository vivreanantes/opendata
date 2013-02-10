/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à domicile filtrée par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsContainer', {
			extend : 'Ext.Container',
			xtype : 'HomeCollectModsContainer',
			
			config : {	
				layout : 'vbox',				
				items : [ {
						xtype:'HomeCollectModsForm',
						height:120,
						scrollable:false
				},

						{
							xtype : 'HomeCollectModsList',
							scrollable : 'vertical',
							flex : 1
					}

				]
			}

		});
