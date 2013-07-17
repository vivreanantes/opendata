/**
 * Déchets : page avant boutons
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.garbages.GarbageButtonsPanel', {
	extend : 'Ext.Container',
	xtype : 'garbagesButtonsPanel_xtype',
	scrollable : true,
	config : {
		title : "Déchets toxiques",
		layout : {
			type : 'vbox'
		},
		items : [{
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_1",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_2",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_3",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_4",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_5",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_6",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_7",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_8",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_9",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_10",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_11",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_12",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}/* , {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_13",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_14",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_15",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_16",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_17",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_18",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_19",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_20",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_21",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_22",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_23",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_24",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_25",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_26",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_27",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_28",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_29",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_30",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_31",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_32",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_33",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_34",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_35",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_36",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "garbagesButtonsPanel_garbage_37",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_38",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}, {
				id : "garbagesButtonsPanel_garbage_39",
				xtype : "button",
				tpl : "{label}<br/><img src='resources/images/{image}' width='60px' />", data : { label:"", image : ""}
			}]
		}*/

		]
	}
});