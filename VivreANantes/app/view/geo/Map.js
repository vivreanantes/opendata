/**
 * Carte de l'application, permettant d'afficher les différents points d'intérét
 * 
 * @author cpoisnel
 */
Ext.define('VivreANantes.view.geo.Map', {
			extend : 'Ext.Map',
			xtype : 'vanmap',

			config : {
				title : 'Carte',
				iconCls : 'maps',
				useCurrentLocation : true,
				mapOptions : {
					streetViewControl : false,
					disableDefaultUI : true,
					mapTypeId : google.maps.MapTypeId.ROADMAP
				}
			}
		});