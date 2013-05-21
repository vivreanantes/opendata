/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à
 * domicile filtrée par cette recherche en dessous
 */
Ext.define('VivreANantes.view.reuses.ReusesContainer', {
			extend : 'Ext.Container',
			xtype : 'reusesContainer_xtype',

			config : {
				layout : 'vbox',
				items : [{
					xtype : 'titlebar',
					docked : 'top',
					title : 'Structures de réemploi'
					/*, items : [

					{
								xtype : 'segmentedbutton',
								id : 'reusesButtons',
								allowDepress : false,
								items : [{
											text : '1 jour',
											id : 'oneday',
											pressed : 'true'
										}, {
											text : '7 jours',
											id : 'sevendays'
										}, {
											text : 'Tous',
											id : 'all',
											handler : function() {
												console.log("pressed 2");
											}
										}]
							}

					]
*/
					},

				{
					xtype : 'reusesForm_xtype',
					height : 120,
					scrollable : false
				},

				{
					xtype : 'reusesList_xtype',
					scrollable : 'vertical',
					flex : 1
				}

				]
			}

		});
