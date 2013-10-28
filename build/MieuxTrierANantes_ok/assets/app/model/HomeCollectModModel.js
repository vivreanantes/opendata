Ext.define('VivreANantes.model.HomeCollectModModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [ {
							name : 'modesCollecte',
							// type : 'string',
							// mapping : 'modesCollecte',
						  	convert: function(value, record) {
						  		if (value!=null) {
									return value.replace(/modco_sac/g, "Sac ").replace(/modco_bac/g, "Bac ");
						  		}
						  		return value;
                			}
						}, {
							name : 'dcv',
							type : 'string',
							mapping : 'dcv'
						},
						{
							name : 'nvsa',
							type : 'string'
						},
						{
							name : 'ci',
							// convert ajoute transforme 'un commentaire' en ' (un commentaire') OU '' en ''
							convert: function(value, record) {
								// if not blank
								if (value!=null && value.replace(/\s/g,"") != "") {
									// TODO : mettre à la fin .replace(" )", ")")
									value = " ("+value+") ";
								}
								return value;
							}
						},
						{
							name : 'jct',
							type : 'string'
						}, {
							name : 'jcbb',
							type : 'string',
							convert: function(value, record) {
								if (record.data["modesCollecte"]!=null && record.data["modesCollecte"].indexOf("Bac bleu",0)!=-1) {
									return "<B>Bleu</B> "+value;
								}
								return value;
							}
						}, {
							name : 'jcbj',
							type : 'string',
							convert: function(value, record) {
								if (record.data["modesCollecte"]!=null && record.data["modesCollecte"].indexOf("Bac jaune",0)!=-1) {
									return "<B>Jaune</B> "+value;
								}
								else {
									return value;
								}
							}
						}, {
							name : 'src',
							type : 'string'
						}]
			}

		});