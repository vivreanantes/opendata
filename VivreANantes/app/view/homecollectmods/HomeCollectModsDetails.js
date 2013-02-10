Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsDetails', {
	extend : 'Ext.Container',
	xtype : 'HomeCollectModsDetails',

	config : {
		title : 'Détails',
		layout : 'vbox',
		// TODO Afficher SOIT jour collecte bacs bleus, SOIT bac jaune, SOIT trisac
		tpl : '<div>{denominationCompleteVoie}</div><div>Modes de collecte : {modesCollecte}</div><div>Jours de collecte bacs bleus : {joursCollecteBacsBleus}</div><div>Jours de collecte bacs jaunes : {joursCollecteBacsJaunes}</div><div>Jours de collecte TriSac : {joursCollecteTriSac}</div>',

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