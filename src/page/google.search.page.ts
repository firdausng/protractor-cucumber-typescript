import { $, by, element, browser, until } from "protractor";
import { Base } from "./base.page"

export class GoogleSearch extends Base {

    constructor() {
        super();
    }

    data = {
        url: "https://www.google.com",
        pageTitle: "Google"
    }

    async navigate() {
        await this.go(this.data.url);
        return browser.wait(until.titleIs(this.data.pageTitle), 5000)
    }


     queryOnGoogle(text){
        return element(this.chooseSelector(selector["GoogleSearchBox"])).sendKeys(text);
        // return element(this.chooseSelector(selector["GoogleSearchbtn"])).click();
    }

    clickSearch(){
        return element(this.chooseSelector(selector["GoogleSearchbtn"])).click();
    }
}



const selector = {
    "GoogleSearchBox": {
        type: "id",
        value: `lst-ib`
    },
    "GoogleSearchbtn": {
        type: "name",
        value: `btnK`
    },
}