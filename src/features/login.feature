Feature: Login to SauceDemo

  As a user
  I want to login to SauceDemo
  So that I can access the inventory page

  Scenario: Successful login
    Given user opens login page
    When user performs valid login
    Then user should be on products page
