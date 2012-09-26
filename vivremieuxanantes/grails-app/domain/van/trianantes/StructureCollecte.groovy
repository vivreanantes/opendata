package van.trianantes

import van.socle.geolocalisation.Adresse

/**
 * 
 * @author Sergus
 * TODO rajouter la plage horaire
 * TODO rajouter une image
 */
class StructureCollecte {

	String code
	String libelle
	String description
	Adresse adresse
	String numeroTelephone
	String plageHoraire // TODO penser à modifier les plages horaires
	
	static hasMany = [modesCollecte:ModeCollecte, conseils:Conseil]
	
    static constraints = {
		code nullable:false, unique:true
    }
}
