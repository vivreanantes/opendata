/**
 * Vue du Container de la Carte
 */
Ext.define('VivreANantes.view.geo.MapContainer', {
			extend : 'Ext.Container',
			xtype : 'mapContainer',
			config : {
				layout : 'vbox',
				title : 'Carte',
				items : [
					{
							xtype : 'toolbar',
							docked : 'top',													
							items : [{
										xtype : 'button',
										iconCls : 'refresh',
										ui : 'plain',
										iconMask : true
									}]
						}, {
							xtype : 'vanmaposm'
						}],

				iconCls : 'locate',
				autoDestroy : false
			}
		});