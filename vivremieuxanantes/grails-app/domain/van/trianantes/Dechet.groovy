package van.trianantes

/**
 * 
 * @author Sergus
 * TODO ajout de l'image et de l'image secondaire
 */
class Dechet {

	String code
	String libelle
	String description
	CategorieTraitement categorieTraitement
	Boolean estVerifie
	
	static hasMany = [categoriesUsuelles:CategorieUsuelle, modesCollecte:ModeCollecte, conseils:Conseil]
	
    static constraints = {
		code nullable:false, unique:true
    }
}
