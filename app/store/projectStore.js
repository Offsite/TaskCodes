Ext.define("TaskCodes.store.projectStore", {
    extend: "Ext.data.Store",
    config:
    {
		model: 'TaskCodes.model.projectModel',
		storeId: 'projectStore',
		autoLoad: true,
		autoSync: true
    }
});