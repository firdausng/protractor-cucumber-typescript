import { $, by, element, browser } from "protractor";


export class Base {


    constructor() {

    }

    // clickByText(text){
    //     return element(by.xpath(`//*[contains(text(),'${text}')]`)).click();
    // }

    go(url){
        return browser.get(url);
    }

}