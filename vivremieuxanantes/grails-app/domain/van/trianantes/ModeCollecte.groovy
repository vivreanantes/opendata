package van.trianantes

class ModeCollecte {

	String code
	String libelle
	String description
	boolean estSousModeCollecte
	
	static hasMany = [conseils:Conseil, sousModesCollecte:ModeCollecte]
	
    static constraints = {
		code nullable:false, unique:true
		sousModesCollecte nullable:true, validator: { val, obj ->
			(obj.estSousModeCollecte && (val.size() == 0)) || !obj.estSousModeCollecte
		}
    }
}
