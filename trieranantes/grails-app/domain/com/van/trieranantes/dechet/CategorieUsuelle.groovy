package com.van.trieranantes.dechet

class CategorieUsuelle {

	String code
	String nom
	String description
	boolean estSousCategorie
	
	static hasMany = [sousCategories:CategorieUsuelle, conseils:Conseil]
	
     static constraints = {
		code nullable:false, unique:true
		nom nullable:false
		description nullable:true
		sousCategories nullable:true, validator: { val, obj ->
		    (obj.estSousCategorie && (val.size() == 0)) || !obj.estSousCategorie
		}
    }
}
