# WebDriverIO Cucumber Test Automation

This repository contains automated UI test cases built using WebDriverIO, Cucumber, and Allure Reporter. 
It simulates key user flows such as login, product selection, add to cart, and checkout in an e-commerce application.

---

##  Project Setup

### Prerequisites

- Node.js >= 16.x
- npm (comes with Node.js)
- Chrome browser (for local execution)

### Installation

Clone the repo and install the dependencies:

```bash
npm install
```

### Test Scenarios Covered

Add to Cart Functionality
- Verifies that a user can log in, navigate to the homepage, select a product from "Hot Sellers", choose size, color, and quantity, and add it to the cart successfully.

Checkout Functionality
- Tests a complete purchase flow including login, cart navigation, address entry, selecting a shipping method, placing the order, and verifying the success message.

Signup Functionality
- Validates that a user can navigate to the signup page, enter new account details using a random email, and receive a success confirmation.

Login Functionality
- Ensures that a user can log into the website using valid credentials and be redirected to the correct landing page after login.
