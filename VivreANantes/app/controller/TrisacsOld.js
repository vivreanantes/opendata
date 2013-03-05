Ext.define('VivreANantes.controller.Trisacs', {
			extend : 'Ext.app.Controller',

			config : {
				refs : {
					trisacs : 'trisacs'
				},
				control : {
					// fonctionne comme une CSS selecteur
					'trisacs list' : {
						itemtap : 'showTrisacs'
					}/*,

					trisacs : {
						initialize : 'onInitTrisacsList'
					}*/
				}
			},

			showTrisacs : function(list, index, element, record) {
				// console.log(record.get('title'));

				var conseilTraduit = this.getApplication()
						.getController('VivreANantes.controller.Garbages')
						.getAdviceString(record.get('conseils'));

				var faqTraduit = this.getApplication()
						.getController('VivreANantes.controller.Garbages')
						.getFaqString(record.get('code'));

				this.getTrisacs().push({
					xtype : 'panel',
					title :  record.get('type') + ' - ' +  record.get('libelle'),
					html : record.get('horaires') + record.get('adresse_') + "<br/>"
							+ conseilTraduit + faqTraduit,
					scrollable : true,
					styleHtmlContent : true
				});
			}

			/**
			 * A l'initialisation de la fenêtre d'accueil
			 */
			/*,onInitTrisacsList : function(list) {
				var store = Ext.create('VivreANantes.store.DistrisacStore');
				list.setStore(store);
			}*/
		});
