Ext.define('VivreANantes.view.garbages.GarbagesDetails', {
	extend : 'Ext.Container',
	xtype : 'garbagesDetails_xtype',
	record : null,
	config : {
		title : 'Détails',
		styleHtmlContent : true,
		layout : 'vbox',
		items : [{
			xtype : 'container',
			layout : 'hbox',
			items : [{
						id : "garbagesdetails_image",
						tpl : "{image}",
						styleHtmlContent : true,
						data : {
							image : ""
						}
					}, {
						xtype : 'container',
						layout : 'vbox',
						id : "garbagesdetails_recyclableetmodesdecollecte",
						items : [{
							id : "garbagesdetails_recyclable",
							tpl : "{recyclable_string}<br/><br/>Modes de collecte : ",
							//,tpl : 'Recyclable {recyclable_string}<br/><br/>Modes de collecte :',
							data : {
								recyclable_string : ""
							}
						},
						{
							id : "garbagesdetails_collectmod_1",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}", data : { label:"", image : ""}
						},
						{
							id : "garbagesdetails_collectmod_2",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}", data : { label:"", image : ""}
						},
						{
							id : "garbagesdetails_collectmod_3",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}", data : { label:"", image : ""}
						},
						{
							id : "garbagesdetails_collectmod_4",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}", data : { label:"", image : ""}
						},
						{
							id : "garbagesdetails_collectmod_5",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}", data : { label:"", image : ""}
						},
						{
							id : "garbagesdetails_collectmod_5",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}", data : { label:"", image : ""}
						}]
					}]
		},

		{
			id : "garbagesdetails_description",
			// style : 'background-color: #119Eaa;',
			tpl : "{concerne_aussi}",
			data : {
				"concerne_aussi" : "Concerne aussi : divers"
			}
		},

		{
			id : "garbagesdetails_conseils"
		},

		{
			xtype : 'container',
			layout : 'hbox',
			style : 'background-color: #759E60;',
			id : "garbagesdetails_commentaires",
			items : [{
				tpl : "{commentaire_string}",
				data : {
					"commentaire_string" : "Commentaire <B>Image manquante ou incorrecte</B><br/>Anti-fourmis, Antigel, appareil électronique, Barquette plastique, Base, Bidon d'huile moteur vide, Bouteille produit ménager non vide, Bouteille produit ménager vide, Chaussures usagées, déodorant stick, Engrais chimiques, Essence de térébenthine, Feuillage, Feuille, Film plastique, Filtre à huile, Fongicides, Huile de vidange, Huile minérale, Insecticides, Laques, Liquide de refroidissement, Litière pour animaux, Mastic de carrosserie, Naphtaline, nettoyants à sol, Objet en terre cuite, outillage alimenté par électricité, Papier peint, papier toilette, Peinture antirouille, piano, Produit phytosanitaire, Produits d’entretien, Radiographie, récurrants pour toilette, Résines, Révélateur et fixateur photo,  solvants, Taille d'arbre, trompette, Trottinette, Tube fluorescent, Tuyau d'arrosage, Ustensile de cuisine,Vélo, Vitre commentaire_string"
				},
				flex : 1
			}, {
				xtype : 'container',
				layout : 'vbox'
				/*,items : [{
							xtype : 'button',
							text : 'bacs bleus'
						}, {
							xtype : 'button',
							text : 'bacs jaunes'
						}]*/
			}]
		}]

		// items : [
		// {
		// id : 'content',
		// tpl : [ '<div class="top">',
		// '<div>{nom} | {description}{imageComplete}</div>',
		// '</div>' ].join('')
		// }
		// //
		// // , {
		// // xtype : 'map',
		// // flex : 1,
		// // mapOptions : {
		// // zoomControl : false,
		// // panControl : false,
		// // rotateControl : false,
		// // streetViewControl : false,
		// // mapTypeControl : false,
		// // zoom : 13
		// // }}
		// ],

	}

});