/**
 * Vue du Container de la Carte
 */
Ext.define('VivreANantes.view.geo.MapContainer', {
			extend : 'Ext.Container',
			
			xtype : 'mapContainer',			
			config : {
				layout:'fit',
				title : 'Carte',
				items : [{
							xtype : 'toolbar',
							docked : 'top',
							title : 'Carte',
							items : [{										
										xtype : 'button',
										iconCls : 'refresh',
										ui : 'plain',
										iconMask : true
									}]
						}],

				iconCls : 'maps',
				autoDestroy : false			
			}
		});