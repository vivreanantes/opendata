package van.trianantes

class CategorieTraitement {

	String code
	String libelle
	String description
	
	static hasMany=[modesCollecte:ModeCollecte, conseils:Conseil]
	
    static constraints = {
		code nullable:false, unique:true
    }
}
