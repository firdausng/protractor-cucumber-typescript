import { defineSupportCode } from "cucumber";
import { Home } from "../page/home.page";
import {browser} from "protractor";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(({ Then, Given, When }) => {
    const home: Home = new Home();

    // Given("I am on protractor page", ()=>{
    //     return browser.get("http://www.protractortest.org/#/")
    // })

    // When("I click {stringInDoubleQuotes} button", (button)=>{
    //     return home.clickAction(button)
    //     // return browser.get("https://github.com/angular/protractor")
    // })

    // Then("I will arrive at {stringInDoubleQuotes} page", (title) => {
    //     return expect(browser.getTitle()).to.eventually.equal(home.githubPageTitle);
    // })
})