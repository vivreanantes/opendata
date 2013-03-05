/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.faq.FaqForm', {
			extend : 'Ext.form.Panel',
						requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
			xtype : 'faqForm_xtype',
			config : {
				url : 'truc.php',
				items : [{
							xtype : 'fieldset',
							// title : 'Ajout un commentaire',
							// instructions : '(courriel ne peut pas être vide)',
							items : [{
										xtype : 'textfield',
										name : 'name',
										label : 'Nom'
									}, {
										xtype : 'emailfield',
										name : 'email',
										label : 'Courriel'
									}, {
										xtype : 'textareafield',
										name : 'message',
										label : 'Message'
									}]
						}, {
							xtype : 'button',
							text : 'Envoyer un commentaire',
							iu : 'confirm',
							handler : function() {
								this.up(faqForm_xtype).submit()
							}
						}]
			}

		});