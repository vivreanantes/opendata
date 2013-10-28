/**
 * Controleur du local storage
 */
Ext.define('VivreANantes.controller.LocalStorageController', {
			extend : 'VivreANantes.controller.AbstractController',
			config : {
				//initialize : this.onInit
			},

			/*onInit : function() {
				this.initLocalStorage();
			},*/
			
			initLocalStorage : function() {
				// our Store automatically picks up the LocalStorageProxy
				// defined on the Search model
				this.store = Ext.create('Ext.data.Store', {
							model : "VivreANantes.model.LocaleStorageModel"
						});

				// loads any existing Search data from localStorage
				this.store.load();

				// now add some Searches
				this.store.add({
							locale : 'fr'
						});

				// finally, save our Search data to localStorage
				this.store.sync();
			},
			
			
			getLocale : function() {
				return this.getVariableFromLocalStorage("locale", "fr");
			},
			
			getVariableFromLocalStorage : function(dataName, defaultValue) {
				var result = defaultValue;
				if (this.store!=null) {
					var datas = this.store.getData();		
					datas.each(function(record) {
						result = (record.data[dataName]);
					});
				}
				return result;
			}
		});
