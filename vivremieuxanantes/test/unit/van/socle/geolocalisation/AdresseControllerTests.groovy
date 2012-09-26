package van.socle.geolocalisation



import org.junit.*
import grails.test.mixin.*

@TestFor(AdresseController)
@Mock(Adresse)
class AdresseControllerTests {

    def populateValidParams(params) {
        assert params != null
        // TODO: Populate valid properties like...
        //params["name"] = 'someValidName'
    }

    void testIndex() {
        controller.index()
        assert "/adresse/list" == response.redirectedUrl
    }

    void testList() {

        def model = controller.list()

        assert model.adresseInstanceList.size() == 0
        assert model.adresseInstanceTotal == 0
    }

    void testCreate() {
        def model = controller.create()

        assert model.adresseInstance != null
    }

    void testSave() {
        controller.save()

        assert model.adresseInstance != null
        assert view == '/adresse/create'

        response.reset()

        populateValidParams(params)
        controller.save()

        assert response.redirectedUrl == '/adresse/show/1'
        assert controller.flash.message != null
        assert Adresse.count() == 1
    }

    void testShow() {
        controller.show()

        assert flash.message != null
        assert response.redirectedUrl == '/adresse/list'

        populateValidParams(params)
        def adresse = new Adresse(params)

        assert adresse.save() != null

        params.id = adresse.id

        def model = controller.show()

        assert model.adresseInstance == adresse
    }

    void testEdit() {
        controller.edit()

        assert flash.message != null
        assert response.redirectedUrl == '/adresse/list'

        populateValidParams(params)
        def adresse = new Adresse(params)

        assert adresse.save() != null

        params.id = adresse.id

        def model = controller.edit()

        assert model.adresseInstance == adresse
    }

    void testUpdate() {
        controller.update()

        assert flash.message != null
        assert response.redirectedUrl == '/adresse/list'

        response.reset()

        populateValidParams(params)
        def adresse = new Adresse(params)

        assert adresse.save() != null

        // test invalid parameters in update
        params.id = adresse.id
        //TODO: add invalid values to params object

        controller.update()

        assert view == "/adresse/edit"
        assert model.adresseInstance != null

        adresse.clearErrors()

        populateValidParams(params)
        controller.update()

        assert response.redirectedUrl == "/adresse/show/$adresse.id"
        assert flash.message != null

        //test outdated version number
        response.reset()
        adresse.clearErrors()

        populateValidParams(params)
        params.id = adresse.id
        params.version = -1
        controller.update()

        assert view == "/adresse/edit"
        assert model.adresseInstance != null
        assert model.adresseInstance.errors.getFieldError('version')
        assert flash.message != null
    }

    void testDelete() {
        controller.delete()
        assert flash.message != null
        assert response.redirectedUrl == '/adresse/list'

        response.reset()

        populateValidParams(params)
        def adresse = new Adresse(params)

        assert adresse.save() != null
        assert Adresse.count() == 1

        params.id = adresse.id

        controller.delete()

        assert Adresse.count() == 0
        assert Adresse.get(adresse.id) == null
        assert response.redirectedUrl == '/adresse/list'
    }
}
