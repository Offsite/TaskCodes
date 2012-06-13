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
        var newProjView = this.getNewProjView;
    //    var newProjData = this.getNewProjData;
       // var newProject = Ext.create('TaskCodes.store.projectStore');
    //    var test = newProjData.getRecord();
    //    var newValues = newProjData.getValues();
      //  alert(newValues.name);
        //newProject.set('name', newValues.name);
        //newProject.set('client', newValues.client);
        //newProject.set('projnumber', newValues.projnumber);
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