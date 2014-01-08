Ext.define('VivreANantes.controller.InformationsController', {
	extend : 'VivreANantes.controller.AbstractController',

	config : {
		refs : {
			informations : 'informations',
			informationsList : 'informationsbuttonslist_xtype'
		},
		control : {
			/*
			 * informationsList : { itemtap : 'showInformations' },
			 */
			informations : {
				activate : 'onActivate'
			},
			// fonctionne comme une CSS selecteur
			'informationsbuttonslist_xtype button' : {
				tap : 'onShowDetails',
				back : 'onPushBackButton10'
			}
		}
	},
	onShowDetails : function(button, e, eOpts) {
		this.showDetails(button._data.code);
	},
	onPushBackButton10 : function() {
		// console.log("onPushBackButton10");
		// this.onPushBackButton();
	},

	showDetails : function(elementId) {
		// Récupère l'élément à partir du store
		var myElement = this.getElementFromStore(elementId);

		var description = myElement["description"];
		var description = description
				+ this
						.getApplication()
						.getController("VivreANantes.controller.CommentsController")
						.getCommentString(myElement["code"]);
		var title = "<I>" + this.translateWithUpperFirstLetter("label_fiche")
				+ "</I> " + myElement["libelle"];
		// Met l'élément dans le détail
				this.getInformations().push({
							xtype : 'panel',
							title : myElement["libelle"],
							html : description,
							scrollable : true,
							styleHtmlContent : true
						});
		/*this.getInformations().push({
					layout : 'vbox',
					items : [{
								xtype : 'panel',
								title : title,
								html : description,
								scrollable : true,
								styleHtmlContent : true
							}, {
								id : "collectModsDetails_comments"
							}]
				});*/
		// this.setItemsElement(this.structuresDetail,"informations", this.getItemsComments(myElement["code"], title));

	},

	/*
	 * Renvoie le mode de collecte
	 */
	getElementFromStore : function(idElement) {
		var description = "";
		var faq = "";
		var libelle = "";
		var image = "";
		var bouton = "";
		var dataInformations = this.getApplication()
				.getController("VivreANantes.controller.GarbagesController")
				.getInformationsList().getStore().getData();
		dataInformations.each(function(record) {
					if (record.data["code"] === idElement) {
						description = record.data["description_fr"];
						libelle = record.data["libelle"];
						image = record.data["image"];
						bouton = record.data["bouton"];
						faq = record.data["faq"];
					}
				});
		return {
			"code" : idElement,
			"faq" : faq,
			"description" : description,
			"libelle" : libelle,
			"image" : image,
			"bouton" : bouton
		}
	},

	onActivate : function(newActiveItem, container, oldActiveItem, eOpts) {
		var myController = this.getApplication()
				.getController("VivreANantes.controller.GarbagesController");
		var datas = myController.getInformationsList().getStore();

		var arrayItemsToShow = this.getDatasForButtons(datas, "fiche");
	
		var result = new Array();
		if (arrayItemsToShow.length > 0) {

			var theItems = arrayItemsToShow;
			for (var i = 0; i < theItems.length; i++) {
				var stLibelle = this.decoupe(theItems[i].libelle);
				result.push({
					code : theItems[i].id,
						label : stLibelle,
						image : theItems[i].image
				});
			}
		}

		var nbGarbagesMax = 39;	// la page UsualCategoriesButtonPanel.js affiche 39 éléments
		this.setDataInButtonsWithManyLines(this.getInformationsList(),"informationsButtonsList", result, nbGarbagesMax, 3);
		// var arrayItems = this.getContentButtonsPanel(arrayItemsToShow);
		// this.removeAllAndSetItems(this.getInformationsList(), arrayItems);
	}
	
});