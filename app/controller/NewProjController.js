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
//        var newProject = Ext.create('TaskCodes.store.projectStore');
        var newValues = newProjView.getValues();
        console.log('The new project is', newValues.projectName);
        console.log('The client is', newValues.client);
        console.log('The project numbers is', newValues.projectNumber);
/*      alert('The new project is ' + newValues.projectName);
        alert('The client is ' + newValues.client);
        alert('The project numbers is ' + newValues.projectNumber);
        newProject.set('name', newValues.name);
        newProject.set('client', newValues.client);
        newProject.set('projnumber', newValues.projnumber);
*/		this.activateSetArea();
		
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