/**
 * Modes de collecte : page avec boutons
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.collectMod.CollectModsButtonsList', {
			extend : 'Ext.Container',
			xtype : 'collectModsButtonsList_xtype',
			config : {
				title : 'Modes de collecte',
				scrollable : true,
				layout : {
					type : 'vbox'	
				}
			}
		}
);