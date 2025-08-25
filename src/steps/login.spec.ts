import { Given, When, Then } from "./fixtures";
import { chromium, Browser, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { expect } from "@playwright/test";

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given("user opens login page", async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When("user performs valid login", async function () {
  await loginPage.login("standard_user", "secret_sauce");
});

Then("user should be on products page", async function () {
  const visible = await loginPage.isProductsPageVisible();
  expect(visible).toBeTruthy();
  await browser.close();
});
