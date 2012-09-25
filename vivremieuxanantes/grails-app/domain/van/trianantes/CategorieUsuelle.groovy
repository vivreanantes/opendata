package van.trianantes

class CategorieUsuelle{

	String code
	String libelle
	boolean estSousCategorie
	
	static hasMany = [sousCategories:CategorieUsuelle, conseils:Conseil]
	
    static constraints = {
		code nullable:false, unique:true
		sousCategories nullable:true, validator: { val, obj ->
		    (obj.estSousCategorie && (val.size() == 0)) || !obj.estSousCategorie
		}
		
    }
}
