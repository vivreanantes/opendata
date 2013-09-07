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
					'<img src="resources/images/conteneur_verre_mini.png" width="150" align="right" />',
					'<h2>A propos de l\'application</h2>',
					'<p>L\'application "Mieux trier à Nantes" est réalisée par des bénévoles.</p>',
					'<p>C\'est un logiciel libre dont <b>l\'objectif est d\'aider les Nantais à trier</b> :<br/>',
					"- les données sont fournies par '<b>Open Data Nantes</b>' et 'Deuxième vie'. D'autres données ont été recueillies sur les sites Internet de Nantes et Nantes Métropôle.<br/>", 
					"- ces données sont regroupées dans un tableur OpenOffice Calc (proche de Excel) accessible à tous, et exportées aux formats JSON.<br/>",
					"- de nombreuses photos ont été prises et sont sous licence 'Creative Commons Attribution (BY)'<br/>",
					"- le code source de l'application est également libre.<br/><br/>",
					"<b>Notre projet est actuellement <font color='red'>en phase de développement</font>. Notamment <font color='red'>les lieux présentés sur la carte ne sont pas les bons</font> et <font color='red'>l'application est lente</font>.</b><br/>",
					"<ul>Nous avons besoin de 3 types d'aide : ",
					"<li><b>premiers utilisateurs</b> : ils utilisent l'application (quand elle sera disponible sur les téléphones Androïd) et envoyent des commentaires. <b>A partir de septembre.</b></li>",
					"<li><b>testeurs</b> : il utilisent et envoient des commentaires sur le site de démo de l'application mobile (à lancer uniquement dans Chrome ou Chromium) : <a href='http://mieuxtrieranantes.fr/' target=_new>http://mieuxtrieranantes.fr/</a></li>",
					"<li><b>contributeurs</b> :<br/>" +
					"- non informaticiens : relire et améliorer les données présentées dans le tableur. En complément nous avons besoins de commentaires, d'envoi de photos.<br/>" +
					"- informaticiens : technologies Java, Grails, et Sencha Touch 2, Git, Eclipse.<br/>" +
					"</li>",
					"</ul>",
					"<p>A venir : un calendrier, les emplacements des conteneurs, l'application pour Androïd (puis IPhone, puis Windows Phone et Blackberry 10), un site Internet.</p>",
					"<p>Toutes les infos sur le site de présentation <a href='http://mieuxvivreanantes.fr/' target=_new >mieuxvivreanantes.fr</a></p>",
					""].join("")
		}]
	}
});