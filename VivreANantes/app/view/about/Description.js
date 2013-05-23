/**
 * Vue de Description de l'application
 * 
 */
Ext.define('VivreANantes.view.about.Description', {
	extend : 'Ext.Container',

	config : {
		title : 'A propos',
		iconCls : 'info',
		styleHtmlContent : 'true',
		html : [
				'<img src=\'resources/images/conteneur_verre.png\' width=150 />',
				'<h2>Mieux trier à Nantes</h2>',
				'<p>L\'application Mieuw trier à Nantes a été réalisée par les bénévoles de Vivre à Nantes</p>',
				'<p>C\'est est un logiciel libre dont l\'objectif est d\'aider les Nantais à :<br/>',
				'- Savoir si un déchet est recyclable et les façons dont il peut être valorisé (avec des',
				'	conseils spécifiques à chaque déchet),<br/>',
				'- Connaître les emplacements des conteneurs, lieux et horaires des déchèteries et',
				'	distribution des sacs jaunes et bleus,<br/>',
				'- Connaître la filière tri à Nantes : centres de tris, centres d\'incinération, nouveaux',
				'	déchets récupérés, et les organismes qui se proposent de donner une seconde vie à',
				'	vos déchets,<br/>',
				'- Retrouver le mode de collecte et le jour de collecte à domicile, en recherchant par',
				'	rue ou à partir de votre position.</p>',
				"<ul>Nous avons besoin de 3 types d'aide (en plus de nouvelles idées) : ",
				"<li>que les données libres fournies par Open Data Nantes et www.deuxieme-vie.org restent maintenues.</li>",
				"<li>des personnes impliquées dans l'environnement : un travail de relecture via les commentaires, d'envoi de photos, ou de maintenance le tableur source de données.</li>",
				"<li>des informations bénévolles (technologies Grails, et Sencha Touch).</li>",
				""].join("")
	}
});