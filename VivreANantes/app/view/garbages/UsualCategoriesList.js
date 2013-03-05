Ext.define('VivreANantes.view.garbages.UsualCategoriesList', {
			extend : 'Ext.Container',
			xtype : 'usualCategoriesList',
			config : {
				layout : 'vbox',
				defaults : {
					xtype : 'container',
					layout : {
						type : 'hbox',
						align : 'middle'
					},
					defaults : {
						xtype : 'button',
						margin : 10
					}
				},
				items : [{
							items : [{
								text: 'Plastique'
										  // xtype: 'button',
										  // html:'<img src="resources" >Plastique',
        								// text: 'Plastique',
										// badgeText : 'Tous les plastiques'
									}, {
										text : 'Papiers-cartons'
									}, {
										text : 'Métal'
									}, {
										text : 'Déchets verts / bois'
									}, {
										text : 'Vaisselle / Pots'
									}, {
										text : 'Vêtements / tissu'
									}, {
										text : 'Encombrants'
									}, {
										text : 'Toxique'
									}, {
										text : 'Divers'
									}, {
										text : 'Nourriture'
									}, {
										text : 'Electronique'
									}]
						}, {
							xtype : 'garbagesList',
							scrollable : 'vertical',
							flex : 1
							// title : 'Déchets'
					}]
			}

		});