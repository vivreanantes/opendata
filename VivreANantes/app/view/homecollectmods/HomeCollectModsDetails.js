Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsDetails', {
	extend : 'Ext.Container',
	xtype : 'HomeCollectModsDetails',

	config : {
		title : 'Collecte à domicile',
		layout : 'vbox',
		// On affiche {joursCollecteBacsBleus}{joursCollecteBacsJaunes}{joursCollecteTriSac} car un seul des trois est valorisé.
		tpl : '<div>{denominationCompleteVoie}{complementInformation}</div><div>Modes de collecte : {modesCollecte}</div><div>Jours de collecte  :  {joursCollecteTriSac} {joursCollecteBacsBleus} {joursCollecteBacsJaunes}</div>'+
		'<BR/><UL>Il existe 3 modes de collecte possible : <LI>"sac bleu et sac jaune" (aussi appelé "Trisac") : ils sont à déposer dans le même bac,</LI><LI>"bac bleu et bac jaune" : le recyclable est à déposer dans le bac jaune, le bleu sert pour les poubelles,</LI><LI>"bac bleu" : il sert pour la poubelle uniquement. Ce que vous trier doit être emmené au conteneur ou en écopoints/décheteries.</LI></UL>',
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