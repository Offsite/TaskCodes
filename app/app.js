var setup = function()
{
	Ext.Loader.setConfig({
        enabled: true,
        paths:
        {
			'Ext.ux.touch.grid': './lib/Grid-Component/Ext.ux.touch.grid'
        }
	});
	Ext.application({
		name: 'TaskCodes',
		
		models: ['arealistModel', 'craftslistModel', 'taskcodeModel', 'tasklistModel', 'worktypelistModel', 'projectModel'],
		views: ['newproj', 'setareas', 'workid', 'gentaskcode', 'addarea', 'editarea'],
		stores: ['taskcodeStore','arealistStore','worktypelistStore','craftslistStore','tasklistStore', 'projectStore'],
		controllers: ['NewProjController', 'SetAreasController', 'GenTaskCodeController'],
		launch: function()
		{
			console.log('Application Launch');
			
			
			var newProjView = {xtype: 'newproj'};
			var setAreasView = {xtype: 'setareas'};
			var genTaskCodeView = {xtype: 'gentaskcode'};
            var editAreaView = {xtype: 'editarea'};
            Ext.Viewport.add([newProjView, setAreasView, genTaskCodeView, editAreaView]);
		}
	});
};
setup();