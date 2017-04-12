(function () {
	'use strict';

<<<<<<< HEAD
	let assert = require('chai').assert;
	let virtual = require('./virtual');
	let app = virtual.app;

	let Spreadsheet = require('./Spreadsheet');

	describe("Integration Tests", function () {

		describe("Buttons", function () {

			let sheetTitle = 'Test';
			var sheet = Spreadsheet.makeSheet(sheetTitle);
			
			it('persists', function () {
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
=======
	describe("Integration Tests", function () {

		describe("Buttons", function () {
			
			it('can be saved');

			it('can be cleared');
>>>>>>> cbb2848352eb7d0ca13515dec81b1fd49ecd16a9

		});

	});


})();