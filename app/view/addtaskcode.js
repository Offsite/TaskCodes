Ext.define('TaskCodes.view.addtaskcode', {
    extend: 'Ext.Container',
    alias: 'widget.addtaskcode',
    config: 
    {
        layout: 'hbox',
        items:
        [
            {
                xtype: 'panel',
                layout: 'fit',
                flex: 2,
                items:
                [
                    {
                        xtype: 'titlebar',
                        title: 'New Task Code',
                        docked: 'top',
                        ui: 'dark',
                        items:
                        [
                            {
                                xtype: 'button',
                                itemId: 'addtaskcodeDoneButton',
                                text: 'Done',
                                align: 'left',
                                ui: 'confirm'
                            }
                        ]
                    },
                    {
                        xtype: 'formpanel',
                        id: 'addTaskCodeForm',
                        items: 
                        [
                            {
                                xtype: 'fieldset',
                                title: 'Pick Primary Catagories',
                                instructions: 'Set the Area, Work Type, and Craft.',
                                items: 
                                [
                                    {
                                        xtype: 'selectfield',
                                        name: 'addTaskArea',
                                        label: 'Area',
                                        options: 
                                        [
                                            {text: 'Pipe Spool',  value: '10'},
                                            {text: 'Structure', value: '20'},
                                            {text: 'Subcontractor Work',  value: '30'}
                                        ]
                                    },
                                    {
                                        xtype: 'selectfield',
                                        name: 'addTaskType',
                                        label: 'Type',
                                        options: 
                                        [
                                            {text: 'Piping',  value: '24'},
                                            {text: 'Vessels and Mech Equip', value: '23'},
                                            {text: 'Instrumentation',  value: '26'}
                                        ]
                                    },
                                    {
                                        xtype: 'selectfield',
                                        name: 'addTaskCraft',
                                        label: 'Craft',
                                        options: 
                                        [
                                            {text: 'Boiler Maker',  value: '05'},
                                            {text: 'Pipe Fitter', value: '55'},
                                            {text: 'Iron Worker',  value: '25'}
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'Add Tasks',
                                instructions: 'Add tasks and sub-tasks under that catagories set above.',
                                items: 
                                [
                                    {
                                        xtype: 'textfield',
                                        name: 'addtask',
                                        placeHolder: 'Ex. Carry Large Stick',
                                        label: 'Task'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'addsubtask',
                                        placeHolder: '(optional)',
                                        label: 'Subtask'
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                pack: 'center',
                                items:
                                [
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        itemId: 'addtaskcodeAddTaskCodeButton',
                                        text: 'Add Task'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'fit',
                flex: 1,
                items: 
                [
                    {
                        xtype: 'titlebar',
                        title: 'Codes',
                        docked: 'top',
                        ui: 'light',
                        items: 
                        [
                            {
                                xtype: 'button',
                                align: 'right',
                                iconCls: 'trash',
                                iconMask: true,
                                ui: 'decline',
                                itemId: 'addtaskcodeDeleteCodeButton'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        emptyText: 'Just Filling the Space',
                        itemTpl: '{plchldr}',
                        data: 
                        [
                            {plchldr: '00-00-00-000'},
                            {plchldr: '00-00-00-001'},
                            {plchldr: '00-00-00-011'},
                            {plchldr: '00-00-00-111'},
                            {plchldr: '00-00-01-111'},
                            {plchldr: '00-00-11-111'},
                            {plchldr: '00-01-11-111'},
                            {plchldr: '00-11-11-111'},
                            {plchldr: '01-11-11-111'},
                            {plchldr: '11-11-11-111'}
                        ]
                    }
                ]    
            }
        ],
        listeners: 
		[
            {
                delegate: '#addtaskcodeDeleteCodeButton',
                event: 'tap',
                fn: 'onAddTaskCodeDeleteCodeButton'
            },
			{
				delegate: '#addtaskcodeDoneButton',
				event: 'tap',
				fn: 'onAddTaskCodeDoneButtonTap'
			},
            {
                delegate: '#addtaskcodeAddTaskCodeButton',
                event: 'tap',
                fn: 'onAddTaskCodeButtonTap'
            }
		]
    },
    onAddTaskCodeDeleteCodeButton: function()
    {
        console.log('addTaskCodeDeleteCodeCommand');
        this.fireEvent('addTaskCodeDeleteCodeCommand');
    },
    onAddTaskCodeDoneButtonTap: function()
    {
        console.log('addTaskCodeDoneCommand');
        this.fireEvent('addTaskCodeDoneCommand', this);
    },
    onAddTaskCodeButtonTap: function()
    {
        console.log('addTaskCodeCommand');
        this.fireEvent('addTaskCodeCommand', this);
    }
});