import { defineSupportCode } from "cucumber";
import { browser } from "protractor";
import { landingPage,loginPage } from "../page"
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(({ Then, Given, When }) => {
    // const landing: Landing = new Landing();
    // const onePass: OnePass = new OnePass();

    Given("I am on github page", async () => {
        return landingPage.navigate();
    })

    When("I click {stringInDoubleQuotes} button", (button) => {
        return landingPage.clickBtn(button)
    })

    Then("I will arrive at github login page", () => {
        return expect(browser.getTitle()).to.eventually.equal(loginPage.data.pageTitle);
    })
})