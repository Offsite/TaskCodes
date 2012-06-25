Ext.define("TaskCodes.store.projectStore", {
    extend: "Ext.data.Store",
    config:
    {
        storeId: 'projectstore',
		model: 'TaskCodes.model.projectModel'
    }
});