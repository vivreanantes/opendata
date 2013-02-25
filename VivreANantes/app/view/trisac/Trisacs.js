/**
 * Trisacs
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.trisac.Trisacs', {
			extend : 'Ext.NavigationView',
			xtype : 'trisacs',

			config : {
				// Titre dans barre de bouton principale
				title : 'Trisacs',
				 // Icone dans la barre de bouton principale
				iconCls : 'action',
				items : [
						// Remplace title : 'Trisacs',
						// {
						// xtype: 'titlebar', // mieux que toolbar
						// docked:'top',
						// title:'Trisacs sur le tri',
						// items:[{
						// // Par défaut les xtype sont des 'button'
						// text:'ping',
						// align:'right'
						// }, {
						// text:'clear'
						// }]
						// },
						{
					cls : 'trisacCss',
					// FIXME : les titles sont coupés dans Trisacs.js : 'Trisacs sur le tri' devient "'Trisacs sur le...' à l'affichage 
					title : 'Trisacs sur le tri',
					scrollable : 'true',
					// FIXME pb sur les images dans Trisacs.js : les '\' sont remplacés par rien, donc les liens sont faux.
					itemTpl : '{libelle}',
					// /i pose un pb
					// itemTpl : ['<img src=resources\images\{image} />',
					// '{name}'].join(''),
					xtype : 'list',
					store : {
						autoLoad : true,
						fields : ['code', 'libelle', 'description_fr', 'adresseTemp', 'plageHoraire'],
						// fields: ['title', 'author', 'content'],
						proxy : {
							// type : 'jsonp', // JSONP pour infos externe
							// url:
							// 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
							type : 'ajax',
							url : 'data/trisacs.json',
							reader : {
								type : 'json',
								rootProperty : 'trisacs'
							}
						}
					}
				}]
			}
		});