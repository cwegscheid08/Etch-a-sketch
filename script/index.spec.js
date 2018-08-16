const createDivs = require('./index.js');

describe('createDivs', function () {
	if('makes two div rows', function() {
		expect(createDivs()).toEqual('');
	});
});