Ext.define('VivreANantes.controller.InformationsController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	informations : 'informations',
			informationsList : 'informationsList_xtype'
        },
        control: {
            informationsList : {
            	itemtap : 'showInformations'
            }
        }
    },
    
    showInformations: function(list, index, element, record) {
    	this.getInformations().push({
    		xtype: 'panel',
    		title:record.get('libelle'),
    		html: record.get('description_fr'),
    		scrollable: true,
    		styleHtmlContent: true
    	});
    }
});