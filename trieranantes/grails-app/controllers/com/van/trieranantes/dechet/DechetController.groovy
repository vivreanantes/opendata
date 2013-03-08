package com.van.trieranantes.dechet

import org.springframework.dao.DataIntegrityViolationException

class DechetController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

	def detail(Long id) {
		def dechetInstance = Dechet.get(id)
		if (!dechetInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'dechet.label', default: 'Dechet'), id])
			redirect(action: "list")
			return
		}

		[dechetInstance: dechetInstance]
	}
	
    def index() {
        redirect(action: "list", params: params)
    }

    def list(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        [dechetInstanceList: Dechet.list(params), dechetInstanceTotal: Dechet.count()]
    }

    def create() {
        [dechetInstance: new Dechet(params)]
    }

    def save() {
        def dechetInstance = new Dechet(params)
        if (!dechetInstance.save(flush: true)) {
            render(view: "create", model: [dechetInstance: dechetInstance])
            return
        }

        flash.message = message(code: 'default.created.message', args: [message(code: 'dechet.label', default: 'Dechet'), dechetInstance.id])
        redirect(action: "show", id: dechetInstance.id)
    }

    def show(Long id) {
        def dechetInstance = Dechet.get(id)
        if (!dechetInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'dechet.label', default: 'Dechet'), id])
            redirect(action: "list")
            return
        }

        [dechetInstance: dechetInstance]
    }

    def edit(Long id) {
        def dechetInstance = Dechet.get(id)
        if (!dechetInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'dechet.label', default: 'Dechet'), id])
            redirect(action: "list")
            return
        }

        [dechetInstance: dechetInstance]
    }

    def update(Long id, Long version) {
        def dechetInstance = Dechet.get(id)
        if (!dechetInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'dechet.label', default: 'Dechet'), id])
            redirect(action: "list")
            return
        }

        if (version != null) {
            if (dechetInstance.version > version) {
                dechetInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'dechet.label', default: 'Dechet')] as Object[],
                          "Another user has updated this Dechet while you were editing")
                render(view: "edit", model: [dechetInstance: dechetInstance])
                return
            }
        }

        dechetInstance.properties = params

        if (!dechetInstance.save(flush: true)) {
            render(view: "edit", model: [dechetInstance: dechetInstance])
            return
        }

        flash.message = message(code: 'default.updated.message', args: [message(code: 'dechet.label', default: 'Dechet'), dechetInstance.id])
        redirect(action: "show", id: dechetInstance.id)
    }

    def delete(Long id) {
        def dechetInstance = Dechet.get(id)
        if (!dechetInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'dechet.label', default: 'Dechet'), id])
            redirect(action: "list")
            return
        }

        try {
            dechetInstance.delete(flush: true)
            flash.message = message(code: 'default.deleted.message', args: [message(code: 'dechet.label', default: 'Dechet'), id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
            flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'dechet.label', default: 'Dechet'), id])
            redirect(action: "show", id: id)
        }
    }
}
