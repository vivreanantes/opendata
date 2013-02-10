/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define('VivreANantes.controller.HomeCollectMods', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			homecollectmodsView : 'HomeCollectModsView_xtype',
			homecollectmodsList : 'HomeCollectModsList_xtype',
			homecollectmodDetail : 'HomeCollectModsDetails_xtype',
			homecollectmodsForm : 'HomeCollectModsForm_xtype',
			homeCollectModsFormText : '#homeCollectModsFormText',
			homeCollectModsFormSelect : '#homeCollectModsFormSelect'
		},
		control : {
			homecollectmodDetail : {
				updatedata : 'onUpdateDataDetail'
			},

			homecollectmodsList : {
				initialize : 'onInitHomeCollectMods',
				itemtap : 'showHomeCollectModsDetail'

			},

			homecollectmodsView : {
				initialize : 'onInitHomeCollectModsView',
				push : 'onHomeCollectModsViewPush'
			},

			homeCollectModsFormText : {
				keyup : 'onHomeCollectModStoreFilter',
				change : 'onHomeCollectModStoreFilter',
				clearicontap : 'onHomeCollectModStoreFilter'
			},

			homeCollectModsFormSelect : {
				change : 'onHomeCollectModStoreFilter'
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
		}
	},

	onInitHomeCollectModsView : function() {

		console.log('onInitHomeCollectModsContainer');

	},

	/**
	 * A l'initialisation de la fenêtre d'accueil
	 */
	onInitHomeCollectMods : function(list) {
		console.log('onInitHomeCollectMods');

		var homecollectmodStore = Ext.create('VivreANantes.store.HomeCollectModStore', {
					autoLoad : true,
					listeners : {
						'load' : function(store, results, successful) {
						}
					}
				});

		list.setStore(homecollectmodStore);
		console.log(homecollectmodStore);

	},

	onHomeCollectModsViewPush : function(view, item) {

	},

	showHomeCollectModsDetail : function(list, index, node, record) {
		console.log('showHomeCollectModsDetail');

		if (record) {
			if (!this.homecollectmodDetail) {
				this.homecollectmodDetail = Ext
						.create('VivreANantes.view.homecollectmods.HomeCollectModsDetails');
			}

			console.log(record.data);

			console.log(this.homecollectmodDetail);
			// Bind the record onto the show contact view
			this.homecollectmodDetail.setData(record.data);
			//		
			// Push the show contact view into the navigation view
			this.getHomecollectmodsView().push(this.homecollectmodDetail);
		}
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les déchets, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	onHomeCollectModStoreFilter : function() {

		var text = this.getHomeCollectModsFormText();
		var select = this.getHomeCollectModsFormSelect();
		var store = this.getHomeCollectModsList().getStore();

		store.clearFilter();
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterHomeCollectMod = Ext.create('Ext.util.Filter', {
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
		store.filter(filterHomeCollectMod);
	}

});
