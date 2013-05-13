/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à
 * domicile filtrée par cette recherche en dessous
 */
Ext.define('VivreANantes.view.structures.StructuresContainer', {
			extend : 'Ext.Container',
			xtype : 'structuresContainer_xtype',

			config : {
				layout : 'vbox',
				items : [{
					xtype : 'titlebar',
					docked : 'top',
					title : 'Structures de collecte',
					items : [

					{
								xtype : 'segmentedbutton',
								id : 'structuresButtons',
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

												/*
												 * - change view something like
												 * a tabpanel.
												 */
												// this.parent.setActiveItem();
												// Ext.ComponentManager.get("services_id").setActiveItem("option_2");
											}
										}]
							}

					]

					},

				{
					xtype : 'structuresForm_xtype',
					height : 120,
					scrollable : false
				},

				{
					xtype : 'structuresList_xtype',
					scrollable : 'vertical',
					flex : 1
				}

				]
			}

		});
