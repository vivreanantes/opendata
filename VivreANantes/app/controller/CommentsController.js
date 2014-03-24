Ext.define('VivreANantes.controller.CommentsController', {
	extend : 'VivreANantes.controller.AbstractController',

	config : {
		refs : {
			comments : 'comments_xtype',
			commentDetail : "commentsDetails_xtype",
			commentsList : "commentsList_xtype"
		},
		control : {
			commentsList : {
				initialize : 'onInitFaq',
				itemtap : 'onListItemTap'
			}
		}
	},

	onInitFaq : function(list) {
		// STORE CommentsStore
		// var store = Ext.create('VivreANantes.store.CommentsStore');
		// list.setStore(store);
		// Initialisation du storage
		var localStorageController = this
				.getApplication()
				.getController("VivreANantes.controller.LocalStorageController");
		localStorageController.initLocalStorage();
		var temp = localStorageController.getLocale();
	},

	/*
	 * onListItemTap : function(list, index, element, record) {
	 * this.showComment(record); },
	 */

	/*
	 * showComment : function(record) {
	 * 
	 * this.getComments().push({ title : record.get('libelle'), html :
	 * record.get('description')
	 * 
	 * }); },
	 */

	/**
	 * Renvoie une chaine de caractère correspond aux commentaires sur un
	 * élément de l'application
	 * 
	 * @param {code}
	 *            le code, ou plusieurs codes sépararés par des virgules.
	 * 
	 * @return {}
	 */
	getCommentString : function(code) {

		var faqTraduit = "";
		var commentLink = this.makeLink("commentsPanel");

		// On parcours les remarques de la faq

		// var dataFaq = this.getCommentsList().getStore().getData();
		// dataFaq.each(function(recordFaq) {
		// // TODO utiliser getArrayFromString à la place
		// var arrayElementsFaq = recordFaq.data["elements"].replace(
		// ", /g", ",").replace(" ,/g", ",").split(',');
		// for (i in arrayElementsFaq) {
		// if (arrayElementsFaq[i] === code) {
		// faqTraduit += "<br/>"+ commentLink + " : <B>"
		// + recordFaq.data["libelle"] + "</B><BR/>"
		// + recordFaq.data["description"];
		//
		// }
		//
		// }
		// });

		// commonDatasComments
		for (j in commonDatasComments) {
			if (commonDatasComments[j]["elements"] != null) {
				// TODO utiliser getArrayFromString à la place
				var arrayElementsFaq = commonDatasComments[j]["elements"]
						.replace(", /g", ",").replace(" ,/g", ",").split(',');
				for (i in arrayElementsFaq) {
					if (arrayElementsFaq[i] === code) {
						faqTraduit += "<br/>" + commentLink + " : <B>"
								+ commonDatasComments[j]["libelle"]
								+ "</B><BR/>"
								+ commonDatasComments[j]["description"];
					}
				}
			}
		}

		if (faqTraduit != "") {
			faqTraduit += "<br/>";
		}
		return faqTraduit;
	}
});