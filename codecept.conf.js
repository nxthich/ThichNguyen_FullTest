exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://web.qa.leapxpert.app',
      show: true,
      waitForTimeout: 20000,
      windowSize: '1200x900',
    },
    Appium: {
      host: "0.0.0.0",
      path: "/wd/hub",
      port: 4723,
      platform: 'Android',
      desiredCapabilities: {
        appPackage: "com.leapxpert.manager.qa",
        appActivity: "com.leapxpertapp.MainActivity",
        deviceName: "C7",
        platformVersion: "7.0"
      }
    },

    Myweb: {
      require: './helper/myweb_helper.js'
    },
    Mymobile: {
      require: './helper/mymobile_helper.js'
    }
  },
  include: {
    I: './steps_file.js',
    webLoginPage: './page_objects/web_page.js',
    mobilePage: './page_objects/mobile_page.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'FullTest'
}