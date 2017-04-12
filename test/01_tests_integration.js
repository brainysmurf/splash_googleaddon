(function () {
	'use strict';

	let assert = require('chai').assert;
	let virtual = require('./virtual');
	let app = virtual.app;

	let Spreadsheet = require('./Spreadsheet');

	describe("Integration Tests", function () {

		describe("Buttons", function () {

			let sheetTitle = 'Test';
			
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

			it('persists to sheet by name', function () {
				let buttonTitle = 'Title',
					buttonLink = 'Link';
				app.saveButton(sheetTitle, buttonTitle, buttonLink);
				var buttons = app.getButtons(sheetTitle);
				assert.deepEqual(buttons, [
					[buttonTitle, buttonLink]
				]);
			});

		});
	});

})();