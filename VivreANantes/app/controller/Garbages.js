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
				initialize : 'onDebug',
				keyup : 'onGarbagesFormTextKeyup'

			},

			garbagesFormSelect : {
				initialize : 'onDebug',
				change : 'onGarbagesFormSelectChange'
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
	 * Méthode invoquée par une mise à jour de la liste déroulante
	 */
	onGarbagesFormTextKeyup : function(element, event, opts) {
		console.log('onGarbagesFormTextKeyup');
		var store = this.getGarbagesList().getStore();

		var filtre = element.getValue();
		//store.clearFilter();

		// Filtrer sans casse, en cherchant la chaine dans le nom
		store.filter('nom', filtre, true, false);
	},

	/**
	 * Méthode invoquée par une mise à jour de la liste déroulante
	 */
	onGarbagesFormSelectUpdateData : function(element, data, opts) {
		console.log('onGarbagesFormSelectUD');
		console.log(data);

		var store = this.garbagesList.getStore();
		// store.filter('categorieUsuelle',data.);
	},

	/**
	 * Méthode invoquée par une mise à jour de la liste déroulante
	 */
	onGarbagesFormSelectKeyup : function(element, event, opts) {
		console.log('onGarbagesFormSelectKeyup');
		var store = this.getGarbagesList().getStore();

		var filtre = element.getValue();
		//store.clearFilter();

		// Filtrer sans casse, en cherchant la chaine dans le nom
		store.filter('categorieUsuelle', filtre, false, false);
	},

	/**
	 * 
	 * @param {}
	 *            element
	 * @param {}
	 *            newValue
	 * @param {}
	 *            oldValue
	 * @param {}
	 *            options
	 */
	onGarbagesFormSelectChange : function(element, newValue, oldValue, options) {
		console.log('onGarbagesFormSelectChange');
		var store = this.getGarbagesList().getStore();

		var filtre = newValue;

		
		
		//store.clearFilter();

		// Filtrer sans casse, en cherchant la chaine dans le nom

		if (filtre !== 'all') {
			store.filter('categorieUsuelle', filtre, false, false);
		}
		else {
			
		}
		
	}

});
