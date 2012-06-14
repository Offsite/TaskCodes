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
        var newValues = newProjView.getValues();
        console.log('The new project is', newValues.projectName);
        console.log('The client is', newValues.client);
        console.log('The project numbers is', newValues.projectNumber);
        
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