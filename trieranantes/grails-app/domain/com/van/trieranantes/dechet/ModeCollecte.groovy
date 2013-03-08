package com.van.trieranantes.dechet

class ModeCollecte {

	String code
	String libelle
	String description
	boolean estSousModeCollecte
	
	static hasMany = [sousModesCollecte:ModeCollecte, structuresCollecte:StructureCollecte, conseils:Conseil]
	
     static constraints = {
		code nullable:false, unique:true
		sousModesCollecte nullable:true, validator: { val, obj ->
			(obj.estSousModeCollecte && (val.size() == 0)) || !obj.estSousModeCollecte
		}
    }
}
