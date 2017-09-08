import { defineSupportCode } from "cucumber";
import { browser } from "protractor";
import { LandingPage, LoginPage } from "../page"
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(({ Then, Given, When }) => {

    Given("I am on github page", async () => {
        return LandingPage.navigate();
    })

    When("I click {stringInDoubleQuotes} button", (button: string) => {
        return LandingPage.clickBtn(button)
    })

    Then("I will arrive at github login page", () => {
        return expect(browser.getTitle()).to.eventually.equal(LoginPage.data.pageTitle);
    })
})