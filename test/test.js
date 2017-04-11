(function () {
	'use strict';

	let assert = require('chai').assert;
	let app = require('./virtual').app;

	describe("Persistence", function () {

		describe("Buttons", function () {

			var sheet = null;
			
			it('saves', function () {
				let buttonTitle = 'Title',
					buttonLink = 'Link';
				app.saveButton(sheet, buttonTitle, buttonLink);
				var buttons = app.getButtons(sheet);
				assert.deepEqual(buttons, [
					[buttonTitle, buttonLink]
				]);
			});

			it('clears', function () {
				app.clearButtons(sheet);
				var buttons = app.getButtons(sheet);
				assert.deepEqual(buttons, []);
			});

		});

	});

})();