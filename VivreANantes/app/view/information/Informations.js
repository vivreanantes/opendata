/**
 * Informations
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.information.Informations', {
			extend : 'Ext.NavigationView',
			xtype : 'informations',

			config : {
				// Titre dans barre de bouton principale
				title : 'Informations',
				 // Icone dans la barre de bouton principale
				iconCls : 'action',
				items : [
						// Remplace title : 'Informations',
						// {
						// xtype: 'titlebar', // mieux que toolbar
						// docked:'top',
						// title:'Informations sur le tri',
						// items:[{
						// // Par défaut les xtype sont des 'button'
						// text:'ping',
						// align:'right'
						// }, {
						// text:'clear'
						// }]
						// },
						{
					cls : 'informationsCss',
					// FIXME : les titles sont coupés dans Informations.js : 'Informations sur le tri' devient "'Informations sur le...' à l'affichage 
					title : 'Informations sur le tri',
					scrollable : 'true',
					// FIXME pb sur les images dans Informations.js : les '\' sont remplacés par rien, donc les liens sont faux.
<<<<<<< HEAD
					itemTpl : '<img src=resources\images\{image} />{name}',
=======
					itemTpl : '<img src=resources/images/{image} height=80 />{name}',
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
					// /i pose un pb
					// itemTpl : ['<img src=resources\images\{image} />',
					// '{name}'].join(''),
					xtype : 'list',
					store : {
						autoLoad : true,
<<<<<<< HEAD
						fields : ['code', 'name', 'description_fr', 'image'],
=======
						fields : ['code', 'name', 'description', 'image'],
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
						// fields: ['title', 'author', 'content'],
						proxy : {
							// type : 'jsonp', // JSONP pour infos externe
							// url:
							// 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
							type : 'ajax',
							url : 'data/informations.json',
							reader : {
								type : 'json',
								rootProperty : 'informations'
							}
						}
					}
				}]


			}
		});