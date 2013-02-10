Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsDetails', {
	extend : 'Ext.Container',
<<<<<<< HEAD
	xtype : 'HomeCollectModsDetails',
=======
	xtype : 'HomeCollectModsDetails_xtype',
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c

	config : {
		title : 'Détails',
		layout : 'vbox',
<<<<<<< HEAD
		// TODO Afficher SOIT jour collecte bacs bleus, SOIT bac jaune, SOIT trisac
		tpl : '<div>{denominationCompleteVoie}</div><div>Modes de collecte : {modesCollecte}</div><div>Jours de collecte bacs bleus : {joursCollecteBacsBleus}</div><div>Jours de collecte bacs jaunes : {joursCollecteBacsJaunes}</div><div>Jours de collecte TriSac : {joursCollecteTriSac}</div>',

=======

		tpl : '<div>{nom}</div>',
>>>>>>> 42f7acf813a138e1748c911cf53da5982722684c
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