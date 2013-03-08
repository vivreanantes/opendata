package com.van.trieranantes.dechet

class BootstrapService {

    def initDonneesDeveloppement() {
		log.debug ">initDonneesDeveloppement"
		creerCollecte()
		log.debug "<initDonneesDeveloppement"
    }
	
	public creerCollecte(){
		log.debug ">creerCollecte"
		CategorieTraitement cat1 = new CategorieTraitement(code:"cat1", libelle:"Verre", description:"du verre")
		assert cat1.save()
		assert CategorieTraitement.count >0
		
		CategorieUsuelle catUsuelle1 = new CategorieUsuelle(code:"catUsuelle1", nom:"Verre / Vaisselle / Pots", estSousCategorieUsuelle:false)
		assert catUsuelle1.save()
		assert CategorieUsuelle.count >0
		
		Dechet dechet1 = new Dechet(code:"dechet1", nom:"Bouteille en verre", 
			description:"Description du déchet", categorieTraitement:cat1,
			categorieUsuelle:catUsuelle1)
		assert dechet1.save()
		assert Dechet.count > 0
		
		log.debug "<creerCollecte"
	}
}
