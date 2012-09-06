/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('VivreANantes.controller.Garbages', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			garbagesContainer : 'garbagesContainer',
			garbagesList : 'garbagesList',
			garbageDetail : 'garbagesdetails'

		},
		control : {
			garbageDetail : {

				updatedata : 'onUpdateDataDetail'
			},

			garbagesList : {
				initialize : 'onInitGarbages',
				itemtap : 'showGarbagesDetail'

			},

			garbagesContainer : {
				initialize : 'onInitGarbagesContainer',
				push : 'onGarbagesContainerPush',
			}

		}
	},

	onUpdateDataDetail : function(comp, newData, opts) {
		if (newData) {
			console.log(this);
			console.log(this.id);

			// this.down('#content').setData(newRecord.data);
		}
	},

	onInitGarbagesContainer : function() {

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

	onGarbagesContainerPush : function(view, item) {

		// this.garbagesList().deselectAll();

	},

	showGarbagesDetail : function(list,index, node, record) {
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
			this.getGarbagesContainer().push(this.garbageDetail);
		}
	}
});
