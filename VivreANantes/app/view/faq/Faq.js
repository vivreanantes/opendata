/**
 * Vue des Déchets (présente avec un icone de déchets
 */
Ext.define('VivreANantes.view.faq.Faq', {
			extend : 'Ext.navigation.View',
			xtype : 'faqView',

			config : {
				autoDestroy : false,
				iconCls : 'team',
				title:'FAQ',
				items : [{
							xtype : 'faqContainer_xtype'
						}
				]
			}
		});