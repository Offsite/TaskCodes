Ext.define('TaskCodes.model.projectModel', {
	extend: 'Ext.data.Model',
	
	config: 
	{
        identifier: 'uuid',
		fields: 
		[
			{name: 'name', type: 'string'},
			{name: 'client', type: 'string'},
			{name: 'projnumber', type: 'string'}
		]
	}
});