package com.van.trieranantes.common

import com.van.trieranantes.dechet.Dechet;

class RechercheController {

    def resultat() {
		def resultatsRecherche = []
		String keywords = "bouteille"
		
		// début bouchon
		def dechets = Dechet.findAll()
		Dechet dechet = dechets[0]
		def element = []
		element.add(dechet.categorieUsuelle)
		element.add(dechet)
		resultatsRecherche.add(element)
		// fin bouchon
		
		[keywords:keywords, resultatsRecherche:resultatsRecherche]
	}
}
