/**
 * Page des modes de collecte
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.collectMod.CollectMods', {
			extend : 'Ext.navigation.View',
			xtype : 'collectMods_xtype',
			config : {
				autoDestroy : false,
				iconCls : 'maps',
				title : 'Modes de collectes',
				items : [{
							xtype : 'collectModsButtonsList_xtype'
						}],
				defaultBackButtonText : "Retour_"
			}
		});