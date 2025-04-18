Feature: Login functionality for invalid scenario

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with email "<email>" and password "<password>"
    Then I should see an error message

    Examples:
      | email                  | password              |
      | roni_cost@example.com | SuperSecretPassword   |
      | fake_user@example.com | barfoo                |