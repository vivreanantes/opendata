/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define('VivreANantes.controller.HomeCollectMods', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			homeCollectModsView : 'HomeCollectModsView',
			homeCollectModsList : 'HomeCollectModsList',
			homeCollectModDetail : 'HomeCollectModsDetails',
			homeCollectModsForm : 'HomeCollectModsForm',
			homeCollectModsFormText : '#homeCollectModsFormText',
			homeCollectModsFormSelect : '#homeCollectModsFormSelect'
		},
		control : {

			homeCollectModDetail : {
				updatedata : 'onUpdateDataDetail'
			},

			homeCollectModsList : {
				initialize : 'onInitHomeCollectMods',
				itemtap : 'showHomeCollectModsDetail'

			},

			homeCollectModsView : {
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

		var homecollectmodStore = Ext.create(
				'VivreANantes.store.HomeCollectModStore', {
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
			if (!this.homeCollectModDetail) {
				this.homeCollectModDetail = Ext
						.create('VivreANantes.view.homecollectmods.HomeCollectModsDetails');
			}

			console.log(record.data);

			console.log(this.homeCollectModDetail);
			// Bind the record onto the show contact view
			this.homeCollectModDetail.setData(record.data);

			/*if (record.data.joursCollecteBacsBleus !== "") {
				var jour = "{joursCollecteBacsBleus}";
			} else if (record.data.joursCollecteBacsBleus !== "") {
				var jour = "{joursCollecteBacsBleus}";
			} else {
				var jour = "{joursCollecteTriSac}";
			}*/
			// this.homeCollectModDetail.setTpl("<div>{denominationCompleteVoie}{complementVoie}</div><div>Modes de collecte : {modesCollecte}</div><div>Jours de collecte  : " + jour + "</div>");
			//      
			// Push the show contact view into the navigation view
			this.getHomeCollectModsView().push(this.homeCollectModDetail);
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
				var texttest = new RegExp(escaperegex(text.getValue()), 'ig');
				var categorietest = new RegExp(escaperegex(select.getValue()));
				// TODO prévoir de pouvoir mettre "venelle, mail" pour regrouper
				// les cas peu nombreux et faciliter la lisibilité de la page.
				if (select.getValue().indexOf(",") !== -1) {
					var array = select.getValue().split(',');
					var expression = '';
					var i = 0;
					for (a in array) {
						if (i == 0) {
							expression = '(' + array[a];
						} else {
							expression = expression + '|' + array[a];
						}
						i++;
					}
					expression = expression + ')';
					categorietest = new RegExp(expression);
					// console.log("expression : " + expression);
					// console.log("typeVoie : " + item.data.typeVoie);
					// console.log("res :" +
					// categorietest.test(item.data.typeVoie));
				}
				// TODO on pourrait mettre denominationCompleteVoie
				return (texttest.test(item.data.nomVoie) && (select
						.getValue() === 'all' || categorietest
						.test(item.data.typeVoie)));
			}
		});
		store.filter(filterHomeCollectMod);
	}

});
