import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const cucumberDir = defineBddConfig({
  features: ["src/features/**/*.feature"],
  steps: ["src/steps/**/*.ts"],
  outputDir: "src/specs"
});

export default defineConfig({
  testDir: cucumberDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'test-report/index.html',
      externalAttachments: true,
    }),
  ],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
