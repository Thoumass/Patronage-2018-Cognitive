var hello = require(['./../zadanie_3.js']);

describe('hello', function() {
	it('gets hello', function() {
		expect(hello()).toBe('hello');
	})
})