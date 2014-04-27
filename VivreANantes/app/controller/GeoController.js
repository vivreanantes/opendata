/**
 * Controlleur pour les vues et modèles de Carte
 * 
 * 
 */

Ext.define('VivreANantes.controller.GeoController', {
    extend : 'VivreANantes.controller.AbstractController',
    config : {
        refs : {
            vanmaposm : {
                selector : 'vanmaposm',
                xtype : 'vanmaposm',
                autoCreate : true
            }
        },
        control : {
            vanmaposm : {
                activate : 'onMapActivate'
            }
         
        }
    },

     /**
     * Action réalisée lorsqu'on active le panel Carte
     */
    onMapActivate : function(container, newc) {
       
       var map = this.getVanmaposm(); 
       map.init();
       
       
       if (!Ext.isDefined(this.structureGeoStore)) {
       	
            this.structureGeoStore = Ext.create('VivreANantes.store.StructureGeoStore',  { autoLoad : false });
            
            this.structureGeoStore.load(function(records, operation, success) {  		
            	
            	
    			records.forEach(function (element, index, array) {  							    			
    				 
    				 	map.addStructure(element);
    			});
    			
    			
			}, this);

        };   
        
       
    }


});
