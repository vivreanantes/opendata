package com.van.trieranantes.dechet



import org.junit.*
import grails.test.mixin.*

@TestFor(DechetController)
@Mock(Dechet)
class DechetControllerTests {

    def populateValidParams(params) {
        assert params != null
        // TODO: Populate valid properties like...
        //params["name"] = 'someValidName'
    }

    void testIndex() {
        controller.index()
        assert "/dechet/list" == response.redirectedUrl
    }

    void testList() {

        def model = controller.list()

        assert model.dechetInstanceList.size() == 0
        assert model.dechetInstanceTotal == 0
    }

    void testCreate() {
        def model = controller.create()

        assert model.dechetInstance != null
    }

    void testSave() {
        controller.save()

        assert model.dechetInstance != null
        assert view == '/dechet/create'

        response.reset()

        populateValidParams(params)
        controller.save()

        assert response.redirectedUrl == '/dechet/show/1'
        assert controller.flash.message != null
        assert Dechet.count() == 1
    }

    void testShow() {
        controller.show()

        assert flash.message != null
        assert response.redirectedUrl == '/dechet/list'

        populateValidParams(params)
        def dechet = new Dechet(params)

        assert dechet.save() != null

        params.id = dechet.id

        def model = controller.show()

        assert model.dechetInstance == dechet
    }

    void testEdit() {
        controller.edit()

        assert flash.message != null
        assert response.redirectedUrl == '/dechet/list'

        populateValidParams(params)
        def dechet = new Dechet(params)

        assert dechet.save() != null

        params.id = dechet.id

        def model = controller.edit()

        assert model.dechetInstance == dechet
    }

    void testUpdate() {
        controller.update()

        assert flash.message != null
        assert response.redirectedUrl == '/dechet/list'

        response.reset()

        populateValidParams(params)
        def dechet = new Dechet(params)

        assert dechet.save() != null

        // test invalid parameters in update
        params.id = dechet.id
        //TODO: add invalid values to params object

        controller.update()

        assert view == "/dechet/edit"
        assert model.dechetInstance != null

        dechet.clearErrors()

        populateValidParams(params)
        controller.update()

        assert response.redirectedUrl == "/dechet/show/$dechet.id"
        assert flash.message != null

        //test outdated version number
        response.reset()
        dechet.clearErrors()

        populateValidParams(params)
        params.id = dechet.id
        params.version = -1
        controller.update()

        assert view == "/dechet/edit"
        assert model.dechetInstance != null
        assert model.dechetInstance.errors.getFieldError('version')
        assert flash.message != null
    }

    void testDelete() {
        controller.delete()
        assert flash.message != null
        assert response.redirectedUrl == '/dechet/list'

        response.reset()

        populateValidParams(params)
        def dechet = new Dechet(params)

        assert dechet.save() != null
        assert Dechet.count() == 1

        params.id = dechet.id

        controller.delete()

        assert Dechet.count() == 0
        assert Dechet.get(dechet.id) == null
        assert response.redirectedUrl == '/dechet/list'
    }
}
