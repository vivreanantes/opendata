/**
 * Formulaire d'envoi d'un commentaire
 */
Ext.define('VivreANantes.view.comments.CommentsForm', {
			extend : 'Ext.form.FormPanel',
			requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
			xtype : 'commentsForm_xtype',
			style : 'background-color: #759E60;',
			config : {
				url : 'http://renoulin.fr/mieuxtrieranantes/send_mail.php',
				headers: {'Content-Type':'multipart/form-data; charset=UTF-8'},
				method: 'POST',
				items : [{
							xtype : 'fieldset',
							// instructions : '(courriel pas vide)',
							items : [{
										xtype : 'emailfield',
										name : 'email',
										label : 'Email *'
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
										id : 'commentsFormTextareafield',
										placeHolder : "Commentaires sur l'application ou la filière tri"
									}]
						}, {
							xtype : 'button',
							text : 'Envoyer',
							iu : 'confirm',
							handler : function() {

								this.up("commentsForm_xtype").submit({
										failure : function(form, result) {
										if (result.failure != null) {
											 Ext.Msg.alert("Envoi message", "Echec de l'envoi : " + result.failure);
										} else {
											 Ext.Msg.alert("Envoi message", "Echec de l'envoi.");
										}
									},
									success : function(form, result) {
										 Ext.Msg.alert("Envoi message", "Votre message a bien été envoyé.");
										

									/*					var panel = Ext.create('Ext.Panel', {     
				    floating: true,
				     centered: true,
				     modal: true,
				     width: 300,
				     height: 425,
				     styleHtmlContent: true,
				     style: 'background: white;',
				     style: 'height:425px; width:300px;',
				     data: {firstName: 'Tommy', lastName: 'Maintz'},
				    tpl: Ext.create('Ext.XTemplate', ['<p>{firstName} {lastName}</p>']) 
				});
				
				panel.show();*/
									}
								});
							}
						}]
			}

		});