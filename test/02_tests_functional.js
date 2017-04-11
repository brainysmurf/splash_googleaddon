(function () {
	'use strict';

	let assert = require('chai').assert;
	let app = require('./virtual').app;
	let Browser = require('zombie');

	let Spreadsheet = require('./Spreadsheet');

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

		describe('fills out new button form', function () {

			var sheet = Spreadsheet.makeSheet('Title');

			it("clicks submit, should call saveButton to persist", function () {
				let buttonTitle = 'Title',
					buttonLink = 'Link';
				this.driver.findElement(By.id('buttonName')).sendKeys('Title');
				this.driver.findElement(By.id('buttonLink')).sendKeys('Link');
				this.driver.findElement(By.id('submitButton')).click();

				var value = this.driver.findElement(By.id('result')).getText().then(function (text) {
					assert.equal(value, 'Title/Link');
				});		

			});

			it("hits return, should call saveButton to persist");

		});

		after(function () {
			this.driver.quit();
		});

	});

})();