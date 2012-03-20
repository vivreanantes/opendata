package com.van.socle

import org.springframework.dao.DataIntegrityViolationException

class CommuneController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() {
        redirect(action: "list", params: params)
    }

    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        [communeInstanceList: Commune.list(params), communeInstanceTotal: Commune.count()]
    }

    def create() {
        [communeInstance: new Commune(params)]
    }

    def save() {
        def communeInstance = new Commune(params)
        if (!communeInstance.save(flush: true)) {
            render(view: "create", model: [communeInstance: communeInstance])
            return
        }

		flash.message = message(code: 'default.created.message', args: [message(code: 'commune.label', default: 'Commune'), communeInstance.id])
        redirect(action: "show", id: communeInstance.id)
    }

    def show() {
        def communeInstance = Commune.get(params.id)
        if (!communeInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'commune.label', default: 'Commune'), params.id])
            redirect(action: "list")
            return
        }

        [communeInstance: communeInstance]
    }

    def edit() {
        def communeInstance = Commune.get(params.id)
        if (!communeInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'commune.label', default: 'Commune'), params.id])
            redirect(action: "list")
            return
        }

        [communeInstance: communeInstance]
    }

    def update() {
        def communeInstance = Commune.get(params.id)
        if (!communeInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'commune.label', default: 'Commune'), params.id])
            redirect(action: "list")
            return
        }

        if (params.version) {
            def version = params.version.toLong()
            if (communeInstance.version > version) {
                communeInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'commune.label', default: 'Commune')] as Object[],
                          "Another user has updated this Commune while you were editing")
                render(view: "edit", model: [communeInstance: communeInstance])
                return
            }
        }

        communeInstance.properties = params

        if (!communeInstance.save(flush: true)) {
            render(view: "edit", model: [communeInstance: communeInstance])
            return
        }

		flash.message = message(code: 'default.updated.message', args: [message(code: 'commune.label', default: 'Commune'), communeInstance.id])
        redirect(action: "show", id: communeInstance.id)
    }

    def delete() {
        def communeInstance = Commune.get(params.id)
        if (!communeInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'commune.label', default: 'Commune'), params.id])
            redirect(action: "list")
            return
        }

        try {
            communeInstance.delete(flush: true)
			flash.message = message(code: 'default.deleted.message', args: [message(code: 'commune.label', default: 'Commune'), params.id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
			flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'commune.label', default: 'Commune'), params.id])
            redirect(action: "show", id: params.id)
        }
    }
}
