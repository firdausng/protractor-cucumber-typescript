import { $, by, element, browser } from "protractor";
import { ISelector, ISelectorString } from "../model/ui.model";


export class Base {

    static go(url) {
        return browser.get(url);
    }

    static getSelectorValue(text, selector: ISelector): ISelectorString {
        let tempSelector = selector;
        if (typeof selector.value === "function") {
            tempSelector.value = selector.value(text)
            return <ISelectorString>tempSelector;
        } else {
            return <ISelectorString>tempSelector;
        }
    }

    static chooseSelector(text: string, selectors:ISelector) {
        let selector: ISelectorString = this.getSelectorValue(text, selectors)
        switch (selector.type) {
            case "xpath":
                return by.xpath(selector.value);
            case "className":
                return by.className(selector.value);
            case "id":
                return by.id(selector.value);
            case "js":
                return by.js(selector.value);
            case "linkText":
                return by.linkText(selector.value);
            case "name":
                return by.name(selector.value);
            case "partialLinkText":
                return by.partialLinkText(selector.value);
            case "className":
                return by.className(selector.value);
            case "css":
            by
                return by.css(selector.value);
            default:
                break;
        }
    }

}