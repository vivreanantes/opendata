/**
 * Conteneur avec un bouton de recherche et la liste des déchets filtrés par
 * cette recherche en dessous
 */
Ext.define('VivreANantes.view.faq.FaqContainer', {
			extend : 'Ext.Container',
			xtype : 'faqContainer_xtype',

			config : {
				layout : 'vbox',
				items : [{
							xtype : 'faqForm_xtype',
							height : 300,
							scrollable : false
						},
						{
							xtype : 'faqList',
							scrollable : 'vertical',
							flex : 1
					}

				]
			}

		});
