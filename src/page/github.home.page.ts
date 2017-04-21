import { $, by, element, browser, until } from "protractor";
import { Base } from "./base.page"

export class LandingPage extends Base {

    constructor() {
        super();
    }

    data = {
        url: "https://github.com/",
        pageTitle: "The world's leading software development platform · GitHub"
    }

    async navigate() {
        await this.go(this.data.url);
        return browser.wait(until.titleIs(this.data.pageTitle), 5000)
    }

    clickBtn(text) {
        if(typeof selector[text].value === "function"){
            selector[text].value = selector[text].value(text)
        }
        // return element(by.xpath(`//*[contains(text(),'${text}')]`)).click();
        return element(this.chooseSelector(selector[text])).click();
    }
}



const selector = {
    "Sign in": {
        type: "xpath",
        value: text => `//*[contains(text(),'${text}')]`
    }
}