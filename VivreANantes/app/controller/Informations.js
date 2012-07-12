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
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    
    showInformations: function(list, index, element, record) {
        // console.log(record.get('title'));
    	this.getInformations().push({
    		xtype: 'panel',
    		title:record.get('name'),
    		html: record.get('description'),
    		scrollable: true,
    		styleHtmlContent: true
    	})
    }
});