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
		console.log('onInitFaq');
		var store = Ext.create('VivreANantes.store.CommentsStore');
		list.setStore(store);
	},

	onListItemTap : function(list, index, element, record) {
		this.showComment(record);
	},

	showComment : function(record) {

		// console.log(record.get('title'));
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
	getCommentString : function(code) {

		var faqTraduit = "";
		var commentLink = this.makeLink("commentsPanel");
		// On parcours les remarques de la faq
		var dataFaq = this.getCommentsList().getStore().getData();
		dataFaq.each(function(recordFaq) {
					// TODO utiliser getArrayFromString à la place
					var arrayElementsFaq = recordFaq.raw["elements"].replace(
							", /g", ",").replace(" ,/g", ",").split(',');
					for (i in arrayElementsFaq) {
						if (arrayElementsFaq[i] === code) {
							faqTraduit += "<br/>"+ commentLink + " : <B>"
									+ recordFaq.raw["libelle"] + "</B><BR/>"
									+ recordFaq.raw["description"];

						}

					}
				});
				if (faqTraduit!="") {
					faqTraduit += "<br/>";
				}
		/*if (faqTraduit != "") {
			return "<span class='x-button-icon trash' style='visibility: visible !important;' id='ext-element-102'>"+faqTraduit+"</span>"
		}*/
		/*
		 * if (faqTraduit !== "") { faqTraduit = "<BR/><BR/>Commentaires
		 * (extraits FAQ) : " + faqTraduit; }
		 */
		return faqTraduit;
	}
});