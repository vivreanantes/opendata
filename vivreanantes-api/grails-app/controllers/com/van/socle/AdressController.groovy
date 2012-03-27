package com.van.socle

import grails.converters.JSON
import org.springframework.dao.DataIntegrityViolationException

class AdressController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() {
        redirect(action: "list", params: params)
    }

    def list2() {
		render Adress.list() as JSON
    }
	
	def list() {
		params.max = Math.min(params.max ? params.int('max') : 10, 100)
		[adresseInstanceList: Adress.list(params), adresseInstanceTotal: Adress.count()]
				
}

    def create() {
        [adresseInstance: new Adress(params)]
    }

    def save() {
        def adresseInstance = new Adress(params)
        if (!adresseInstance.save(flush: true)) {
            render(view: "create", model: [adresseInstance: adresseInstance])
            return
        }

		flash.message = message(code: 'default.created.message', args: [message(code: 'adresse.label', default: 'Adresse'), adresseInstance.id])
        redirect(action: "show", id: adresseInstance.id)
    }

    def show() {
        def adresseInstance = Adress.get(params.id)
        if (!adresseInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'adresse.label', default: 'Adresse'), params.id])
            redirect(action: "list")
            return
        }

        [adresseInstance: adresseInstance]
    }

    def edit() {
        def adresseInstance = Adress.get(params.id)
        if (!adresseInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'adresse.label', default: 'Adresse'), params.id])
            redirect(action: "list")
            return
        }

        [adresseInstance: adresseInstance]
    }

    def update() {
        def adresseInstance = Adress.get(params.id)
        if (!adresseInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'adresse.label', default: 'Adresse'), params.id])
            redirect(action: "list")
            return
        }

        if (params.version) {
            def version = params.version.toLong()
            if (adresseInstance.version > version) {
                adresseInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'adresse.label', default: 'Adresse')] as Object[],
                          "Another user has updated this Adresse while you were editing")
                render(view: "edit", model: [adresseInstance: adresseInstance])
                return
            }
        }

        adresseInstance.properties = params

        if (!adresseInstance.save(flush: true)) {
            render(view: "edit", model: [adresseInstance: adresseInstance])
            return
        }

		flash.message = message(code: 'default.updated.message', args: [message(code: 'adresse.label', default: 'Adresse'), adresseInstance.id])
        redirect(action: "show", id: adresseInstance.id)
    }

    def delete() {
        def adresseInstance = Adress.get(params.id)
        if (!adresseInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'adresse.label', default: 'Adresse'), params.id])
            redirect(action: "list")
            return
        }

        try {
            adresseInstance.delete(flush: true)
			flash.message = message(code: 'default.deleted.message', args: [message(code: 'adresse.label', default: 'Adresse'), params.id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
			flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'adresse.label', default: 'Adresse'), params.id])
            redirect(action: "show", id: params.id)
        }
    }
}
