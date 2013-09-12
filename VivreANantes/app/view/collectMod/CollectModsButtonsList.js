/**
 * Modes de collecte : page avec boutons
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.collectMod.CollectModsButtonsList', {
			extend : 'Ext.Container',
			xtype : 'collectModsButtonsList_xtype',
			scrollable : true,
			config : {
				title : 'Modes de collectes',
				layout : {
					type : 'vbox'	
				}
			}
		}
);