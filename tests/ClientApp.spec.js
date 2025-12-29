const { test } = require("@playwright/test");

test("Client App Login Tests", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page
    .locator("#userEmail")
    .fill("playwrightautomationtutorial@yopmail.com");
  await page.locator("#userPassword").fill("Test@123");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
  const titles = await page.locator(".card-body b").allTextContent();
  console.log(titles);
});
