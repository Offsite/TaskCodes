Ext.define('TaskCodes.view.newproj', {
	extend: 'Ext.Panel',
	alias: 'widget.newproj',
	config: 
	{
		items:
		[		
			{
        		xtype: 'toolbar',
        		docked: 'bottom',
        		items: 
        		[
       /* 			{
        				xtype: 'button',
        				text: 'Cancel',
        				ui: 'decline',
        				iconCls: 'trash',
						iconMask: true,
						itemId: 'cancelProjButton'
        			},*/
        			{
        				xtype: 'spacer'
        			},
        			{
        				xtype: 'button',
        				text: 'Start',
        				ui: 'confirm',
        				iconCls: 'action',
        				iconMask: true,
        				itemId: 'startProjButton'
        			}
        		]
        	},
        	{
        		xtype: 'titlebar',
        		docked: 'top',
        		title: '..::Task Codes::..'
        	},

			{
				xtype: 'fieldset',
		        title: 'Some Initial Information',
		        instructions: 'Tell me a bit about your new project',
		        items: 
		        [
		        	{
		        		xtype: 'textfield',
		        		name: 'projectName',
		        		label: 'Project Name:'
		        	},
		        	{
		        		xtype: 'textfield',
		        		name: 'client',
		        		label: 'Client:'
		       	 	},
		        	{
		        		xtype: 'textfield',
		        		name: 'projectNumber',
		        		label: 'Project Number:'
		        	}
		        ]
			}
		],
		listeners: 
		[
			{
				delegate: '#startProjButton',
				event: 'tap',
				fn: 'onStartProjButton'
			}
		]
	},
	onStartProjButton: function()
	{
		console.log('startNewProjCommand');
		this.fireEvent('startNewProjCommand', this);
	}
});