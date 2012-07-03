Ext.define('VivreANantes.view.garbages.Garbages', {
	extend : 'Ext.NavigationView',
	xtype : 'garbagesContainer',
	config : {
		styleHtmlContent: true,
		iconCls : 'home2',
        title: 'Garbages',
        itemTpl : '<div>{nom}</div>',
        // html : '<a>test</a>',
        scrollable : 'vertical',
        items: [{
            xtype: 'button',
            text: 'Push a new view!'
            ,handler: function() {
            	console.log("handler");
                //use the push() method to push another view. It works much like
                //add() or setActiveItem(). it accepts a view instance, or you can give it
                //a view config.
                view.push({
                    title: 'Second',
                    html: 'Second view!'
                });
            }
        }],
        
		 items : [
		         {
		        	 xtype:'GarbagesList',
		        	 title:'Déchets'
		         }
		]
	}
	
});