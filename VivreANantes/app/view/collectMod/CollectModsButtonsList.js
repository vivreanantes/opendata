/**
 * Informations
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.collectMod.CollectModsButtonsList', {
			extend : 'Ext.Container',
			xtype : 'collectModsButtonsList_xtype',
			title : 'Modes de collectes',
			config : {
				fullscreen : true,
				layout : {
					type : 'vbox'
					
				}
				/*items : [{
							layout : {
								type : 'hbox',
								align : 'stretch'
							},
							items : [{
										// flex : 1,
										html : ''
									}, {
										height : 50,
										html : 'conteneur papier-carton'
									}, {
										height : 50,
										html : 'conteneur verre'
									}]

						}, {
							layout : {
								type : 'hbox',
								align : 'stretch'
							},
							items : [{
										// flex : 1,
										html : 'bacs bleus'
									}, {
										height : 50,
										html : 'bacs jaunes'
									}, {
										height : 50,
										html : 'sacs bleus',
										 flex : 1
									}]

						}, {
							layout : {
								type : 'hbox',
								align : 'stretch'
							},
							items : [{
										// flex : 1,
										html : 'sacs jaunes'
									}, {
										// height : 50,
										xtype: 'button',
										 html: 'Ecopoint /<br/>déchetteries<br/><img src="resources/images/bouton_ecotox_petit.png" />'
										// , cls: 'btnAction' // pour avoir les bonnes dimensions (100 par 100 pixels)
									}, {
										height : 50,
										html : 'Ecotox',
										 iconCls: 'refresh',
    									 iconMask: true, // Apparently this is required to show an icon in 2.1, but will not be needed in 2.2
										 flex : 1
									}]

						},{
							layout : {
								type : 'hbox',
								align : 'stretch'
							},
							items : [{
										// flex : 1,
										html : 'Le réemploi et les associations spécialisées'
									}, {
										// height : 50,
										//html : 'bouton 8'
               title: 'Récupération sur les points de vente',
                // iconCls: 'home',
                html: 'Ecotox<br/><img src="resources/images/bouton_ecotox_petit.png" />'
                // , iconCls : 'btnAction'
                , cls : 'btnAction'
									}, {
										// height : 50,
										// html : 'bouton 9'
										html : 'Ecotox',
										title : 'Point dépôt encombrant',
										iconCls: 'btnAction2',
				xtype: 'button'
				, cls: 'btnAction'
									}]

						}]*/

			}
		}
);