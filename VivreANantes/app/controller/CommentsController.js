Ext.define('VivreANantes.controller.CommentsController', {
	extend : 'VivreANantes.controller.AbstractController',

	config : {
		refs : {
			comments : 'comments_xtype',
			commentDetail : "commentsDetails_xtype"
			// , commentsList : "commentsList_xtype"
		},
		control : {
			/*commentsList : {
				// initialize : 'onInitFaq',
				itemtap : 'onListItemTap'
			}*/
		}
	},

	/*onInitFaq : function(list) {
		var store = Ext.create('VivreANantes.store.CommentsStore');
		list.setStore(store);
		// Initialisation du storage
		var localStorageController= this.getApplication().getController("VivreANantes.controller.LocalStorageController");
		localStorageController.initLocalStorage();
		var temp = localStorageController.getLocale();
	},*/

	/*onListItemTap : function(list, index, element, record) {
		this.showComment(record);
	},*/

	showComment : function(record) {

		this.getComments().push({
					title : record.get('libelle'),
					html : record.get('description')

				});
	},

	/**
	 * Renvoie une chaine de caractère correspond aux commentaires sur un
	 * élément de l'application
	 * 
	 * @param {code}
	 *            le code, ou plusieurs codes sépararés par des virgules.
	 * 
	 * @return {}
	 */
	old_getCommentString : function(code) {

var faqTraduit = "";
		var commentLink = this.makeLink("commentsPanel");

		// On parcours les remarques de la faq
		// commonDatasComments
		for (var j = 0; j < commonDatasComments.length; j++) {
			if (commonDatasComments[j]["elements"] != null) {
				// TODO utiliser getArrayFromString à la place
				var arElementsFaq = commonDatasComments[j]["elements"]
						.replace(", /g", ",").replace(" ,/g", ",").split(',');
				for (var i = 0; i < arElementsFaq.length; i++) {
					if (arElementsFaq[i] === code) {
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