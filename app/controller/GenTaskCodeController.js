Ext.define("TaskCodes.controller.GenTaskCodeController", {
	extend: "Ext.app.Controller",
	config: 
	{
		refs: 
		{
			setAreaView: 'setareas',
			genTaskCodeView: 'gentaskcode'
		},
		control:
		{
			genTaskCodeView:
			{
				gentaskcodeBackCommand: 'onGenTaskCodeBackCommand',
				gentaskcodeSaveCommand: 'onGenTaskCodeSaveCommand',
				gentaskcodeAddCommand: 'onGenTaskCodeAddCommand'
			}
		}
	},
	activateSetArea: function()
	{
		var setAreaView = this.getSetAreaView();
		Ext.Viewport.animateActiveItem(setAreaView, {type: 'slide', direction: 'right'});
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