const Helper = require('@codeceptjs/helper');

class Mymobile extends Helper {

  seeMobileEle(sLocator, timeout) {
    this.helpers['Appium'].seeElement(sLocator, timeout);
  }
  async clickOnMobileEle(sLocator, timeout) {
    await this.helpers['Appium'].waitForVisible(sLocator, timeout);
    await this.helpers['Appium'].click(sLocator);
  }
  async fillMobileField(sLocator, text) {
    await this.helpers['Appium'].fillField(sLocator, text);
  }
}

module.exports = Mymobile;
