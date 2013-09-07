/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define('VivreANantes.controller.HomeCollectModsController', {
	extend : 'VivreANantes.controller.AbstractController',

	config : {
		refs : {
			homeCollectModsView : 'HomeCollectModsView',
			homeCollectModsList : 'HomeCollectModsList',
			homeCollectModDetail : 'HomeCollectModsDetails',
			homeCollectModsForm : 'HomeCollectModsForm',
			homeCollectModsFormText : '#homeCollectModsFormText'
		},
		control : {

			homeCollectModDetail : {
			},

			homeCollectModsList : {
				initialize : 'onInitHomeCollectMods',
				itemtap : 'showHomeCollectModsDetail'

			},

			homeCollectModsView : {
				// On maitient ce control pour pouvoir faire this.getHomeCollectModsView().
			},

			homeCollectModsFormText : {
				keyup : 'onHomeCollectModStoreFilter',
				change : 'onHomeCollectModStoreFilter',
				clearicontap : 'onHomeCollectModStoreFilter'
			}
		}
	},

	/**
	 * A l'initialisation de la fenêtre
	 */
	onInitHomeCollectMods : function(list) {
		var homecollectmodStore = Ext.create(
			'VivreANantes.store.HomeCollectModStore');
		list.setStore(homecollectmodStore);

	},

	onHomeCollectModsViewPush : function(view, item) {

	},

	showHomeCollectModsDetail : function(list, index, node, record) {

		if (record) {
			if (!this.homeCollectModDetail) {
				this.homeCollectModDetail = Ext
						.create('VivreANantes.view.homecollectmods.HomeCollectModsDetails');
			}

			// Bind the record onto the show contact view
			this.homeCollectModDetail.setData(record.data);

			this.homeCollectModDetail.setTpl('<I>Source : Open Data Nantes, valable à partir du 16/09/2013</I><br/><div>{dcv}{ci}</div>' +
					'<div>Modes de collecte : {modesCollecte}</div><div>Jours de collecte  :  {jct} {jcbb} {jcbj}</div><BR/><UL>Il existe 3 modes de collecte possible : <LI>"sac bleu et sac jaune" (aussi appelé "Trisac") : ils sont à déposer dans le même bac,</LI><LI>"bac bleu et bac jaune" : les déchets recyclables est à déposer dans le bac jaune, les déchets non recyclables dans le bac bleu,</LI><LI>"bac bleu" : il sert pour les déchets non recyclables uniquement. Ce que vous trier doit être emmené au conteneur ou en écopoints/décheteries.</LI></UL> {src}');
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
		var store = this.getHomeCollectModsList().getStore();
		store.clearFilter();
		thisController = this;
		
		// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
		// sur la catégorie
		var filterHomeCollectMod = Ext.create('Ext.util.Filter', {
			filterFn : function(item) {
				var escaperegex = Ext.String.escapeRegex;
				var texteSansAccents = thisController.utilRetireAccent(text.getValue());
				var texttest = new RegExp(escaperegex(texteSansAccents), 'ig');
				var nomVoie_sansAccents = item.data['nvsa'];
				return (texttest.test(nomVoie_sansAccents));
			}
		});
		store.filter(filterHomeCollectMod);
	}

});
