package com.van.trieranantes.dechet

import com.van.trieranantes.geolocalisation.Adresse;

class StructureCollecte {

	String code
	String libelle
	String description
	Adresse adresse
	String plageHoraire
	String telephone
	String siteInternet
	
	static belongsTo=ModeCollecte
	
	static hasMany = [modesCollecte:ModeCollecte, conseils:Conseil]
	
    static constraints = {
		code nullable:false, unique:true
    }
}
