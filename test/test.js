(function () {
	'use strict';

	let assert = require('chai').assert;
	let app = require('./virtual').app;

	describe("Layer", function () {

		describe("Behaviour", function () {
			
			it('does something', function () {
				app.load;  // app code is available
			});

		});

	});

})();