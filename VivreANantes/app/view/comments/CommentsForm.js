/**
 * Formulaire d'envoie d'un commentaire
 */
Ext.define('VivreANantes.view.comments.CommentsForm', {
			extend : 'Ext.Container',
			requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
			xtype : 'commentsForm_xtype',
			style : 'background-color: #759E60;',
			config : {
				url : 'http://www.mieuxvivreanantes.fr/reception.pl',
				items : [{
							xtype : 'fieldset',
							// instructions : '(courriel pas vide)',
							items : [{
										xtype : 'emailfield',
										name : 'email',
										label : 'Courriel'
									}, {
										xtype : 'textareafield',
										name : 'message',
										label : 'Message',
										id : 'commentsFormTextareafield'
									}]
						}, {
							xtype : 'button',
							text : 'Envoyez un commentaire',
							iu : 'confirm',
							handler : function() {
								this.up("commentsForm_xtype").submit()
							}
						}]
			}

		});