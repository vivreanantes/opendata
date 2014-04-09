Ext.define('VivreANantes.model.HomeCollectModModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [               			{
							name : 'modesCollecte',
						  	convert: function(value, record) {
						  		if (record.raw["modesCollecte"]=="modco_sacjaune,modco_sacbleu") {
						  			return "Sacs jaunes et bleus";
						  		} else if (record.raw["modesCollecte"]=="modco_bacbleu,modco_bacjaune") {
						  			return "Bacs jaunes et bleus";
						  		}
						  		return "";
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
							type : 'string'
							// ,
							// convert ajoute transforme 'un commentaire' en ' (un commentaire') OU '' en ''
							// convert: function(value, record) {
							// 	// if not blank
							// 	if (value!=null && value.replace(/\s/g,"") != "") {
							// 		// TODO : mettre à la fin .replace(" )", ")")
							// 		value = " ("+value+") ";
							// 	}
							// 	return value;
							// }
						},
						{
							name : 'jct',
							type : 'string'
						}, {
							name : 'jcbb',
							type : 'string',
							convert: function(value, record) {
								if (record.raw["modesCollecte"]!=null && record.raw["modesCollecte"].indexOf("modco_bacbleu",0)!=-1) {
									return "<B>Bleu</B> "+value;
								}
								return value;
							}
						}, {
							name : 'jcbj',
							type : 'string',
							convert: function(value, record) {
								if (record.raw["modesCollecte"]!=null && record.raw["modesCollecte"].indexOf("modco_bacjaune",0)!=-1) {
									return "<B>Jaune</B> "+value;
								}
								else {
									return value;
								}
							}
						}, {
							name : 'src',
							type : 'string'
						}, {
							name : 'conseils',
							type : 'string',
							convert: function(value, record) {
								if (record.raw["modesCollecte"]!=null && record.raw["modesCollecte"].indexOf("modco_bac",0)!=-1) {
									return "<B>Rappels</B> : les déchets recyclables dans le bac jaune, les déchets non recyclables dans le bac bleu.";
								}
								else {
									return "<B>Rappels</B> : les sacs sont à déposer dans le même bac, les déchets recyclables dans le sac jaune, les déchets non recyclables dans le sac bleu.";
								}
							}
						}]
			}

		});