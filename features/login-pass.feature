Feature: Login functionality for success scenario

  Scenario Outline: User should be able to login with valid credentials
    Given I am on the login page
    When I login with email <email> and password <password>
    Then I should see the user dashboard

    Examples:
      | email                   | password         |
      | "testautomation@domain.com"    | "Welcome@123" |