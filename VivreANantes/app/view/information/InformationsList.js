/**
 * Listes des fiches
 * 
 * @author Christian Renoulin
 */

Ext.define('VivreANantes.view.information.InformationsList', {
			extend : 'Ext.List',
			xtype : 'informationsList_xtype',
			config : {
				// Titre dans barre de bouton principale
				title : 'Fiches',
				// Icone dans la barre de bouton principale
				iconCls : 'action',
				scrollable : true,
				itemTpl : '<img src=resources/images/{image} height=50 /> {libelle}',
				store : {
					autoLoad : true,
					fields : ['code', 'libelle', 'description_fr', 'image'],
					proxy : {
						type : 'ajax',
						url : 'data/informations.json',
						reader : {
							type : 'json',
							rootProperty : 'informations'
						}
					}
				}
			}
		});