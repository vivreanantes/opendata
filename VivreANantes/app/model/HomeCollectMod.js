Ext.define('VivreANantes.model.HomeCollectMod', {
			extend : 'Ext.data.Model',

			config : {
				fields : [ {
							name : 'modesCollecte',
							type : 'string',
							mapping : 'modesCollecte'
						}, {
							name : 'denominationCompleteVoie',
							type : 'string',
							mapping : 'denominationCompleteVoie'
						},
						{
							name : 'nomVoie',
							type : 'string',
							mapping : 'nomVoie'
						},
						{
							name : 'typeVoie',
							type : 'string',
							mapping : 'typeVoie'
						},
						{
							name : 'complementInformation',
							type : 'string',
							mapping : 'complementInformation'
						},
						{
							name : 'joursCollecteTriSac',
							type : 'string',
							mapping : 'joursCollecteTriSac'
						}, {
							name : 'joursCollecteBacsBleus',
							type : 'string',
							mapping : 'joursCollecteBacsBleus'
						}, {
							name : 'joursCollecteBacsJaunes',
							type : 'string',
							mapping : 'joursCollecteBacsJaunes'
						}]
			}

		});