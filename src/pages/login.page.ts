import { Page } from "@playwright/test";
import { LoginSelectors } from "./login.selector";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async fillUsername(username: string) {
    await this.page.fill(LoginSelectors.inputUsername, username);
  }

  async fillPassword(password: string) {
    await this.page.fill(LoginSelectors.inputPassword, password);
  }

  async clickLogin() {
    await this.page.click(LoginSelectors.btnLogin);
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async isProductsPageVisible() {
    return this.page.isVisible(LoginSelectors.listInventory);
  }
}
