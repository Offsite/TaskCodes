Ext.define("TaskCodes.controller.NewProjController", {
	extend: "Ext.app.Controller",
	config: 
	{
		refs: 
		{
			newProjView: "newproj",
            newProjData: '#projData',
			setAreaView: 'setareas'
            
		},
		control:
		{
			newProjView:
			{
				cancelProjCommand: 'onCancelProjCommand',
				startNewProjCommand: 'onStartNewProjCommand'
			}
		}
	},
	activateSetArea: function()
	{
		var setAreaView = this.getSetAreaView();
		Ext.Viewport.animateActiveItem(setAreaView, {type: 'slide', direction: 'left'});
	},
	onStartNewProjCommand: function()
	{
		console.log('onStartNewProjCommand');
        var newProjView = this.getNewProjView();
        var currentProject = newProjView.getRecord();
        var newValues = newProjView.getValues();
        console.log('The new project is', newValues.projectName);
        console.log('The client is', newValues.client);
        console.log('The project number is', newValues.projectNumber);
        Ext.Msg.alert('New Project', 'The new project is: ' + newValues.projectName + '<br />The client is: ' + newValues.client + '<br />The project number is: ' + newValues.projectNumber, Ext.emptyFn);
        
    //    currentProject.set("projectName", newValues.projectName);
    //    currentProject.set("client", newValues.client);
    //    currentProject.set("projectNumber", newValues.projectNumber);
        
        var newproject = Ext.getStore('projectstore');
    //    newproject.add(currentProject);
        newproject.sync();
        
		this.activateSetArea();
	},
	launch: function()
	{
		this.callParent(arguments);
		console.log('launch');
	},
	init: function()
	{
		this.callParent(arguments);
		console.log('initialize NewProjController');
	}
});