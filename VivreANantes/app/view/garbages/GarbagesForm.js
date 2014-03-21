/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.garbages.GarbagesForm', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.field.Text', 'Ext.field.Select' ],
	xtype : 'garbagesForm_xtype',
	config : {
		items : [ {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [ {
				xtype : 'textfield',
				name : 'name',
				// label : 'Recherche',
				width : 190,
				id : 'garbagesFormText',
				placeHolder : "Déchet"
			}, {
				xtype : 'button',
				id : 'garbagesFormButton',
				text : 'Chercher'
			} ]
		}, {
			xtype : 'selectfield',
			label : 'Catégorie',
			id : 'garbagesFormSelect',
			hidden : true,
			options : [ {
				text : 'Tous',
				value : 'all'
			}, {
				text : "Plastique",
				value : "cu_plastique"
			}, {
				text : "Papiers-cartons",
				value : "cu_papierscartons"
			}, {
				text : "Métal",
				value : "cu_metal"
			}, {
				text : "Déchets verts / bois",
				value : "cu_vertbois"
			}, {
				text : "Verre / Vaisselle / Pots",
				value : "cu_verrevaisselle"
			}, {
				text : "Vêtements / tissu",
				value : "cu_vetementtissu"
			}, {
				text : "Encombrants",
				value : "cu_encombrant"
			}, {
				text : "Toxique",
				value : "cu_toxique"
			}, {
				text : "Divers",
				value : "cu_divers"
			}, {
				text : "Nourriture",
				value : "cu_nourriture"
			}, {
				text : "Electronique",
				value : "cu_electronique"
			}, {
				text : "Toxique du Jardin",
				value : "scu_toxiquejardin"
			}, {
				text : "Toxique du Garage",
				value : "scu_toxiquegarage"
			}, {
				text : "Toxique de la Cuisine",
				value : "scu_toxiquecuisine"
			}, {
				text : "Toxique de la Salle de bain",
				value : "scu_toxiquesdb"
			}, {
				text : "Toxique du Bricolage",
				value : "scu_toxiquebrico"
			}, {
				text : "Toxique du Parasite",
				value : "scu_toxiqueparasite"
			}, {
				text : "Toxique Divers",
				value : "scu_toxiquedivers"
			} ]
		} ]
	}

});