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
				}
			}
});