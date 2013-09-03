Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsDetails', {
	extend : 'Ext.Container',
	xtype : 'HomeCollectModsDetails',

	config : {
		title : 'Collecte à domicile',
		layout : 'vbox',
		// On affiche {joursCollecteBacsBleus}{joursCollecteBacsJaunes}{joursCollecteTriSac} car un seul des trois est valorisé.
		tpl : '<I>Source : Open Data Nantes, valable à partir du 16/09/2013</I><br/><div>{dcv}{ci}</div><div>Modes de collecte : {modesCollecte}</div><div>Jours de collecte  :  {jct} {jcbb} {jcbj}</div>'+
		'<BR/><UL>Il existe 3 modes de collecte possible : <LI>"sac bleu et sac jaune" (aussi appelé "Trisac") : ils sont à déposer dans le même bac,</LI><LI>"bac bleu et bac jaune" : les déchets recyclables est à déposer dans le bac jaune, les déchets non recyclables dans le bac bleu,</LI><LI>"bac bleu" : il sert pour les déchets non recyclables uniquement. Ce que vous trier doit être emmené au conteneur ou en écopoints/décheteries.</LI></UL> {src}',
				scrollable : true,
				styleHtmlContent : true,		

//		items : [
//				{
//					id : 'content',
//					tpl : [ '<div class="top">',
//							'<div>{nom} |  {description}{imageComplete}</div>',
//							'</div>' ].join('')
//				}
////				
////				, {
////					xtype : 'map',
////					flex : 1,
////					mapOptions : {
////						zoomControl : false,
////						panControl : false,
////						rotateControl : false,
////						streetViewControl : false,
////						mapTypeControl : false,
////						zoom : 13
////					}}
//				 ],

		record : null
	}

});