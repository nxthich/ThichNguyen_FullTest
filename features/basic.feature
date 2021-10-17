Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario: User1 login and get QRCode
    Given I login into LeapXpert with company "auto_testing", user "automation_auto_31", password "Testing@123" and otp "111111"
    When I link device and get the QRCode
    Then I launch Lead app, skip guideline and input the QRCode
    Then I type the password "Testing@123" and otp "111111" to login on App
    Then I search for user "automation_auto_30"
    Then I send a message to the found user
    Then I login into LeapXpert with company "auto_testing", user "automation_auto_30", password "Testing@123" and otp "111111"
    Then I will see the sent message



