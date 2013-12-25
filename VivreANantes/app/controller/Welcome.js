/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.Welcome', {
			extend : 'Ext.app.Controller',

			config : {
				refs : {
					welcome : 'accueilContainer',
					welcomeList : 'welcomelist',
					description : 'xtype_description'
				},
				control : {
					welcomeList : {
						initialize : 'onInitWelcome',
						disclose : 'showDetail'
						// itemtap : 'onSessionTap',
						// activate : 'onSessionsActivate'
					},
					description : {
						show : 'onInitWelcome2'
					}
				}
			},

			/**
			 * A l'initialisation de la fenêtre d'accueil
			 */
			onInitWelcome : function(list) {
				
				// Les catégories usuelles
				var categorieUsuelleStore = Ext.create(
						'VivreANantes.store.CategorieUsuelleStore');
				list.setStore(categorieUsuelleStore);
			},
			
			showDetail : function(list, record) {
				this.getWelcomeList().push({
					xtype : 'welcomeList',
					title :  record.nom,
					data : record.data
				}); 
			},
			
			onInitWelcome2 : function(element, eOpts) {
				var utiliserChrome = "<font size='4'><font  color='red'>Cette application est prévue pour le navigateur Chrome ou Chromium </font>" +
						"(elle ne fonctionnera pas avec Internet Explorer, Firefox, Opéra ou Safari).</font><br/><br/>";
				var titre = "<h2>\"Mieux trier à Nantes\"</h2>";
				var text = "<img src='resources/images/conteneur_verre_mini.png' width='120px' height='120px' align='right' />" +
						"<p>Cette application est réalisée par des bénévoles. Elle est <font color='blue'>en phase de développement</font>. Version 0.13121 (dec. 2013)</p>" +
						"<p>C\'est un logiciel libre dont <b>l'objectif est d\'aider les Nantais à trier</b> : modes de collecte par déchets, distribution Trisac, " +
						"jours de collecte à domicile, coordonnées des assos de récupération...<br/>Les données viennent de 'Open Data Nantes', 'Deuxième vie', " +
						"du site de 'Nantes Métropôle' et de 'Allo Propreté'.</p><p>Plus d'infos sur " +
						"<a href='http://mieuxvivreanantes.fr/' target=_new >mieuxvivreanantes.fr</a></p>";
				var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrom') > -1;
				if (is_chrome) {
					element.items.items[0].setHtml(titre+text);
				} else {
					element.items.items[0].setHtml(titre+utiliserChrome+text);
				}
			}
			
		});
