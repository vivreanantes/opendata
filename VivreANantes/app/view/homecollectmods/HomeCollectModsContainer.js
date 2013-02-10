/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à domicile filtrée par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsContainer', {
			extend : 'Ext.Container',
<<<<<<< HEAD
			xtype : 'HomeCollectModsContainer',
=======
			xtype : 'HomeCollectModsContainer_xtype',
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
			
			config : {	
				layout : 'vbox',				
				items : [ {
<<<<<<< HEAD
						xtype:'HomeCollectModsForm',
=======
						xtype:'HomeCollectModsForm_xtype',
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
						height:120,
						scrollable:false
				},

						{
<<<<<<< HEAD
							xtype : 'HomeCollectModsList',
=======
							xtype : 'HomeCollectModsList_xtype',
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
							scrollable : 'vertical',
							flex : 1
					}

				]
			}

		});
