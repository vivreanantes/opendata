Ext.define('VivreANantes.controller.Trisacs', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	trisacs : 'trisacs'
        },
        control: {
        	// fonctionne comme une CSS selecteur
            'trisacs list' : {
            	itemtap : 'showTrisacs'
            }
        }
    },
    
    showTrisacs: function(list, index, element, record) {
        // console.log(record.get('title'));
    	this.getTrisacs().push({
    		xtype: 'panel',
    		title:record.get('libelle'),
    		html: record.get('description_fr')+"<br/>"+ record.get('adresseTemp')+"<br/>"+"Distribution : "+record.get('plageHoraire')+"<br/>",
    		scrollable: true,
    		styleHtmlContent: true
    	});
    }
});