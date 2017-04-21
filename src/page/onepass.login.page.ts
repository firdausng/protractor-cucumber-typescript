import { $, by, element, browser, until } from "protractor";
import { Base } from "./base.page"

export class OnePass extends Base {

    constructor() {
        super();
    }

    data = {
        pageTitle: "OnePass Login"
    }

}
