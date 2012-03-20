package com.van.socle

class Adresse {

	String codePostal
	String adresseCompleteRenseignee
	String nomVoie
	String numero
	Commune commune
	
	public String getAdresseComplete()
	{
		return numero + nomVoie + codePostal + commune.nomCommune
	}
	
    static constraints = {
		
    }
}
