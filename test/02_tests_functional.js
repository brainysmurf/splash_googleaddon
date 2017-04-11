(function () {
	'use strict';

	let assert = require('chai').assert;
	let app = require('./virtual').app;
	let Browser = require('zombie');

	var webdriver = require('selenium-webdriver'),
	    By = webdriver.By;

	var server = require('./server.js');
	server.create();

	describe('User loads main page', function () {

		before(function (done) {
			this.driver = new webdriver.Builder()
				.forBrowser('chrome')
				.build();
			this.driver.get('localhost:8888/Main');
			done();
		});

		describe('submits new button', function () {

			var sheet = null;

			it("should save to spreadsheet", function () {
				let buttonTitle = 'Title',
					buttonLink = 'Link';
				this.driver.findElement(By.name('buttonName')).sendKeys(buttonTitle);
				this.driver.findElement(By.name('buttonLink')).sendKeys(buttonLink);
				this.driver.findElement(By.name('submitButton')).click();

				var buttons = app.getButtons(sheet);
				assert.deepEqual(buttons, [
					[buttonTitle, buttonLink]
				]);
			});

		});

		after(function () {
			this.driver.quit();
		});

	});

})();