Feature: Add to Cart functionality

  Scenario: User should be able to add a product to the cart
    Given I am logged into the website
    And I navigate to the homepage
    When I add "Hero Hoodie" from Hot Sellers to the cart with size "M", color "Black", and quantity "2"
    Then I should see a success message confirming the product was added