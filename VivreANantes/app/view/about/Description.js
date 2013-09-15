/**
 * Vue de Description de l'application
 * 
 */
Ext.define('VivreANantes.view.about.Description', {
	extend : 'Ext.Container',

	config : {
		title : 'A propos',
		iconCls : 'info',
		styleHtmlContent : true,
		items : [{
			html : [
					"<img src='resources/images/conteneur_verre_mini.png' width='120px' height='120px' align='right' />",
					"<h2>\"Mieux trier à Nantes\"</h2>",
					"<p>Cette application est réalisée par des bénévoles. Elle est <font color='red'>en phase de développement</font>. Version 0.13091</p>",
					"<p>C\'est un logiciel libre dont <b>l'objectif est d\'aider les Nantais à trier</b> : modes de collecte par déchets, distribution Trisac, jours de collecte à domicile, coordonnées des assos de récupération...<br/>",
					"Les données viennent de 'Open Data Nantes', 'Deuxième vie', du site de 'Nantes Métropôle' et de 'Allo Propreté'.</p>",
					"<p>Plus d'infos sur <a href='http://mieuxvivreanantes.fr/' target=_new >mieuxvivreanantes.fr</a></p>",
					""].join("")
		}]
	}
});