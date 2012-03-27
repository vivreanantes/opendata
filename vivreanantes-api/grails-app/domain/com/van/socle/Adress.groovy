package com.van.socle

class Adress {

	String postalCode
	String completeAdress
	String streetName
	String number
	Town town
	
	public String getAdresseComplete()
	{
		return number + streetName + postalCode + town.townName
	}
	
    static constraints = {
		
    }
}
