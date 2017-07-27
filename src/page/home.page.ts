import { $, by, element, browser, until } from "protractor";
import { Base } from "./base.page"

export class Home extends Base {

    githubPageTitle: string = "GitHub - angular/protractor: E2E test framework for Angular apps";
    githubBtn: string = "View on GitHub"

    constructor() {
        super();
    }

    data = {
        url: "http://www.protractortest.org",
        pageTitle: "Protractor - end-to-end testing for AngularJSb"
    }

    async navigate() {
        await this.go(this.data.url);
        return browser.wait(until.titleIs(this.data.pageTitle), 5000)
    }

    async clickAction(action) {
        let result;
        if (action === "View on GitHub") {
            result = await element(by.css(".github-button")).isPresent();
            if (result) {
                return element(by.css(".github-button")).click()
            } else {
                browser.wait(function () {
                    return browser.isElementPresent(element(by.css(".github-button")));
                }, 50000);
            }
            return element(by.css(".github-button")).click()
        }
    }
}