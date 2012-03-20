package com.van.socle



import org.junit.*
import grails.test.mixin.*

@TestFor(CommuneController)
@Mock(Commune)
class CommuneControllerTests {


    def populateValidParams(params) {
      assert params != null
      // TODO: Populate valid properties like...
      //params["name"] = 'someValidName'
    }

    void testIndex() {
        controller.index()
        assert "/commune/list" == response.redirectedUrl
    }

    void testList() {

        def model = controller.list()

        assert model.communeInstanceList.size() == 0
        assert model.communeInstanceTotal == 0
    }

    void testCreate() {
       def model = controller.create()

       assert model.communeInstance != null
    }

    void testSave() {
        controller.save()

        assert model.communeInstance != null
        assert view == '/commune/create'

        response.reset()

        populateValidParams(params)
        controller.save()

        assert response.redirectedUrl == '/commune/show/1'
        assert controller.flash.message != null
        assert Commune.count() == 1
    }

    void testShow() {
        controller.show()

        assert flash.message != null
        assert response.redirectedUrl == '/commune/list'


        populateValidParams(params)
        def commune = new Commune(params)

        assert commune.save() != null

        params.id = commune.id

        def model = controller.show()

        assert model.communeInstance == commune
    }

    void testEdit() {
        controller.edit()

        assert flash.message != null
        assert response.redirectedUrl == '/commune/list'


        populateValidParams(params)
        def commune = new Commune(params)

        assert commune.save() != null

        params.id = commune.id

        def model = controller.edit()

        assert model.communeInstance == commune
    }

    void testUpdate() {
        controller.update()

        assert flash.message != null
        assert response.redirectedUrl == '/commune/list'

        response.reset()


        populateValidParams(params)
        def commune = new Commune(params)

        assert commune.save() != null

        // test invalid parameters in update
        params.id = commune.id
        //TODO: add invalid values to params object

        controller.update()

        assert view == "/commune/edit"
        assert model.communeInstance != null

        commune.clearErrors()

        populateValidParams(params)
        controller.update()

        assert response.redirectedUrl == "/commune/show/$commune.id"
        assert flash.message != null

        //test outdated version number
        response.reset()
        commune.clearErrors()

        populateValidParams(params)
        params.id = commune.id
        params.version = -1
        controller.update()

        assert view == "/commune/edit"
        assert model.communeInstance != null
        assert model.communeInstance.errors.getFieldError('version')
        assert flash.message != null
    }

    void testDelete() {
        controller.delete()
        assert flash.message != null
        assert response.redirectedUrl == '/commune/list'

        response.reset()

        populateValidParams(params)
        def commune = new Commune(params)

        assert commune.save() != null
        assert Commune.count() == 1

        params.id = commune.id

        controller.delete()

        assert Commune.count() == 0
        assert Commune.get(commune.id) == null
        assert response.redirectedUrl == '/commune/list'
    }
}
