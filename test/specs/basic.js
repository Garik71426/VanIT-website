const assert = require('assert');

describe('VanIt.tech page', () => {
	describe('title', () => {
	    it('should have the right title', () => {
       			 browser.url('https://vanit.tech/');
       		 const title = browser.getTitle();
        		 assert.strictEqual(title,'VanIT');
	    });
   	 });
	describe('logo', () => {
        it('should detect that logo is visible', () => {
            	browser.url('https://vanit.tech/');
        	const logo = $('.logo');
	 	 		browser.pause();
        	const isDisplayedInViewport = logo.isDisplayedInViewport();
		 		assert.strictEqual(isDisplayedInViewport,Boolean('true'));
		});
	});
	describe('Home', () => {
		it('User can appear on the ‘Home’ part of the site', () => {
				browser.url('https://vanit.tech/');
				browser.setWindowSize(1248, 1053);
			const home = $('.jss2').$$('a')[0];
				home.click();
				browser.pause(5000);
			const url = browser.getUrl();
				assert.strictEqual(url,'https://vanit.tech/#home');
		});
	});
	describe('Portfolio', () => {
		it('User can appear on the ‘Portfolio’ part of the site', () => {
				browser.url('https://vanit.tech/');
				browser.setWindowSize(1248, 1053);
			const portfolio = $('.jss2').$$('a')[1];
				portfolio.click();
				browser.pause(5000);
			const url = browser.getUrl();
				assert.strictEqual(url,'https://vanit.tech/#portfolio');
		});
	});
	describe('Services', () => {
		it('User can appear on the ‘Services’ part of the site', () => {
				browser.url('https://vanit.tech/');
				browser.setWindowSize(1248, 1053);
			const services = $('.jss2').$$('a')[2];
				services.click();
				browser.pause(5000);
			const url = browser.getUrl();
				assert.strictEqual(url,'https://vanit.tech/#services');
		});
	});
	describe('Contact us', () => {
		it('User can appear on the ‘Contact us’ part of the site', () => {
				browser.url('https://vanit.tech/');
				browser.setWindowSize(1248, 1053);
			const contactUs = $('.jss2').$$('a')[3];
				contactUs.click();
				browser.pause(5000);
			const url = browser.getUrl();
				assert.strictEqual(url,'https://vanit.tech/#contactUs');
		});
	});
	describe('Our works', () => {
		it('User can appear on the ‘Our works’ part of the site', () => {
				browser.url('https://vanit.tech/');
				browser.setWindowSize(1248, 1053);
			const ourworks = $('.home--button');
				ourworks.click();
				browser.pause(5000);
			const url = browser.getUrl();
				assert.strictEqual(url,'https://vanit.tech/#portfolio');
		});
	});
/*	describe('Follow us with facebook', () => {
		it('User can appear on the ‘Home’ part of the site', () => {
			
		});
	});
	describe('Follow us with Twitter', () => {
		it('User can appear on the ‘Home’ part of the site', () => {

		});
	});
	describe('Our Follow us with GitHub', () => {
		it('User can appear on the ‘Home’ part of the site', () => {

		});
	});
*/
});
