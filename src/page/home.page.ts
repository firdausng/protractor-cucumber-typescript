import { $, by, element, browser } from "protractor";
import { Base } from "./base.page"

export class Home extends Base {

    githubPageTitle: string = "GitHub - angular/protractor: E2E test framework for Angular apps";
    githubBtn: string = "View on GitHub"

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