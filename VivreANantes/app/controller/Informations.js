Ext.define('VivreANantes.controller.Informations', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	informations : 'informations'
        },
        control: {
        	// fonctionne comme une CSS selecteur
            'informations list' : {
            	itemtap : 'showInformations'
            }
        }
    },
    
    showInformations: function(list, index, element, record) {
        // console.log(record.get('title'));
    	this.getInformations().push({
    		xtype: 'panel',
    		title:record.get('name'),
    		html: record.get('description_fr'),
    		scrollable: true,
    		styleHtmlContent: true
    	});
    }
});