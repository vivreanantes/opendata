class BootStrap {

    def init = { servletContext ->
		bootstrapService.initDonneesDeveloppement()
    }
    def destroy = {
    }
	
	def bootstrapService
}
