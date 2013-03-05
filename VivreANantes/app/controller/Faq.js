Ext.define('VivreANantes.controller.Faq', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	faqList : 'faqList'
        },
        control: {
        	// fonctionne comme une CSS selecteur
            'faqList list' : {
            	itemtap : 'showFaq'
            }
        }
    },
    
    showFaq: function(list, index, element, record) {
        // console.log(record.get('title'));
    	this.getInformations().push({
    		xtype: 'panel',
    		title:record.get('libelle'),
    		html: record.get('description_fr'),
    		scrollable: true,
    		styleHtmlContent: true
    	});
    }
});