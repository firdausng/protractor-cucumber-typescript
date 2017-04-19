const Cucumber = require('cucumber');
import { defineSupportCode } from "cucumber";
import { browser } from "protractor";
import { config } from "./cucumber.conf";
import * as fs from 'fs';
import { mkdirp } from 'mkdirp';
import * as reporter from 'cucumber-html-reporter';

defineSupportCode(({ setDefaultTimeout, registerHandler, After, registerListener }) => {
    //set timeout to 1 minutes
    setDefaultTimeout(60 * 1000);
    let jsonReports = process.cwd() + "/reports/json";
    let htmlReports = process.cwd() + "/reports/html";
    let targetJson = jsonReports + "/cucumber_report.json";

    // set the browser to go to baseURL for every before function
    registerHandler("BeforeFeature", (event, callback) => {
        browser.get(config.baseUrl);
        setTimeout(callback, 5000);
    });

    After(function (scenario) {
        let self = this
        console.log("The result are: " + scenario.status);
        if (scenario.status === "failed") {
            return browser.takeScreenshot().then((screenShot) => {
                self.attach(screenShot, 'image/png'); // screenShot is a base-64 encoded PNG
            });
        }
    })

    let reportOptCucumber = {
        theme: "bootstrap",
        jsonFile: targetJson,
        output: htmlReports + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true
    };

    let logFn = string => {
        if (!fs.existsSync(jsonReports)) {
            mkdirp.sync(jsonReports);
        }
        try {
            fs.writeFileSync(targetJson, string);
            reporter.generate(reportOptCucumber);
        } catch (err) {
            if (err) {
                console.log(`Failed to save cucumber test results to json file. 
                             Failed to create html report.
                             `);
                console.log(err);
            }
        }
    };
    let jsonformatter = new Cucumber.JsonFormatter({
        log: logFn
    });
    registerListener(jsonformatter);
})