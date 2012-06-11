Ext.define("TaskCodes.controller.SetAreasController", {
	extend: "Ext.app.Controller",
	config: 
	{
		refs: 
		{
			setAreaView: 'setareas',
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
				addNewAreaCommand: 'onAddNewAreaCommand'
			},
			addAreaView:
			{
				addAreaDoneCommand: 'onAddAreaDoneCommand'
			}
		}
	},
	activateNewProjView: function()
	{
		var newProjView = this.getNewProjView();
		Ext.Viewport.animateActiveItem(newProjView, {type: 'slide', direction: 'right'});
	},
	activateGenTaskCodeView: function()
	{
		var genTaskCodeView = this.getGenTaskCodeView();
		Ext.Viewport.animateActiveItem(genTaskCodeView, {type: 'slide', direction: 'left'});
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