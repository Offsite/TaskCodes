Ext.define("TaskCodes.controller.SetAreasController", {
	extend: "Ext.app.Controller",
	config: 
	{
		refs: 
		{
			setAreaView: 'setareas',
            editAreaView: 'editarea',
			newProjView: 'newproj',
			genTaskCodeView: 'gentaskcode',
			addAreaView: 'addarea'
		},
		control:
		{
			setAreaView:
			{
				areaListBackCommand: 'onAreaListBackCommand',
				areaListContinueCommand: 'onAreaListContinueCommand',
				addNewAreaCommand: 'onAddNewAreaCommand',
                editAreaCommand: 'onEditAreaCommand'
			},
			addAreaView:
			{
				addAreaDoneCommand: 'onAddAreaDoneCommand',
                addAreaCancelCommand: 'onAddAreaCancelCommand'
			},
            editAreaView:
            {
                editAreaSaveCommand: 'onEditAreaSaveCommand',
                editAreaCancelCommand: 'onEditAreaCancelCommand'
            }
		}
	},
	activateNewProjView: function()
	{
		var newProjView = this.getNewProjView();
		Ext.Viewport.animateActiveItem(newProjView, {type: 'slide', direction: 'right'});
	},
    activateSetAreaView: function()
	{
		var setAreaView = this.getSetAreaView();
		Ext.Viewport.animateActiveItem(setAreaView, {type: 'slide', direction: 'right'});
	},
	activateGenTaskCodeView: function()
	{
		var genTaskCodeView = this.getGenTaskCodeView();
		Ext.Viewport.animateActiveItem(genTaskCodeView, {type: 'slide', direction: 'left'});
	},
    activateEditAreaView: function () 
    {
    	var editAreaView = this.getEditAreaView();
		Ext.Viewport.animateActiveItem(editAreaView, {type: 'slide', direction: 'left'});
    },
    onEditAreaCommand: function()
    {
        console.log('onEditAreaCommand');
        this.activateEditAreaView();
    },
    onEditAreaSaveCommand: function()
	{
		console.log('onEditAreaSaveCommand');
        this.activateSetAreaView();
	},
	onEditAreaCancelCommand: function()
	{
		console.log('onEditAreaCancelCommand');
        this.activateSetAreaView();
	},
	onAreaListBackCommand: function()
	{
		console.log('onAreaListBackCommand');
		this.activateNewProjView();	
	},
	onAreaListContinueCommand: function()
	{
		console.log('onAreaListContinueCommand');
		this.activateGenTaskCodeView();	
	},
	onAddNewAreaCommand: function()
	{
		console.log('onAddNewAreaCommand');
		this.addAreaView = Ext.Viewport.add({xtype: 'addarea'});
		this.addAreaView.show();
	},
	onAddAreaDoneCommand: function()
	{
		console.log('onAddAreaDoneCommand');
		this.addAreaView.hide();
	},
    onAddAreaCancelCommand: function()
    {
        console.log('onAddAreaCancelCommand');
        this.addAreaView.hide();
    },
	launch: function()
	{
		this.callParent(arguments);
		console.log('launch');
	},
	init: function()
	{
		this.callParent(arguments);
		console.log('initialize SetAreasController');
	},
});