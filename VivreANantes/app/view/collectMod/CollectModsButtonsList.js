/**
 * Informations
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.collectMod.CollectModsButtonsList', {
			extend : 'Ext.Container',
			xtype : 'collectModsButtonsList_xtype',
			config : {
				fullscreen : true,
				layout : {
					type : 'vbox'
				},
				items : [{
							layout : {
								type : 'hbox',
								align : 'stretch'
							},
							items : [{
										// flex : 1,
										html : 'conteneur métal/plastique/brique'
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
										height : 50,
										html : 'Ecopoint/déchetteries'
									}, {
										height : 50,
										html : 'Ecotox',
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
										// html : 'Ecotox<BR/>',
										title : 'Point dépôt encombrant',
										iconCls: 'btnAction2',
				xtype: 'button'
				, cls: 'btnAction'
									}]

						}]

				/*
				 * layout : { type : 'hbox', align : 'stretch' }, items : [{
				 * width : 50, flex : 1, // this needs to be flexy as well
				 * layout : { type : 'vbox', align : 'stretch' }, items : [{
				 * flex : 1, html : '1st' }, { height : 50, html : '2nd' }, {
				 * height : 50, html : '3nd' }] }, { flex : 1, html : 'Large' }]
				 */
			}
		}

/*
 * extend : 'Ext.NavigationView', xtype : 'collectMods', config : { // Titre
 * dans barre de bouton principale title : 'Collecte', // Icone dans la barre de
 * bouton principale iconCls : 'action', scrollable : true, items : [{
 * 
 * title : 'Modes de collecte', scrollable : 'true', itemTpl : '{libelle}',
 * xtype : 'list', store : 'CollectModStore' }] } }
 */);