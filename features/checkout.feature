Feature: Checkout functionality

  Scenario: User completes a purchase successfully
    Given I am logged into the website
    And I navigate to the homepage
    And I add "Hero Hoodie" from Hot Sellers to the cart with size "M", color "Black", and quantity "1"
    And I click on the cart icon
    And I click on the "Proceed to Checkout" button
    When I fill in the new shipping address details
    And I select the shipping method
    And I proceed to payment
    And I place the order
    Then I should see a confirmation message "Thank you for your purchase!"
    And I sign out
