/**
 * Formulaire des Déchets
 */
Ext.define('VivreANantes.view.comments.CommentsForm', {
		/*extend : 'Ext.Container',
		requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
		xtype: 'commentsForm_xtype',
            items: [
                {
                    title: 'Contact',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    // url: 'contact.php',
                    url : 'http://www.mieuxvivreanantes.fr/reception.pl',
                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: '(email address is optional)',
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',
                            handler: function() {
                                this.up('formpanel').submit();
                            }
                        }
                    ]
                }
            ]
            */
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
										label : 'Message'
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