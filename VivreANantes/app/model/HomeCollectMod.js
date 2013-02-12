Ext.define('VivreANantes.model.HomeCollectMod', {
			extend : 'Ext.data.Model',

			config : {
				fields : [ {
							name : 'modesCollecte',
							// type : 'string',
							// mapping : 'modesCollecte',
						  	convert: function(value, record) {
								return value.replace(/modco_sac/g, "Sac ").replace(/modco_bac/g, "Bac ");
                			}
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
							convert: function(value, record) {
								// if not blank
								if (value.replace(/\s/g,"") != "") {
									// TODO : mettre à la fin .replace(" )", ")")
									value = " ("+value+") ";
								}
								return value;
							}
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