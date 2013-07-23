/**
 * Formulaire d'envoie d'un commentaire
 */
Ext.define('VivreANantes.view.comments.CommentsForm', {
			extend : 'Ext.form.FormPanel',
			requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
			xtype : 'commentsForm_xtype',
			style : 'background-color: #759E60;',
			config : {
				url : 'http://renoulin.fr/mieuxtrieranantes/send_mail.php',
				method: 'POST',
				success : function(response){
         			console.log(response.responseText); //<--- the server response
    			},
    			failure : function(response){
         			console.log(response.responseText); //<--- the server response
    			},
				items : [{
							xtype : 'fieldset',
							// instructions : '(courriel pas vide)',
							items : [{
										xtype : 'emailfield',
										name : 'email',
										label : 'Courriel'
									},
									{
										xtype : 'textfield',
										name : 'sujet',
										label : 'Sujet',
										id : 'commentsFormTextfield'
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