/**
 * Trisacs
 * 
 * @author Christian Renoulin
 */
Ext.define('VivreANantes.view.trisac.Trisacs', {
			extend : 'Ext.NavigationView',
			xtype : 'trisacs',
			requires : ['Ext.util.Grouper'],
			config : {
				// Titre dans barre de bouton principale
				title : 'Trisac',
				// Icone dans la barre de bouton principale
				iconCls : 'action',
				// nécessaite grouper
				grouped : true,
				items : [
											{
					cls : 'trisacCss',
					// FIXME : les titles sont coupés dans Trisacs.js : 'Trisacs
					// sur le tri' devient "'Trisacs sur le...' à l'affichage
					title : 'Trisacs sur le tri',
					// scrollable : 'true',
					// FIXME pb sur les images dans Trisacs.js : les '\' sont
					// remplacés par rien, donc les liens sont faux.
					itemTpl : '{libelle}',
					xtype : 'list',
					store : {
						autoLoad : true,
						fields : ['code', 'type', 'libelle', 'plagesHoraires', 'adresse_',
								'horaires', 'conseils', 'quartier_'],
						// TODO : le regroupement par Quartier ne fonctionne pas											
						groupField: 'quartier_',
    					grouper: {
              				groupFn: function (item) {
                				return item.get('quartier_');
              				} // groupFn
            			}, // grouper
            			
						proxy : {
							type : 'ajax',
							url : 'data/trisacs.json',
							reader : {
								type : 'json',
								rootProperty : 'distrisac'
							}
						}
					}
				}]
			}
		});