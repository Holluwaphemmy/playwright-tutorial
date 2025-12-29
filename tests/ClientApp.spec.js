const { test } = require("@playwright/test");

test("Client App Login Tests", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page
    .locator("#userEmail")
    .fill("playwrightautomationtutorial@yopmail.com");
  await page.locator("#userPassword").fill("Test@123");
  await page.locator("#login").click();
  // This method of waiting is flaxy and not encouraged by Playwright
  //   await page.waitForLoadState("networkidle");

  // A better wait mechanism is to waif for all the items to load
  await page.locator(".card-body b").last().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});
