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
		title : 'Apprendre',
		// Icone dans la barre de bouton principale
		iconCls : 'action',
		scrollable : true,
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
			title : 'Informations sur le tri',

			itemTpl : '<img src=resources/images/{image} height=50 /> {libelle}',
			// itemTpl : '<div><img src=resources/images/{image} height=80
			// /><br/>{name} </div>',
			// /i pose un pb
			// itemTpl : ['<img src=resources\images\{image} />',
			// '{name}'].join(''),
			xtype : 'list',
			store : {
				autoLoad : true,
				fields : ['code', 'libelle', 'description_fr', 'image'],
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