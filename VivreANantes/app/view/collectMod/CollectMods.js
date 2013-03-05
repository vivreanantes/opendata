/**
 * Informations
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.collectMod.CollectMods', {
			extend : 'Ext.NavigationView',
			xtype : 'collectMods',
			config : {
				// Titre dans barre de bouton principale
				title : 'Collecte',
				// Icone dans la barre de bouton principale
				iconCls : 'action',
				scrollable : true,
				items : [{

							title : 'Modes de collecte',
							scrollable : 'true',
							itemTpl : '{libelle}',
							xtype : 'list',
							store : 'CollectModStore'
						}]
			}
		});