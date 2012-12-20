/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.Garbages', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			garbagesView : 'garbagesView',
			garbagesList : 'garbagesList',
			garbageDetail : 'garbagesdetails',
			garbagesForm : 'garbagesForm',
			garbagesFormText : '#garbagesFormText',
			garbagesFormSelect : '#garbagesFormSelect'
		},
		control : {
			garbageDetail : {
				updatedata : 'onUpdateDataDetail'
			},

			garbagesList : {
				initialize : 'onInitGarbages',
				itemtap : 'showGarbagesDetail'

			},

			garbagesView : {
				initialize : 'onInitGarbagesView',
				push : 'onGarbagesViewPush'
			},

			garbagesFormText : {
				keyup : 'onGarbageStoreFilter',
				change : 'onGarbageStoreFilter',
				clearicontap : 'onGarbageStoreFilter'
			},

			garbagesFormSelect : {
				change : 'onGarbageStoreFilter'
			}

		}
	},

	// DEBUG
	onDebug : function() {
		console.log('DEBUG');
	},
	// FIN DEBUG

	onUpdateDataDetail : function(comp, newData, opts) {
		if (newData) {
			console.log(this);
			console.log(this.id);

			// this.down('#content').setData(newRecord.data);
		}
	},

	onInitGarbagesView : function() {

		console.log('onInitGarbagesContainer');

	},

	/**
	 * A l'initialisation de la fenêtre d'accueil
	 */
	onInitGarbages : function(list) {
		console.log('onInitGarbages');

		var garbageStore = Ext.create('VivreANantes.store.GarbageStore', {
					autoLoad : true,
					listeners : {
						'load' : function(store, results, successful) {
						}
					}
				});

		list.setStore(garbageStore);
		console.log(garbageStore);

	},

	onGarbagesViewPush : function(view, item) {

		// this.garbagesList().deselectAll();

	},

	showGarbagesDetail : function(list, index, node, record) {
		console.log('showGarbagesDetail');

		if (record) {
			if (!this.garbageDetail) {
				this.garbageDetail = Ext
						.create('VivreANantes.view.garbages.GarbagesDetails');
			}

			console.log(record.data);

			console.log(this.garbageDetail);
			// Bind the record onto the show contact view
			this.garbageDetail.setData(record.data);
			//		
			// Push the show contact view into the navigation view
			this.getGarbagesView().push(this.garbageDetail);
		}
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les déchets, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	onGarbageStoreFilter : function() {

		var text = this.getGarbagesFormText();
		var select = this.getGarbagesFormSelect();
		var store = this.getGarbagesList().getStore();

		store.clearFilter();
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterGarbage = Ext.create('Ext.util.Filter', {
					filterFn : function(item) {
						var escaperegex = Ext.String.escapeRegex;
						var texttest = new RegExp(escaperegex(text.getValue()),
								'ig');
						var categorietest = new RegExp(escaperegex(select
								.getValue()));

						return (texttest.test(item.data.nom)
								&& (select.getValue() === 'all' || categorietest
										.test(item.data.categorieUsuelle)));
					}
				});
		store.filter(filterGarbage);
	}

});
