Ext.define('TaskCodes.model.projectModel', {
	extend: 'Ext.data.Model',
	
	config: 
	{
        idProperty: 'projnumber',
		fields: 
		[
			{name: 'name', type: 'string'},
			{name: 'client', type: 'string'},
			{name: 'projnumber', type: 'string'}
		],
		proxy:
		{
			type: 'ajax',
			url: 'app/data/project.json'
		}
	}
});