package van.socle.geolocalisation

import org.springframework.dao.DataIntegrityViolationException

class AdresseController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() {
        redirect(action: "list", params: params)
    }

    def list(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        [adresseInstanceList: Adresse.list(params), adresseInstanceTotal: Adresse.count()]
    }

    def create() {
        [adresseInstance: new Adresse(params)]
    }

    def save() {
        def adresseInstance = new Adresse(params)
        if (!adresseInstance.save(flush: true)) {
            render(view: "create", model: [adresseInstance: adresseInstance])
            return
        }

        flash.message = message(code: 'default.created.message', args: [message(code: 'adresse.label', default: 'Adresse'), adresseInstance.id])
        redirect(action: "show", id: adresseInstance.id)
    }

    def show(Long id) {
        def adresseInstance = Adresse.get(id)
        if (!adresseInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'adresse.label', default: 'Adresse'), id])
            redirect(action: "list")
            return
        }

        [adresseInstance: adresseInstance]
    }

    def edit(Long id) {
        def adresseInstance = Adresse.get(id)
        if (!adresseInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'adresse.label', default: 'Adresse'), id])
            redirect(action: "list")
            return
        }

        [adresseInstance: adresseInstance]
    }

    def update(Long id, Long version) {
        def adresseInstance = Adresse.get(id)
        if (!adresseInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'adresse.label', default: 'Adresse'), id])
            redirect(action: "list")
            return
        }

        if (version != null) {
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

    def delete(Long id) {
        def adresseInstance = Adresse.get(id)
        if (!adresseInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'adresse.label', default: 'Adresse'), id])
            redirect(action: "list")
            return
        }

        try {
            adresseInstance.delete(flush: true)
            flash.message = message(code: 'default.deleted.message', args: [message(code: 'adresse.label', default: 'Adresse'), id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
            flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'adresse.label', default: 'Adresse'), id])
            redirect(action: "show", id: id)
        }
    }
}
