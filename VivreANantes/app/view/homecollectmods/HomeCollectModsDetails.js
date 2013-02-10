Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsDetails', {
	extend : 'Ext.Container',
	xtype : 'HomeCollectModsDetails_xtype',

	config : {
		title : 'Détails',
		layout : 'vbox',

		tpl : '<div>{nom}</div>',
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