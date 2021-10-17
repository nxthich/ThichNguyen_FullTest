const { I, webLoginPage, mobilePage } = inject();
// Add in your custom step files

let sActivationCode;
let sMsg = "Hello" + Math.random().toString();

Given('I login into LeapXpert with company {string}, user {string}, password {string} and otp {string}', (company, user, pass, otp) => {
  webLoginPage.login(company, user, pass, otp);
});

When('I link device and get the QRCode', async () => {
  sActivationCode = await webLoginPage.getQRCode();
});

Then('I launch Lead app, skip guideline and input the QRCode', async () => {
  await mobilePage.inputQRCode(sActivationCode);
});

Then('I type the password {string} and otp {string} to login on App', async (pass, otp) => {
  await mobilePage.inputPassAndOTP(pass, otp);
});

Then('I search for user {string}', async (user) => {
  await mobilePage.searchUser(user);
});

Then('I send a message to the found user', async () => {
  await mobilePage.sendMsgToUser(sMsg);
});

Then('I login into LeapXpert with company {string}, user {string}, password {string} and otp {string}', (company, user, pass, otp) => {
  webLoginPage.login(company, user, pass, otp);
});

Then('I will see the sent message', () => {
  I.waitForText(sMsg, 20);
});
