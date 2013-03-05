/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define('VivreANantes.controller.Trisacs', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			trisacView : 'TrisacView',
			trisacList : 'TrisacList',
			trisacDetail : 'TrisacDetails',
			trisacForm : 'TrisacForm',
			trisacFormText : '#trisacFormText',
			trisacFormSelect : '#trisacFormSelect'
		},
		control : {

			trisacDetail : {
				updatedata : 'onUpdateDataDetail'
			},

			trisacList : {
				initialize : 'onInitTrisac',
				itemtap : 'showTrisacDetail'

			},

			trisacView : {
				push : 'onTrisacViewPush'
			},

			trisacFormText : {
				keyup : 'onTrisacStoreFilter',
				change : 'onTrisacStoreFilter',
				clearicontap : 'onTrisacStoreFilter'
			},

			trisacFormSelect : {
				change : 'onTrisacStoreFilter'
			}

		}
	},

	onUpdateDataDetail : function(comp, newData, opts) {
		if (newData) {
			console.log(this);
			console.log(this.id);
		}
	},


	/**
	 * A l'initialisation de la fenêtre d'accueil
	 */
	onInitTrisac : function(list) {
		console.log('onInitTrisac');
/*
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
*/
	},

	onTrisacViewPush : function(view, item) {

	},

	showTrisacDetail : function(list, index, node, record) {
		console.log('showTrisacDetail');

		if (record) {
			if (!this.trisacDetail) {
				this.trisacDetail = Ext
						.create('VivreANantes.view.trisac.TrisacDetails');
						
			// conseils
			var conseils = "";
			if (record.data.conseils !== '') {
				conseils = record.data.conseils + ",";
			}
			// faq
			var faqTraduit = this.getApplication()
					.getController('VivreANantes.controller.Garbages')
					.getFaqString(record.data.code);
			conseilTraduit = this.getApplication()
					.getController('VivreANantes.controller.Garbages')
					.getAdviceString(conseils);
			this.trisacDetail.setTpl("'<div>Type : {type} <BR/>Nom : {libelle} <BR/>Horaires : {horaires} <BR/>Adresse : {adresse_} '+ ' <BR/>Horaires interne appli {plagesHoraires}" + 
					conseilTraduit+faqTraduit+
					"</DIV>");

			}

			console.log(record.data);

			console.log(this.trisacDetail);
			// Bind the record onto the show contact view
			this.trisacDetail.setData(record.data);

			/*if (record.data.joursCollecteBacsBleus !== "") {
				var jour = "{joursCollecteBacsBleus}";
			} else if (record.data.joursCollecteBacsBleus !== "") {
				var jour = "{joursCollecteBacsBleus}";
			} else {
				var jour = "{joursCollecteTriSac}";
			}*/
			// this.trisacDetail.setTpl("<div>{denominationCompleteVoie}{complementVoie}</div><div>Modes de collecte : {modesCollecte}</div><div>Jours de collecte  : " + jour + "</div>");
			//      
			// Push the show contact view into the navigation view
			this.getTrisacView().push(this.trisacDetail);
		}
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les déchets, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	onTrisacStoreFilter : function() {

		var text = this.getTrisacFormText();
		var select = this.getTrisacFormSelect();
		var store = this.getTrisacList().getStore();

		store.clearFilter();
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterHomeCollectMod = Ext.create('Ext.util.Filter', {
			filterFn : function(item) {
				var escaperegex = Ext.String.escapeRegex;
				var texttest = new RegExp(escaperegex(text.getValue()), 'ig');
				var categorietest = new RegExp(escaperegex(select.getValue()));

				return (texttest.test(item.data.nom) && (select.getValue() === 'all' || categorietest
						.test(item.data.quartier_)));
			}
		});
		store.filter(filterHomeCollectMod);
	}

});
