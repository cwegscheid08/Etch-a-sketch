const hellowWorld = require('./index.js');

describe('Hello World', function () {
	if('says hellow world', function() {
		expect(helloWorld()).toEqual('Hellow, World!');
	});
});