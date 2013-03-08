package com.van.trieranantes.dechet

import org.springframework.dao.DataIntegrityViolationException

class CategorieUsuelleController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

	def listeDechets(Long id) {
		def categorieUsuelle = CategorieUsuelle.get(id)
		if (!categorieUsuelle) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), id])
			redirect(action: "list")
		} else {
			List<Dechet> listeDechets = Dechet.findAllByCategorieUsuelle(categorieUsuelle)
			println listeDechets
			listeDechets.each {println it.nom }
			[categorieUsuelle: categorieUsuelle, listeDechets:listeDechets]
		}
	}
	
    def index() {
        redirect(action: "list", params: params)
    }

    def list(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        [categorieUsuelleInstanceList: CategorieUsuelle.list(params), categorieUsuelleInstanceTotal: CategorieUsuelle.count()]
    }

    def create() {
        [categorieUsuelleInstance: new CategorieUsuelle(params)]
    }

    def save() {
        def categorieUsuelleInstance = new CategorieUsuelle(params)
        if (!categorieUsuelleInstance.save(flush: true)) {
            render(view: "create", model: [categorieUsuelleInstance: categorieUsuelleInstance])
            return
        }

        flash.message = message(code: 'default.created.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), categorieUsuelleInstance.id])
        redirect(action: "show", id: categorieUsuelleInstance.id)
    }

    def show(Long id) {
        def categorieUsuelleInstance = CategorieUsuelle.get(id)
        if (!categorieUsuelleInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), id])
            redirect(action: "list")
            return
        }

        [categorieUsuelleInstance: categorieUsuelleInstance]
    }

    def edit(Long id) {
        def categorieUsuelleInstance = CategorieUsuelle.get(id)
        if (!categorieUsuelleInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), id])
            redirect(action: "list")
            return
        }

        [categorieUsuelleInstance: categorieUsuelleInstance]
    }

    def update(Long id, Long version) {
        def categorieUsuelleInstance = CategorieUsuelle.get(id)
        if (!categorieUsuelleInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), id])
            redirect(action: "list")
            return
        }

        if (version != null) {
            if (categorieUsuelleInstance.version > version) {
                categorieUsuelleInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle')] as Object[],
                          "Another user has updated this CategorieUsuelle while you were editing")
                render(view: "edit", model: [categorieUsuelleInstance: categorieUsuelleInstance])
                return
            }
        }

        categorieUsuelleInstance.properties = params

        if (!categorieUsuelleInstance.save(flush: true)) {
            render(view: "edit", model: [categorieUsuelleInstance: categorieUsuelleInstance])
            return
        }

        flash.message = message(code: 'default.updated.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), categorieUsuelleInstance.id])
        redirect(action: "show", id: categorieUsuelleInstance.id)
    }

    def delete(Long id) {
        def categorieUsuelleInstance = CategorieUsuelle.get(id)
        if (!categorieUsuelleInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), id])
            redirect(action: "list")
            return
        }

        try {
            categorieUsuelleInstance.delete(flush: true)
            flash.message = message(code: 'default.deleted.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
            flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'categorieUsuelle.label', default: 'CategorieUsuelle'), id])
            redirect(action: "show", id: id)
        }
    }
}
