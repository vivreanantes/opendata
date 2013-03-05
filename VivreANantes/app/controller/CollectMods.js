Ext.define('VivreANantes.controller.CollectMods', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	collectMods : 'collectMods'
        },
        control: {
        	// fonctionne comme une CSS selecteur
            'collectMods list' : {
            	itemtap : 'showCollectMods'
            }
        }
    },
    
    showCollectMods: function(list, index, element, record) {
    	this.getCollectMods().push({
    		xtype: 'panel',
    		title:record.get('libelle'),
    		html: record.get('libelle'),
    		scrollable: true,
    		styleHtmlContent: true
    	});
    }
});