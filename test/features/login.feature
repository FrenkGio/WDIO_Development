Feature: The Internet Guinea Pig Website


  # @Dev
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the "login" page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>
    # And I am messing around

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperrSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
