import { $, by, element, browser, until } from "protractor";
import { Base } from "./base.page"
import { IGroupSelector } from "../model/ui.model";

export class LandingPage extends Base {

    static data = {
        url: "https://github.com/",
        pageTitle: "The world's leading software development platform · GitHub"
    }

    static async navigate() {
        await this.go(this.data.url);
        return browser.wait(until.titleIs(this.data.pageTitle), 5000)
    }

    static clickBtn(text: string) {
        console.log("haha" + JSON.stringify(selector[text]))
        return element(this.chooseSelector(text, selector[text])).click();
    }
}



const selector: IGroupSelector = {
    "Sign in": {
        type: "xpath",
        value: text => `//*[contains(text(),'${text}')]`
    },
    "Sign Out": {
        type: "xpath",
        value: `//*[contains(text(),'logout')]`
    }
}