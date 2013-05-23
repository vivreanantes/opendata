/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.comments.CommentsForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
			xtype : 'commentsForm_xtype',
			config : {
				url : 'truc.php',
				items : [{
							xtype : 'fieldset',
							// instructions : '(courriel ne peut pas être
							// vide)',
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
							text : 'Envoyez un commentaire',
							iu : 'confirm',
							handler : function() {
								this.up(commentsForm_xtype).submit()
							}
						}]
			}

		});