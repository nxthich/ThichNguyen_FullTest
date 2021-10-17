const Helper = require('@codeceptjs/helper');

class Myweb extends Helper {

  clickWebEle(sLocator) {
    this.helpers['Puppeteer'].click(sLocator);
  }

  async getTextWebEle(sLocator) {
    const sText = await this.helpers['Puppeteer'].grabTextFrom(sLocator);
    return sText;
  }

}

module.exports = Myweb;
