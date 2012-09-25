package van.socle.participation

class Commentaire {

	String code
	String libelle
	
    static constraints = {
		code nullable:false, unique:true
    }
}
