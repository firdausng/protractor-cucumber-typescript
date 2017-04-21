import { $, by, element, browser } from "protractor";


export class Base {


    constructor() {

    }

    go(url){
        return browser.get(url);
    }

    chooseSelector(obj){
        switch (obj.type) {
            case "xpath":
                return by.xpath(obj.value);
            case "className":
                return by.className(obj.value);
            case "id":
                return by.id(obj.value);
            case "js":
                return by.js(obj.value);
            case "linkText":
                return by.className(obj.value);
            case "name":
                return by.name(obj.value);
            case "partialLinkText":
                return by.partialLinkText(obj.value);
            case "className":
                return by.className(obj.value);
            
            default:
                break;
        }
    }

}