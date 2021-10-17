const { I } = inject();

class WebLoginPage {
  constructor() {
    this.fields = {
      textBoxCompany: "//input[@type='text']",
      btnNext: "//span[contains(text(),'Next')]",
      textBoxUser: "//input[@data-testid='usernameLogin']",
      textBoxPass: "//input[@data-testid='passwordLogin']",
      btnLogin: "//span[contains(@class,'Login_button')]",
      textBoxOTP: "//div[contains(@class,'OTPInput_input')][1]",
      btnProfile: "//a[contains(@class,'ProfileButton_avatar')]",
      btnDevice: "//div[contains(@class,'Account_button') and contains(text(), 'Device')]",
      btnLinkDevice: "//button[contains(@class,'DeviceTab_link') and contains(text(), 'Link Device')]",
      txtActivationCode: "//div[contains(text(), 'Activation code:')]/../div/./div",
      closeIcon: "//*[contains(@id, 'ic-close')]",
      logoutLink:"//div[contains(@class,'Account_button') and text()='Logout']",
      btnLogout:"//button[contains(@class,'Button_button') and text()='Log Out']",
    }
  }

  login(company, user, pass, otp) {
    I.amOnPage('/login');
    I.see('Login');
    I.fillField(this.fields.textBoxCompany, company);
    I.clickWebEle(this.fields.btnNext);
    I.see('Please input the information');

    I.fillField(this.fields.textBoxUser, user);
    I.fillField(this.fields.textBoxPass, pass);
    I.clickWebEle(this.fields.btnLogin);
    I.see('Security Code');

    I.fillField(this.fields.textBoxOTP, otp);
    I.waitForText("Chats", 20);
  }

  async getQRCode() {
    I.clickWebEle(this.fields.btnProfile);
    I.click(this.fields.btnDevice);
    I.click(this.fields.btnLinkDevice);
    I.waitForText("Activation code:", 20);
    let sActivationCode = await I.getTextWebEle(this.fields.txtActivationCode);
    I.click(this.fields.closeIcon);
    I.click(this.fields.logoutLink);
    I.click(this.fields.btnLogout);
    return sActivationCode;
  }

}

// For inheritance
module.exports = new WebLoginPage();
module.exports.WebLoginPage = WebLoginPage;
