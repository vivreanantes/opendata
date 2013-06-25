/**
 * Listes des fiches explicatives
 * 
 * @author Christian Renoulin
 */

Ext.define('VivreANantes.view.information.InformationsButtonsList', {
			extend : 'Ext.Container',
			xtype : 'informationsButtonsList_xtype',
			// extend : 'Ext.List',
			// xtype : 'informationsList_xtype',
			config : {
				// Titre dans barre de bouton principale
				title : 'Fiches',
				// Icone dans la barre de bouton principale
				iconCls : 'action',
				scrollable : true,
				itemTpl : '<img src=resources/images/{image} height=50 /> {libelle}'
			}
		});