Feature('Login');

Scenario('Test2', async ({ I }) => {
    
    I.amOnPage('/login');
    I.wait(1);
    I.see('Login');
    I.fillField("//input[@type='text']", "auto_testing");
    I.click("//span[contains(text(),'Next')]");
    I.wait(1);
    I.see('Please input the information');

    I.fillField("//input[@data-testid='usernameLogin']", "automation_auto_31");
    I.fillField("//input[@data-testid='passwordLogin']", "Testing@123");
    I.click("//span[contains(@class,'Login_button')]");
    I.see('Security Code');

    I.fillField("//div[contains(@class,'OTPInput_input')][1]", "111111");
    I.waitForText("Chats", 20);
    I.wait(2);
    
    I.click("//a[contains(@class,'ProfileButton_avatar')]");
    I.click("//div[contains(@class,'Account_button') and contains(text(), 'Device')]");
    I.click("//button[contains(@class,'DeviceTab_link') and contains(text(), 'Link Device')]");
    I.waitForText("Activation code:", 20);
    I.wait(2);

    let sActivationCode = await I.grabTextFrom("//div[contains(text(), 'Activation code:')]/../div/./div");
    console.log(sActivationCode);

});
