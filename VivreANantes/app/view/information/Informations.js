/**
 * Informations
 * 
 * @author cpoisnel
 */
Ext.define('VivreANantes.view.information.Informations', {
			extend : 'Ext.NavigationView',
			xtype : 'informations',
			config : {
				title : 'Informations',
				iconCls : 'action',
				autoDestroy : false,
				html : 'Informations',
				items : [
				         {
				        	 xtype:'toolbar',
				        	 title:'Accueil'
				         }
				         
				]
			}
		});