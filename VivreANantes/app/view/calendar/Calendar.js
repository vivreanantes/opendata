/**
 * Vue du Calendrier
 */
Ext.define('VivreANantes.view.calendar.Calendar' ,{
	extend : 'Ext.Container',
	
	config : {
		title:'Calendrier',
		iconCls : 'time',
		html : '<br/><p>Calendrier</p>'
	}
});


/**
Ext.define('VivreANantes.view.calendar.Calendar', {
			extend : 'Ext.NavigationView',
			xtype : 'calendar',
			config : {
				title : 'Calendrier',
				iconCls : 'time',
				scrollable : true,
				itemTpl : 'ggg {libelle} {plagesHoraires}',
				xtype : 'list',
				store : {
					autoLoad : true,
					fields : ['libelle', 'horaires', 'plagesHoraires'],
					proxy : {
						type : 'ajax',
						url : 'data/plages_horaires.json',
						reader : {
							type : 'json',
							rootProperty : 'plages_horaires'
						}
					}
				}
			}
		});
*/