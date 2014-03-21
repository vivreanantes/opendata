/**
 * Modes de collecte : page avec boutons
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.collectMod.CollectModsButtonsList', {
			extend : 'Ext.Container',
			xtype : 'collectModsButtonsList_xtype',
			/*config : {
				title : 'Modes de collectes',
				scrollable : true,
				layout : {
					type : 'vbox'	
				}
			}*/
			config : {
				title : 'Modes de collectes',
				iconCls : 'action',
				scrollable : true,
				layout : {
					type : 'vbox'
				},
				scrollable : true,
				items : [{
					layout : {
						type : 'hbox',
						align : 'strech'
					},
					items : [{
						id : "collectModsButtonsList_1",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_2",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_3",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}]
				}, {
					layout : {
						type : 'hbox',
						align : 'strech'
					},
					items : [{
						id : "collectModsButtonsList_4",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_5",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_6",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}]
				}, {
					layout : {
						type : 'hbox',
						align : 'strech'
					},
					items : [{
						id : "collectModsButtonsList_7",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_8",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_9",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}]
				}, {
					layout : {
						type : 'hbox',
						align : 'strech'
					},
					items : [{
						id : "collectModsButtonsList_10",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_11",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_12",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}]
				} , {
					layout : {
						type : 'hbox',
						align : 'strech'
					},
					items : [{
						id : "collectModsButtonsList_13",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_14",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_15",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}]
				}, {
					layout : {
						type : 'hbox',
						align : 'strech'
					},
					items : [{
						id : "collectModsButtonsList_16",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_17",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}, {
						id : "collectModsButtonsList_18",
						xtype : "button", height : '120px', width : '33%', 
						tpl : "<center><font size='3'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : "image_defaut_mini.png"}
					}]
				}]
			}
		}
);