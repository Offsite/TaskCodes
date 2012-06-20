Ext.define("TaskCodes.store.projectStore", {
    extend: "Ext.data.Store",
    config:
    {
		model: 'TaskCodes.model.projectModel',
        data:
        [
            {
                name: "Test 1", client: "test 1 client", projnumber: "abc012-001"
            }
        ],
		autoLoad: true,
		autoSync: true
    }
});