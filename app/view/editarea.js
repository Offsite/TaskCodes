		onItemDisclosure: function()
		{
			if(!this.detailsPanel) 
			{
				this.detailsPanel = Ext.Viewport.add({
					xtype: 'panel',
					right: 75,
					top: 200,
					modal: true,
					height: 200,
					width: 400,
					scrollable: true,
					hideOnMaskTap: true,
					layout: 'fit',
					showAnimation: 
					{
						type: 'popIn',
						duration: 250,
						easing: 'easy-out'
					},
					hideAnimation: 
					{
						type: 'popOut',
						duration: 250,
						easing: 'ease-out'
					},
					items: 
					[
						{
							xtype: 'toolbar',
							docked: 'top',
							title: 'Edit Area',
							items: 
							[
								{
									xtype: 'spacer'
								},
								{
									xtype: 'button',
									ui: 'confirm',
									text: 'Done'
								}
							]
						},
						{
							xtype: 'formpanel',
							items: 
							[
								{
									xtype: 'textareafield',
									name: 'areaDescription',
									label: 'Desription'
								}
							]
						}
					]
				});
			}
			this.detailsPanel.show();
		},
