/**
 * Controlleur pour les vues et modèles de Carte
 * 
 * <p>
 * Pour information : Classe Carte Wrapper Carte Google Lire :
 * https://developers.google.com/maps/documentation/javascript/reference?hl=fr#ControlPosition
 * http://leafletjs.com/reference.html#marker
 * </p>
 * 
 * 
 * TODO : - Gérer un nombre d'objets restreints à afficher - Gérer un
 * enregistrement dans le localStorage
 * 
 * 
 * 
 * 
 */
Ext.define('VivreANantes.controller.GeoController', {
    extend : 'VivreANantes.controller.AbstractController',
    requires : ['Ext.MessageBox'],
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
                activate : 'onMapActivate',
                maplrender : 'onMapRender'
            },
            mapContainer : {
                initialize : 'onInitMapContainer',
                activate : 'onMapContainerActivate'

            }
        }
    },

    init : function() {
        var me = this;
        var LeafIcon = L.Icon.extend({});
        me.greenIcon = new LeafIcon({
                    iconUrl : 'resources/icons/marker-icon-green.png'
                });
        me.pinkIcon = new LeafIcon({
                    iconUrl : 'resources/icons/marker-icon-pink.png'
                });
        me.redIcon = new LeafIcon({
                    iconUrl : 'resources/icons/marker-icon-red.png'
                });
        me.blueIcon = new LeafIcon({
                    iconUrl : 'resources/icons/marker-icon-blue.png'
                })
    },

    resetCenter : function(geo) {
        localStorage.setItem('latitude', geo.getLatitude());
        localStorage.setItem('longitude', geo.getLongitude());

        this.resetCenterPosition(geo);

    },

    /**
     * Remettre à Zero le centre
     * 
     * @param {}
     *            geo
     */
    resetCenterPosition : function(geo) {
        var me = this;

        console.log('latitude : ' + geo.getLatitude() + ' - longitude :'
                + geo.getLongitude());
        if (Ext.isDefined(me.getVanmaposm())) {
            var map = me.getVanmaposm().map;
            if (Ext.isDefined(map)) {

                var position = new L.LatLng(geo.getLatitude(), geo
                                .getLongitude());

                if (!Ext.isDefined(map.center)) {
                    map.center = new L.Marker(position);
                    map.addLayer(map.center);
                    map.center.setIcon(me.greenIcon);
                }

                map.center.setLatLng(position);

                if (!map.hasLayer(me.cloudmade)) {
                    map.addLayer(me.cloudmade);
                }
                map.setView(
                        new L.LatLng(geo.getLatitude(), geo.getLongitude()),
                        map.getZoom());
            } else {
                console.log('map non encore disponible');
            }
        }

    },

    /**
     * A l'initialisation du container (au démarrage de l'application, comme le
     * container est dans le Viewport)
     */
    onInitMapContainer : function() {
        console.log('onInitMapContainer');
    },

    /**
     * A la première activation de la Carte, on crée l'objet Ext.Map
     */
    onMapContainerActivate : function(pContainer) {
        console.log('onMapContainerActivate');

    },

    /**
     * Action à l'initialisation de la Carte
     */
    onInitMap : function() {
        console.log('initMap');

    },

    /**
     * Action sur le changement de centre (propre Ext.Map)
     * 
     * @param {}
     *            extmap
     * @param {}
     *            map
     * @param {}
     *            center
     * @param {}
     *            eOpts
     */
    onCenterChange : function(extmap, map, center, eOpts) {
        // console.log(center);

    },

    /**
     * Positionner les structures
     * 
     */
    positionnerStructures : function() {
        var me = this;

        console.log('positionnerStructures');

        me.refreshMarkers();

    },

    /**
     * Action réalisée après le rendu de la carte
     * 
     * @param {}
     *            extmap
     * @param {}
     *            map
     * @param {}
     *            eOpts
     */
    onMapRender : function(extmap, map, eOpts) {
        var me = this;
        if (!Ext.isDefined(me.cloudmade)) {
            me.cloudmade = new L.TileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution : 'OpenStreetMap - VivreANantes',
                        // attribution : 'Map data &copy; <a
                        // href="http://openstreetmap.org">OpenStreetMap</a>
                        // contributors, <a
                        // href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
                        // Imagery © <a
                        // href="http://cloudmade.com">CloudMade</a>',
                        maxZoom : 18
                    });
        }

        // A l'initialisation de la carte, on crée une variable du
        // controller pour gérer la modification de localisation
        // gérant la réactualisation en fonction de la postion
        if (!Ext.isDefined(me.geolocate)) {
            me.geolocate = Ext.create('Ext.util.Geolocation', {
                        autoUpdate : true,
                        listeners : {
                            locationupdate : function(geo) {
                                me.resetCenter(geo);
                            },
                            locationerror : function(geo, bTimeout,
                                    bPermissionDenied, bLocationUnavailable,
                                    message) {
                                if (bTimeout) {
                                    console.error('Timeout');
                                } else {
                                    console.error('Erreur :(');
                                }
                            }
                        }
                    });
        }

        if (!Ext.isDefined(me.structureStore)) {
            me.structureStore = Ext.create('VivreANantes.store.StructureStore',
                    {
                        autoLoad : true,
                        listeners : {
                            'load' : function(store, results, successful) {
                                // console.log("Chargement du structure store");
                                // console.log(store);
                                // console.log(results);
                                // console.log(successful);

                                me.positionnerStructures();
                            }

                        }
                    });
        };

    },

    /**
     * Action réalisée lorsqu'on active le panel Carte
     */
    onMapActivate : function(container, newc) {
        console.log('onMapActivate');
        this.verifyFirstTimeMap();
    },

    /**
     * Vérification du premier accès à la carte. Il faudrait mutualiser cette
     * méthode (côté Framework)
     */
    verifyFirstTimeMap : function() {
        console.log('verifier');
        if (localStorage.getItem('alreadyAccessMap') != 'true') {
            Ext.Msg
                    .alert(
                            'Carte',
                            'C\'est la première fois que vous accédez à la carte (pour la maquette de VAN). On peut mettre une aide ici.',
                            Ext.emptyFn);
            localStorage.setItem('alreadyAccessMap', 'true');
        }
    },

    /**
     * 
     */
    onStructureStoreFilter : function() {
        var me = this;

        // var text = this.getGarbagesFormText();
        // var select = this.getGarbagesFormSelect();
        // var store = this.getGarbagesList().getStore();

        // MOCK
        var filter = "modco_decheterie";
        // MOCK

        if (filter === 'all') {
            me.structureStore.clearFilter();

        } else {
            me.structureStore.filter('modesCollecte', filter);
        }

        // me.fireEvent('filterstructure',store);

        me.refreshMarkers();
    },

    refreshMarkers : function() {
        var me = this;
        var map = me.getVanmaposm().map;

        //map.clearLayers();
        var labelDistrisac = this.translate("label_modco_distrisac");
        var labelReemploi = this.translate("label_modco_reemploi");
        var labelEncombrants = this.translate("label_modco_encombrants");
        var labelEcotox = this.translate("label_modco_ecotox");

        if (!map.hasLayer(me.cloudmade)) {
            map.addLayer(me.cloudmade);
        }
        // Centrer à Nantes, la localisation fera le reste
        map.setView(new L.LatLng(47.21837100000001, -1.553620999999985), 15);
        // TODO : JSON des maps association : icone + categorie

        me.structureStore.each(function(record) {
                    var position = new L.LatLng(record.get('latitude'), record
                                    .get('longitude'));
                    var marker = new L.Marker(position);

                    var icon;
                    // MOCK
                    if (record.get('modesCollecte') !=null && 
                        record.get('modesCollecte')=="modco_distrisac") {
                        var type = labelDistrisac+ "<br/>";
                        icon = me.greenIcon;
                    } else if (record.get('modesCollecte') !=null && 
                        record.get('modesCollecte')=="modco_ecotox") {
                        var type = labelEcotox+ "<br/>";	
                        icon = me.redIcon;
                    } else if (record.get('modesCollecte') !=null && 
                        record.get('modesCollecte')=="modco_encombrants") {
                        	var type = labelEncombrants+ "<br/>";
                        icon = me.redIcon;
                    } else if (record.get('modesCollecte') !=null && 
                        record.get('modesCollecte')=="modco_reemploi") {
                        var type = labelReemploi+ "<br/>";
                        icon = me.pinkIcon;
                    } else {
                    	var type = "";
                        icon = me.blueIcon;
                       //  marker-icon-blue.png
                    }
                    marker.setIcon(icon);
                    map.addLayer(marker);
                    var label = type + record.get('libelle');
                    marker.bindPopup(label).openPopup();
                });
    }

});
