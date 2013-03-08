package com.van.trieranantes.dechet



import org.junit.*
import grails.test.mixin.*

@TestFor(CategorieUsuelleController)
@Mock(CategorieUsuelle)
class CategorieUsuelleControllerTests {

    def populateValidParams(params) {
        assert params != null
        // TODO: Populate valid properties like...
        //params["name"] = 'someValidName'
    }

    void testIndex() {
        controller.index()
        assert "/categorieUsuelle/list" == response.redirectedUrl
    }

    void testList() {

        def model = controller.list()

        assert model.categorieUsuelleInstanceList.size() == 0
        assert model.categorieUsuelleInstanceTotal == 0
    }

    void testCreate() {
        def model = controller.create()

        assert model.categorieUsuelleInstance != null
    }

    void testSave() {
        controller.save()

        assert model.categorieUsuelleInstance != null
        assert view == '/categorieUsuelle/create'

        response.reset()

        populateValidParams(params)
        controller.save()

        assert response.redirectedUrl == '/categorieUsuelle/show/1'
        assert controller.flash.message != null
        assert CategorieUsuelle.count() == 1
    }

    void testShow() {
        controller.show()

        assert flash.message != null
        assert response.redirectedUrl == '/categorieUsuelle/list'

        populateValidParams(params)
        def categorieUsuelle = new CategorieUsuelle(params)

        assert categorieUsuelle.save() != null

        params.id = categorieUsuelle.id

        def model = controller.show()

        assert model.categorieUsuelleInstance == categorieUsuelle
    }

    void testEdit() {
        controller.edit()

        assert flash.message != null
        assert response.redirectedUrl == '/categorieUsuelle/list'

        populateValidParams(params)
        def categorieUsuelle = new CategorieUsuelle(params)

        assert categorieUsuelle.save() != null

        params.id = categorieUsuelle.id

        def model = controller.edit()

        assert model.categorieUsuelleInstance == categorieUsuelle
    }

    void testUpdate() {
        controller.update()

        assert flash.message != null
        assert response.redirectedUrl == '/categorieUsuelle/list'

        response.reset()

        populateValidParams(params)
        def categorieUsuelle = new CategorieUsuelle(params)

        assert categorieUsuelle.save() != null

        // test invalid parameters in update
        params.id = categorieUsuelle.id
        //TODO: add invalid values to params object

        controller.update()

        assert view == "/categorieUsuelle/edit"
        assert model.categorieUsuelleInstance != null

        categorieUsuelle.clearErrors()

        populateValidParams(params)
        controller.update()

        assert response.redirectedUrl == "/categorieUsuelle/show/$categorieUsuelle.id"
        assert flash.message != null

        //test outdated version number
        response.reset()
        categorieUsuelle.clearErrors()

        populateValidParams(params)
        params.id = categorieUsuelle.id
        params.version = -1
        controller.update()

        assert view == "/categorieUsuelle/edit"
        assert model.categorieUsuelleInstance != null
        assert model.categorieUsuelleInstance.errors.getFieldError('version')
        assert flash.message != null
    }

    void testDelete() {
        controller.delete()
        assert flash.message != null
        assert response.redirectedUrl == '/categorieUsuelle/list'

        response.reset()

        populateValidParams(params)
        def categorieUsuelle = new CategorieUsuelle(params)

        assert categorieUsuelle.save() != null
        assert CategorieUsuelle.count() == 1

        params.id = categorieUsuelle.id

        controller.delete()

        assert CategorieUsuelle.count() == 0
        assert CategorieUsuelle.get(categorieUsuelle.id) == null
        assert response.redirectedUrl == '/categorieUsuelle/list'
    }
}
