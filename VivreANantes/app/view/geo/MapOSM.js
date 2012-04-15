/**
 * Carte de l'application, permettant d'afficher les différents points d'intérét
 * Version Open Street Map
 * 
 * @author cpoisnel
 */
Ext.define('VivreANantes.view.geo.MapOSM', {
			extend : 'Ext.ux.LeafletMap',
			xtype : 'vanmaposm',

			config : {
				title : 'Carte OSM',
				iconCls : 'maps'				
			}
		});