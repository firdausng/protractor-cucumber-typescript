import { defineSupportCode } from "cucumber";
import { browser } from "protractor";
import { googleSearch } from "../page"
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(({ Then, Given, When }) => {
    // const landing: Landing = new Landing();
    // const onePass: OnePass = new OnePass();

    Given("I am on google page", async () => {
        return googleSearch.navigate();
    })

    When("I click search textbox and search for {stringInDoubleQuotes}", async (text) => {
        await googleSearch.queryOnGoogle(text)
        return googleSearch.clickSearch();
    })

    // Then("I search for {stringInDoubleQuotes}", () => {
    //     // return expect(browser.getTitle()).to.eventually.equal(loginPage.data.pageTitle);
    // })

})