package com.van.trieranantes.dechet

import org.springframework.dao.DataIntegrityViolationException

class ConseilController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() {
        redirect(action: "list", params: params)
    }

    def list(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        [conseilInstanceList: Conseil.list(params), conseilInstanceTotal: Conseil.count()]
    }

    def create() {
        [conseilInstance: new Conseil(params)]
    }

    def save() {
        def conseilInstance = new Conseil(params)
        if (!conseilInstance.save(flush: true)) {
            render(view: "create", model: [conseilInstance: conseilInstance])
            return
        }

        flash.message = message(code: 'default.created.message', args: [message(code: 'conseil.label', default: 'Conseil'), conseilInstance.id])
        redirect(action: "show", id: conseilInstance.id)
    }

    def show(Long id) {
        def conseilInstance = Conseil.get(id)
        if (!conseilInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'conseil.label', default: 'Conseil'), id])
            redirect(action: "list")
            return
        }

        [conseilInstance: conseilInstance]
    }

    def edit(Long id) {
        def conseilInstance = Conseil.get(id)
        if (!conseilInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'conseil.label', default: 'Conseil'), id])
            redirect(action: "list")
            return
        }

        [conseilInstance: conseilInstance]
    }

    def update(Long id, Long version) {
        def conseilInstance = Conseil.get(id)
        if (!conseilInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'conseil.label', default: 'Conseil'), id])
            redirect(action: "list")
            return
        }

        if (version != null) {
            if (conseilInstance.version > version) {
                conseilInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'conseil.label', default: 'Conseil')] as Object[],
                          "Another user has updated this Conseil while you were editing")
                render(view: "edit", model: [conseilInstance: conseilInstance])
                return
            }
        }

        conseilInstance.properties = params

        if (!conseilInstance.save(flush: true)) {
            render(view: "edit", model: [conseilInstance: conseilInstance])
            return
        }

        flash.message = message(code: 'default.updated.message', args: [message(code: 'conseil.label', default: 'Conseil'), conseilInstance.id])
        redirect(action: "show", id: conseilInstance.id)
    }

    def delete(Long id) {
        def conseilInstance = Conseil.get(id)
        if (!conseilInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'conseil.label', default: 'Conseil'), id])
            redirect(action: "list")
            return
        }

        try {
            conseilInstance.delete(flush: true)
            flash.message = message(code: 'default.deleted.message', args: [message(code: 'conseil.label', default: 'Conseil'), id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
            flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'conseil.label', default: 'Conseil'), id])
            redirect(action: "show", id: id)
        }
    }
}
