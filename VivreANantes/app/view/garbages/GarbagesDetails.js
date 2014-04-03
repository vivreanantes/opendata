Ext.define('VivreANantes.view.garbages.GarbagesDetails', {
	extend : 'Ext.Container',
	xtype : 'garbagesDetails_xtype',
	scrollable : true,
	record : null,
	config : {
		title : 'Détails',
		styleHtmlContent : true,
		scrollable : true,
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
							// ,tpl : 'Recyclable
							// {recyclable_string}<br/><br/>Modes de collecte
							// :',
							data : {
								recyclable_string : ""
							}
						}, {
							id : "garbagesdetails_collectmod_1",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_2",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_3",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_4",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_5",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_6",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_7",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_8",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}]
					}]
		},

		{
			id : "garbagesdetails_description",
			// style : 'background-color: #119Eaa;',
			tpl : "<br/>{concerne_aussi}",
			data : {
				"concerne_aussi" : "Concerne aussi : divers"
			}
		},

		{
			id : "garbagesdetails_conseils"
		}, {
			// Le premier conseil
			xtype : 'container',
			layout : 'hbox',
			width : '100%',
			id : "garbagesdetails_conseils_1",
			items : [{
						tpl : "<b>{libelle}</b><br/>{description}<br/><br/>",
						id : "garbagesdetails_conseils_1_libelle"
					}, {
						xtype : 'label',
						id : "garbagesdetails_conseils_1_bouton",
						text : "Voir fiche",
						width:"150px"
					}]
		}, {
			// Le deuxieme conseil
			xtype : 'container',
			layout : 'hbox',
			width : '100%',
			id : "garbagesdetails_conseils_2",
			items : [{
						tpl : "<b>{libelle}</b><br/>{description}<br/><br/>",
						id : "garbagesdetails_conseils_2_libelle"
					}, {
						xtype : 'label',
						id : "garbagesdetails_conseils_2_bouton",
						text : "Voir fiche",
						width:"150px"
					}]
		}, {
			id : "garbagesdetails_commentaires"
		}, {
			id : "garbagesdetails_commentaires_1",
			tpl : "<b>{libelle}</b><br/>{description}<br/><br/>"
		}, {
			id : "garbagesdetails_commentaires_2",
			tpl : "<b>{libelle}</b><br/>{description}<br/><br/>"
		}, {
			id : "garbagesdetails_commentaires_3",
			tpl : "<b>{libelle}</b><br/>{description}<br/><br/>"
		}, {
			xtype : 'button',
			width : '200px',
			id : "garbagesdetails_envoyer",
			text : "Envoyez un commentaire"
		}]

	}

});