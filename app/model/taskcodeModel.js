Ext.define('TaskCodes.model.taskcodeModel', {
	extend: 'Ext.data.Model',
	
	config: 
	{
		fields: 
		[
			{name: 'area', type: 'int'},
			{name: 'workType', type: 'int'},
			{name: 'craft', type: 'int'},
			{name: 'task', type: 'int'},
			{name: 'subTask', type: 'int'},
		],
		validations: 
		[
			{type: 'length', field: 'area', min: 2, max: 2},
			{type: 'length', field: 'workType', min: 2, max: 2},
			{type: 'length', field: 'craft', min: 2, max: 2},
			{type: 'length', field: 'task', min:3, max: 3},
			{type: 'length', field: 'subTask', min: 1, max: 1},
			{type: 'exclusion', field: 'area', list: ['00', '01', '02', '03', '04', '06', '07', '08', '09']}
		],
		proxy:
		{
			type: 'ajax',
			url: 'app/data/taskcodes.json'
		}
	}
});