Ext.define('TaskCodes.view.setareas', {
	extend: 'Ext.Container',
	alias: 'widget.setareas',
	config: 
	{
		layout: 'vbox',
		items: 
		[
		    {
        		xtype: 'titlebar',
        		docked: 'top',
        		title: '..::Task Codes::..'
        	},
			{ 
				xtype: 'toolbar',
				docked: 'bottom',
        		items: 
        		[
        			{
        				xtype: 'button',
        				text: 'Back',
        				ui: 'back',
        				itemId: 'areaListBackButton'
        			},
        			{
        				xtype: 'spacer'
        			},
        			{
        				xtype: 'button',
        				text: 'Continue',
        				itemId: 'areaListContinueButton',
        				ui: 'forward'
        			}
        		]
			
			},
			{
				xtype: 'panel',
				scrollable: false,
				height: 150,
				styleHtmlContent: true,
				items: 
				[
					{
						xtype: 'titlebar',
						title: 'Areas',
						docked: 'bottom',
                        ui: 'light',
						items: 
						[
							{
								xtype: 'button',
								align: 'left',
								ui: 'action',
								iconCls: 'add',
								iconMask: true,
								itemId: 'addNewAreaButton'
							}
						]
					},
					{
						html: '<h3>Instructions...</h3>Use the + button to add an Area Description'
					}
				]
			},
			{
				xtype: 'list',
				flex: 2,
				itemId: 'areaListId',
				emptyText: 'No Areas added yet. You should add some...  ;)',
				itemTpl: '{plchldr}',
				onItemDisclosure: true,
				data: 
				[
					{plchldr: 'Area 1'},
					{plchldr: 'Area 2'},
					{plchldr: 'Area 3'},
					{plchldr: 'Area 4'},
					{plchldr: 'Area 5'},
					{plchldr: 'Area 6'},
					{plchldr: 'Area 7'},
					{plchldr: 'Area 8'},
					{plchldr: 'Area 9'},
					{plchldr: 'Area 10'}
				],
			}
		],
		listeners:
		[
			{
				delegate: '#addNewAreaButton',
				event: 'tap',
				fn: 'onAddNewAreaTap'
			},
			{
				delegate: '#areaListId',
				event: 'disclose',
				fn: 'onAreaListDisclose'
			},
			{
				delegate: '#areaListBackButton',
				event: 'tap',
				fn: 'onAreaListBackTap'
			},
			{
				delegate: '#areaListContinueButton',
				event: 'tap',
				fn: 'onAreaListContinueTap'
			}
		]
	},
	onAddNewAreaTap: function()
	{
		console.log('addNewAreaCommand');
		this.fireEvent('addNewAreaCommand', this);
	},
	onAreaListDisclose: function(/*list, record, target, index, evt, options*/)
	{
		console.log('editAreaCommand');
		this.fireEvent('editAreaCommand', this/*, record*/);
	},
	onAreaListBackTap: function()
	{
		console.log('areaListBackCommand');
		this.fireEvent('areaListBackCommand', this);
	},
	onAreaListContinueTap: function()
	{
		console.log('areaListContinueCommand');
		this.fireEvent('areaListContinueCommand', this);
	}
});