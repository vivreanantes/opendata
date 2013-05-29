Ext.define('VivreANantes.model.HomeCollectModModel', {
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
							// convert ajoute transforme 'un commentaire' en ' (un commentaire') OU '' en ''
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
							type : 'string'
						}, {
							name : 'joursCollecteBacsBleus',
							type : 'string',
							convert: function(value, record) {
								if (record.data["modesCollecte"].indexOf("Bac bleu",0)!=-1) {
									return "<B>Bleu</B> "+value;
								}
								return value;
							}
						}, {
							name : 'joursCollecteBacsJaunes',
							type : 'string',
							convert: function(value, record) {
								if (record.data["modesCollecte"].indexOf("Bac jaune",0)!=-1) {
									return "<B>Jaune</B> "+value;
								}
								return value;
							}
						}]
			}

		});