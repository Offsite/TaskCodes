Ext.define('TaskCodes.view.addarea', {
	extend: 'Ext.Panel',
	alias: 'widget.addarea',
	config: 
	{
		layout: 'fit',
		modal: true,
		centered: true,
		width: 600,
		height: 400,
		scrollable: false,
//		hideOnMaskTap: true,
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
				title: 'Add An Area',
				items: 
				[
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						ui: 'confirm',
						text: 'Done',
						itemId: 'addareaDoneButton'
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
		],
		listeners: 
		[
			{
				delegate: '#addareaDoneButton',
				event: 'tap',
				fn: 'onAddAreaDoneButtonTap'
			}
		]
	},
	onAddAreaDoneButtonTap: function()
	{
		console.log('addAreaDoneCommand');
		this.fireEvent('addAreaDoneCommand', this);
	}
});