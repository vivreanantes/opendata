/**
 * A simple wrapper for Cloudmade Leaflet for use with Sencha Touch 2. Source :
 * 
 * https://github.com/fredleefarr/Ext.ux.Leaflet/blob/master/Ext.ux.leaflet.js
 * 
 * Example usage:
 * 
 * Ext.application({ name: 'Sencha', launch: function () { var map =
 * Ext.create('Ext.Leaflet', {}); Ext.create('Ext.Panel', { fullscreen: true,
 * layout: 'fit', items: [map] }); } });
 */
Ext.define('VivreANantes.view.geo.LeafletMap', {
			extend : 'Ext.Component',
			map : null,
			xtype : 'leafletmap',
			requires : ['Ext.util.Geolocation'],
			isMap : true,
			config : {

				/**
				 * @cfg {Boolean/Ext.util.Geolocation} useCurrentLocation Pass
				 *      in true to center the map based on the geolocation
				 *      coordinates or pass a
				 *      {@link Ext.util.Geolocation GeoLocation} config to have
				 *      more control over your GeoLocation options
				 * @accessor
				 */
				useCurrentLocation : false,
				/**
				 * @event maplrender Fired when MapOpenStreetMap initially
				 *        rendered.
				 * @param {Ext.Map}
				 *            this
				 * @param {LeafletMap}
				 *            map The rendered LeafletMap instance
				 */

				/**
				 * @cfg {Ext.util.Geolocation} geo Geolocation provider for the
				 *      map.
				 * @accessor
				 */
				geo : null,

				map : null
			},

			constructor : function() {
				// console.log('constructor');
				this.callParent(arguments);
				this.element.setVisibilityMode(Ext.Element.OFFSETS);
				if (!window.L) {
					this.setHtml('Leaflet is required');
				} else {
					// console.log('constpaint');
					this.on('painted', this.renderMap, this);
				}

			},
			renderMap : function() {
				// console.log('rendermap');
				var me = this;
				if (me.map) {
					return true;
				}
				me.map = new L.Map(this.element.dom, {
							zoomControl : true,
							trackResize : false
						});
				me.fireEvent('maplrender', me, me.map);
			},

			updateUseCurrentLocation : function(useCurrentLocation) {
				this.setGeo(useCurrentLocation);
//				if (!useCurrentLocation) {
//					this.renderMap();
//				}
			},

			onUpdate : function(map, e, options) {
				this.setHtml((options || {}).data);
			},

			onDestroy : function() {
				this.callParent();
			},

			applyGeo : function(config) {
				return Ext.factory(config, Ext.util.Geolocation, this.getGeo());
			}
			

		});