const { I } = inject();

class MobilePage {
  constructor() {
    this.fields = {
      txtWelcome: "//android.widget.TextView[@text='Welcome']",
      txtQRCode: "//android.widget.TextView[@text='Scan QR Code']",
      btnSkip: "//android.widget.TextView[@content-desc='activation.skip']",
      textBoxPass: "//android.widget.EditText[@content-desc='login_password']",
      textBoxSignIn: "//android.widget.TextView[contains(@text,'Sign In')]",
      tabContact: "//android.view.ViewGroup[@content-desc='bottomTab_contact']",
      tabTeam: "//android.widget.TextView[@content-desc='chat.team']",
      textBoxSearch: "//android.widget.EditText[@content-desc='contact_search']",
      txtUser: "//android.widget.TextView[@content-desc='#username']",
      btnChat: "//android.view.ViewGroup[@content-desc='profile_chat']",
      textBoxMsg: "//android.widget.EditText[@content-desc='chatDetail_input']",
      btnSend: "//android.view.ViewGroup[@content-desc='chatDetail_sendMessage']",
      textBoxActivation: "//android.widget.EditText[@content-desc='activation_#index']",
      textBoxOTP: "//android.widget.EditText[@content-desc='otp_#index']",
    }
  }

  async inputQRCode(code) {
    I.seeMobileEle(this.fields.txtWelcome, 20);
    await I.clickOnMobileEle(this.fields.btnSkip, 20);
    I.wait(10);
    I.seeMobileEle(this.fields.txtQRCode, 20);

    console.log("Activation Code: " + code);
    let arrQRCode = code.split('');
    for (let i = 0; i < arrQRCode.length; i++) {
      let sXpath = this.fields.textBoxActivation.replace("#index", i.toString());
      await I.fillMobileField(sXpath, arrQRCode[i]);
    }
  }

  async inputPassAndOTP(pass, otp) {
    console.log("Pass: " + pass);
    console.log("OTP: " + otp);
    await I.fillMobileField(this.fields.textBoxPass, pass);
    await I.clickOnMobileEle(this.fields.textBoxSignIn, 20);
    let arrOTP = otp.split('');
    for (let i = 0; i < arrOTP.length; i++) {
      let sXpath = this.fields.textBoxOTP.replace("#index", i.toString());
      await I.fillMobileField(sXpath, arrOTP[i]);
    }
  }

  async searchUser(user) {
    await I.clickOnMobileEle(this.fields.tabContact, 20);
    await I.clickOnMobileEle(this.fields.tabTeam, 20);
    await I.fillMobileField(this.fields.textBoxSearch, user);
    I.sendDeviceKeyEvent(4);  // KEYCODE_BACK
    await I.clickOnMobileEle(this.fields.txtUser.replace("#username", user), 20);
    await I.clickOnMobileEle(this.fields.txtUser.replace("#username", user), 20);
  }

  async sendMsgToUser(msg) {
    await I.clickOnMobileEle(this.fields.btnChat, 20);
    await I.fillMobileField(this.fields.textBoxMsg, msg);
    await I.clickOnMobileEle(this.fields.btnSend, 20);
    I.wait(5);
  }

}

// For inheritance
module.exports = new MobilePage();
module.exports.MobilePage = MobilePage;
