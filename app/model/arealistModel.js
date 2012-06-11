Ext.define('TaskCodes.model.arealistModel', {
	extend: 'Ext.data.Model',
	alias: 'widget.arealistModel',
	
	config: 
	{
		fields: 
		[
			{name: 'code', type: 'int'},
			{name: 'description', type: 'string'},
		],
		validations: 
		[
			{type: 'length', field: 'code', min: 2, max: 2},
		],
		proxy:
		{
			type: 'ajax',
			url: 'app/data/arealist.json'
		}
	}
});