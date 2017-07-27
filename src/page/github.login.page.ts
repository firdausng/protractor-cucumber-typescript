import { $, by, element, browser, until } from "protractor";
import { Base } from "./base.page"

export class LoginPage extends Base {

    constructor() {
        super();
        
    }

    data = {
        pageTitle: "Sign in to GitHub · GitHub"
    }

}
