Ext.define('VivreANantes.view.structures.StructuresDetails', {
			extend : 'Ext.Container',
			xtype : 'structuresDetails_xtype',

			config : {
				title : 'Détail de la structure',
				layout : 'vbox',
				// tpl : '',
				// html: '',
				scrollable : true,
				styleHtmlContent : true,
				record : null,
				items : [{
							id : "structuresDetails_description",
							tpl : "{description}",
							data : {
								"description" : ""
							}
						}, {
							id : "structuresDetails_advices"
						}, {
							id : "structuresDetails_comments"
						}]
			}

		});