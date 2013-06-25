/**
 * Page des Fiches explicatives
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.information.Informations', {
			extend : 'Ext.NavigationView',
			xtype : 'informations',
			config : {
				// Titre dans barre de bouton principale
				title : 'Fiches',
				// Icone dans la barre de bouton principale
				iconCls : 'action',
				scrollable : true,
				items : [{
							xtype : 'informationsButtonsList_xtype'
						}]

			}
		});