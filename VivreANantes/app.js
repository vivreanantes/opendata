Ext.Loader.setPath({
	'Ext' : 'sdk/src'
});

      Ext.define('Ext.overrides.Map', {
            override: 'Ext.Map',
            constructor: function() {
                Ext.Map.superclass.constructor.apply(this, arguments);
                this.element.setVisibilityMode(Ext.Element.OFFSETS);

                if (!(window.google || {}).maps) {
                    this.setHtml('Google Maps API is required');
                }
            },
            getMapOptions: function() {
                return Ext.merge({}, this.options || this.getInitialConfig('mapOptions'));
            }
        });
Ext
		.application({
			name : 'VivreANantes',
			views : [
			// Vue Principale
			'Main',
			// Partie Carte
			'geo.LeafletMap',
			'geo.MapOSM',
			'geo.Map', 
			'geo.MapContainer',
			'geo.Toast',
			// Accueil
			'welcome.Welcome',
			// Jeu
			'game.Guess',
			// A propos
			'about.Desc',
			// Calendrier
			'calendar.Calendrier'
			],

			controllers : [ 'Welcome', 'Geo' ],

			icon : {
				57 : 'resources/icons/Icon.png',
				72 : 'resources/icons/Icon~ipad.png',
				114 : 'resources/icons/Icon@2x.png',
				144 : 'resources/icons/Icon~ipad@2x.png'
			},

			phoneStartupScreen : 'resources/loading/Homescreen.jpg',
			tabletStartupScreen : 'resources/loading/Homescreen~ipad.jpg',

			viewport : {
				autoMaximize : true
			},

			launch : function() {
				// Destroy the #appLoadingIndicator element
				Ext.fly('appLoadingIndicator').destroy();

				// Initialize the main view
				Ext.Viewport.add({
					xtype : 'main'
				});
			}
			
		});
