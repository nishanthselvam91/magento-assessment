Feature: Sign up functionality

  Scenario: User should be able to create a new account
    Given I am on the signup page
    When I enter account details with random email
    Then I should see account creation success message