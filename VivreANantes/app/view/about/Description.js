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
					'<img src="resources/images/conteneur_verre_petit.png" width="150" align="right" />',
					'<h2>A propos de l\'application</h2>',
					'<p>L\'application "Mieux trier à Nantes" a été réalisée par les bénévoles de "Vivre à Nantes".</p>',
					'<p>C\'est un logiciel libre dont l\'objectif est d\'aider les Nantais à :<br/>',
					'- savoir si un déchet est recyclable et les façons dont il peut être valorisé (avec des',
					'	conseils spécifiques à chaque déchet),<br/>',
					'- connaître les emplacements des conteneurs, lieux et horaires des déchèteries et',
					'	distribution des sacs jaunes et bleus,<br/>',
					'- connaître la filière tri à Nantes : centres de tris, centres d\'incinération, nouveaux',
					'	déchets récupérés, et les organismes qui se proposent de donner une seconde vie à',
					'	vos déchets,<br/>',
					'- retrouver le mode de collecte et le jour de collecte à domicile, en recherchant par',
					'	rue ou à partir de votre position.</p>',
					"<ul>Nous avons besoin de 3 types d'aide (en plus de nouvelles idées) : ",
					"<li>Open Data Nantes et www.deuxieme-vie.org : que les données libres fournies restent maintenues.</li>",
					"<li>personnes impliquées dans l'environnement : un travail de relecture via les commentaires, d'envoi de photos, de maintenance le tableur source de données, de conseils.</li>",
					"<li>informaticiens bénévoles : technologies Java, Grails, et Sencha Touch 2.</li>",
					"</ul>",
					"<p>A venir : un calendrier, les emplacements des conteneurs, l'application pour Windows Phone et Blackberry 10.</p>",
					"<p>Toutes les infos sur <a href='http://mieuxvivreanantes.fr/'>mieuxvivreanantes.fr</a></p>",
					""].join("")
		}]
	}
});