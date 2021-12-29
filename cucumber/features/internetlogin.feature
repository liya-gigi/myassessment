Feature: The internet website login page

    Scenario Outline: As a user, I can login to a secure area
        Given I am on the login page
        When I enter the <username> and <password>
        Then I should see a flash message as <message>
        Examples:
            | username  | password             | message                        |
            | tomsmith  | SuperSecretPassword!  | You logged into a secure area! |
            | tomsmith1 | SuperSecretPassword  | Your username is invalid!      |
