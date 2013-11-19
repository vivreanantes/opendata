Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsDetails', {
	extend : 'Ext.Container',
	xtype : 'homecollectmodsdetails_xtype',

	config : {
		title : 'Collecte à domicile',
		layout : 'hbox',
		items : [{
					// html : '<I>Source : Open Data Nantes, valable à partir du
					// 16/09/2013</I><br/>',
					id : 'homecollectmodsdetails_description',
					tpl : "{image}",
					styleHtmlContent : true,
					data : {
						image : ""
					}
				}, {
					xtype : 'container',
					layout : 'vbox',
					id : "homecollectmodsdetails_modesdecollecte",
					items : [{
								styleHtmlContent : true,
								html : "Modes de collecte : "
							}, {
								id : "homecollectmodsdetails_collectmod_1",
								xtype : "button",
								tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
								data : {
									label : "",
									image : ""
								}
							}, {
								id : "homecollectmodsdetails_collectmod_2",
								xtype : "button",
								tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
								data : {
									label : "",
									image : ""
								}
							}, {
								id : "homecollectmodsdetails_collectmod_3",
								xtype : "button",
								tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
								data : {
									label : "",
									image : ""
								}
							}, {
								id : "homecollectmodsdetails_collectmod_4",
								xtype : "button",
								tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
								data : {
									label : "",
									image : ""
								}
							}]
				}]
	}
		/*
		 * config : { title : 'Collecte à domicile', layout : 'vbox', items : [{
		 * xtype : 'container', scrollable : true, styleHtmlContent : true,
		 * layout : 'hbox', items : [{ tpl : '<I>Source : Open Data Nantes,
		 * valable à partir du 16/09/2013</I><br/><div>{dcv}{ci}</div><div>Modes
		 * de collecte : {modesCollecte}</div><div>Jours de collecte : {jct}
		 * {jcbb} {jcbj}</div>' + '<BR/><UL>Il existe 3 modes de collecte
		 * possible : <LI>"sac bleu et sac jaune" (aussi appelé "Trisac") : ils
		 * sont à déposer dans le même bac,</LI><LI>"bac bleu et bac jaune" :
		 * les déchets recyclables est à déposer dans le bac jaune, les déchets
		 * non recyclables dans le bac bleu,</LI><LI>"bac bleu" : il sert
		 * pour les déchets non recyclables uniquement. Ce que vous trier doit
		 * être emmené au conteneur ou en écopoints/décheteries.</LI></UL>
		 * {src}' }, { xtype : 'container', layout : 'vbox', id :
		 * "homecollectmodsdetails_recyclableetmodesdecollecte", items : [{ id :
		 * "homecollectmodsdetails_recyclable", tpl : "Modes de collecte : " }, {
		 * id : "homecollectmodsdetails_collectmod_1", xtype : "button", tpl : "<img
		 * src='resources/images/bac_bleu_mini.png' width='20px' /> {label}",
		 * data : { label:"Bac bleu", image : "bac_bleu_mini.png"} }, { id :
		 * "homecollectmodsdetails_collectmod_2", xtype : "button", tpl : "<img
		 * src='resources/images/sac_jaune_mini.png' width='20px' /> {label}",
		 * data : { label:"Sac jaune", image : "sac_jaune_mini.png"} }] }],
		 * record : null }] }
		 */
});