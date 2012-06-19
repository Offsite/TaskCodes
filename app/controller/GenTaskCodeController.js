Ext.define("TaskCodes.controller.GenTaskCodeController", {
	extend: "Ext.app.Controller",
	config:
	{
		refs: 
		{
			setAreaView: 'setareas',
			genTaskCodeView: 'gentaskcode',
            addTaskCodeView: 'addtaskcode'
		},
		control:
		{
			genTaskCodeView:
			{
				gentaskcodeBackCommand: 'onGenTaskCodeBackCommand',
				gentaskcodeSaveCommand: 'onGenTaskCodeSaveCommand',
				gentaskcodeAddCommand: 'onGenTaskCodeAddCommand'
			},
            addTaskCodeView:
            {
                addTaskCodeDoneCommand: 'onAddTaskCodeDoneCommand',
                addTaskCodeCommand: 'onAddTaskCodeCommand',
                addTaskCodeDeleteCodeCommand: 'onAddTaskCodeDeleteCodeCommand'
            }
		}
	},
	activateSetArea: function()
	{
		var setAreaView = this.getSetAreaView();
		Ext.Viewport.animateActiveItem(setAreaView, {type: 'slide', direction: 'right'});
	},
    activateAddTaskCode: function()
	{
        var addTaskCodeView = this.getAddTaskCodeView();
    	Ext.Viewport.animateActiveItem(addTaskCodeView, {type: 'slide', direction: 'left'});
	},
    onAddTaskCodeDeleteCodeCommand: function()
    {
        console.log('onAddTaskCodeDeleteCodeCommand');
    },
    onAddTaskCodeDoneCommand: function()
    {
        console.log('onAddTaskCodeDoneCommand');
        var genTaskCodeView = this.getGenTaskCodeView();
    	Ext.Viewport.animateActiveItem(genTaskCodeView, {type: 'slide', direction: 'right'});
    },
    onAddTaskCodeCommand: function()
    {
        console.log('onAddTaskCodeCommand');
        var addTaskCodeView = Ext.getCmp('addTaskCodeForm');
        var newValues = addTaskCodeView.getValues();
        console.log(newValues.addTaskArea + ' ' + newValues.addTaskType + ' ' + newValues.addTaskCraft + ' ' + newValues.addtask + ' ' + newValues.addsubtask);
        Ext.Msg.alert('Values', 'Area: ' + newValues.addTaskArea + '<br />Work Type: ' + newValues.addTaskType + '<br />Craft: ' + newValues.addTaskCraft + '<br />Task: ' + newValues.addtask + '<br />Subtask: ' + newValues.addsubtask, Ext.emptyFn);
        addTaskCodeView.setValues({addsubtask: ''});
    },
	onGenTaskCodeBackCommand: function()
	{
		console.log('onGenTaskCodeBackCommand');
		this.activateSetArea();	
	},
	onGenTaskCodeSaveCommand: function()
	{
		console.log('onGenTaskCodeSaveCommand');
	},
	onGenTaskCodeAddCommand: function()
	{
		console.log('onGenTaskCodeAddCommand');
        this.activateAddTaskCode();
	},
	launch: function()
	{
		this.callParent(arguments);
		console.log('launch');
	},
	init: function()
	{
		this.callParent(arguments);
		console.log('initialize GenTaskCodeController');
	},
});