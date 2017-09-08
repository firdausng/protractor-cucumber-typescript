import { browser, Config } from 'protractor';

export let config: Config = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    baseUrl: 'http://www.google.com',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',    // to use cucumber
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../features/*.feature'
    ],

    onPrepare: () => {

        browser.ignoreSynchronization = true;   //  to work with non angular app
        browser.manage().window().maximize();   // max window

    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../src/stepdefinitions/*.ts', '../src/support.ts'],
<<<<<<< HEAD
        tags: '@GithubScenario'
=======
        tags: '@GithubScenario or @GoogleScenario'
        // tags: '@HoneycombScenario or @CucumberScenario or @ProtractorScenario'
>>>>>>> d5a790e8290fa12bf790503c164ad6a88f0a0f4d
    }
};