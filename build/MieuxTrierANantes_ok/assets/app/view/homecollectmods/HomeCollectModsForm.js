/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.homecollectmods.HomeCollectModsForm', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.field.Text', 'Ext.field.Select'],
	xtype : 'HomeCollectModsForm',
	config : {
		items : [{
					xtype : 'textfield',
					name : 'name',
					label : 'Adresse recherchée',
					id : 'homeCollectModsFormText',
					placeHolder : 'Sans dénomination. Exemple : Alain Gerbault'
				},
				{
					xtype : 'label',
					html : '<I>Source : Open Data Nantes, valable <font color=red>à partir du 16/09/2013</font></I>'
				}
				/*
				, {
					xtype : 'selectfield',
					label : 'Type de voie',
					id : 'homeCollectModsFormSelect',
					options : [{
								text : 'Tous',
								value : 'all'
							}, {
								text : "Allée",
								value : "Allée"
							}, {
								text : "Avenue",
								value : "Avenue"
							}, {
								text : "Boulevard",
								value : "Boulevard"
							}, {
								text : "Impasse",
								value : "Impasse"
							},
							{
								text : "Route",
								value : "Route"
							}, {
								text : "Rue/ruelle",
								value : "Rue,Ruelle"
							},
							{
								text : "Autre (chemin, place, cour...)",
								value : "Bas Chemin,Chemin,Côte,Cour,Esplanade,Hameau,Mail,Passage,Petit Chemin,Petite Avenue,Petite Rue,Place,Pont,Promenade,Quai,Rond-Point,Sentier,Square,Venelle"
							}]
				}
				*/
				]
	}

});