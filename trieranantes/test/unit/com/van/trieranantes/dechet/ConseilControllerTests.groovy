package com.van.trieranantes.dechet



import org.junit.*
import grails.test.mixin.*

@TestFor(ConseilController)
@Mock(Conseil)
class ConseilControllerTests {

    def populateValidParams(params) {
        assert params != null
        // TODO: Populate valid properties like...
        //params["name"] = 'someValidName'
    }

    void testIndex() {
        controller.index()
        assert "/conseil/list" == response.redirectedUrl
    }

    void testList() {

        def model = controller.list()

        assert model.conseilInstanceList.size() == 0
        assert model.conseilInstanceTotal == 0
    }

    void testCreate() {
        def model = controller.create()

        assert model.conseilInstance != null
    }

    void testSave() {
        controller.save()

        assert model.conseilInstance != null
        assert view == '/conseil/create'

        response.reset()

        populateValidParams(params)
        controller.save()

        assert response.redirectedUrl == '/conseil/show/1'
        assert controller.flash.message != null
        assert Conseil.count() == 1
    }

    void testShow() {
        controller.show()

        assert flash.message != null
        assert response.redirectedUrl == '/conseil/list'

        populateValidParams(params)
        def conseil = new Conseil(params)

        assert conseil.save() != null

        params.id = conseil.id

        def model = controller.show()

        assert model.conseilInstance == conseil
    }

    void testEdit() {
        controller.edit()

        assert flash.message != null
        assert response.redirectedUrl == '/conseil/list'

        populateValidParams(params)
        def conseil = new Conseil(params)

        assert conseil.save() != null

        params.id = conseil.id

        def model = controller.edit()

        assert model.conseilInstance == conseil
    }

    void testUpdate() {
        controller.update()

        assert flash.message != null
        assert response.redirectedUrl == '/conseil/list'

        response.reset()

        populateValidParams(params)
        def conseil = new Conseil(params)

        assert conseil.save() != null

        // test invalid parameters in update
        params.id = conseil.id
        //TODO: add invalid values to params object

        controller.update()

        assert view == "/conseil/edit"
        assert model.conseilInstance != null

        conseil.clearErrors()

        populateValidParams(params)
        controller.update()

        assert response.redirectedUrl == "/conseil/show/$conseil.id"
        assert flash.message != null

        //test outdated version number
        response.reset()
        conseil.clearErrors()

        populateValidParams(params)
        params.id = conseil.id
        params.version = -1
        controller.update()

        assert view == "/conseil/edit"
        assert model.conseilInstance != null
        assert model.conseilInstance.errors.getFieldError('version')
        assert flash.message != null
    }

    void testDelete() {
        controller.delete()
        assert flash.message != null
        assert response.redirectedUrl == '/conseil/list'

        response.reset()

        populateValidParams(params)
        def conseil = new Conseil(params)

        assert conseil.save() != null
        assert Conseil.count() == 1

        params.id = conseil.id

        controller.delete()

        assert Conseil.count() == 0
        assert Conseil.get(conseil.id) == null
        assert response.redirectedUrl == '/conseil/list'
    }
}
