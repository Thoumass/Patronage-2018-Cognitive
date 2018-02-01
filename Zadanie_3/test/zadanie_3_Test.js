describe('hello', function() {
	it('the number is', function() {
		console.log(getResponse);
		expect(getResponse()).not.toEqual('1 is the number of moons orbiting Earth.');
	})
});

