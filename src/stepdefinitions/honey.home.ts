import { defineSupportCode } from "cucumber";
import { Landing } from "../page/honey.home.page";
import { OnePass } from "../page/onepass.login.page";
import {browser} from "protractor";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(({ Then, Given, When }) => {
    const landing: Landing = new Landing();
    const onePass: OnePass = new OnePass();

    Given("I am on honeycomb page", async ()=>{
        return landing.navigate();
    })

    When("I click {stringInDoubleQuotes} button", (button)=>{
        return landing.clickBtn(button)
    })

    Then("I will arrive at {stringInDoubleQuotes} page", (title) => {
        return expect(browser.getTitle()).to.eventually.equal(onePass.data.pageTitle);
    })
})