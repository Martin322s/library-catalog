const { test, expect } = require('@playwright/test');

test('Verify that "All Books" link is visible', async ({ page}) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test('Verify that "Login" link is visible', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const loginLink = await page.$('a[href="/login"]');
    const isLoginLinkVisible = await loginLink.isVisible();
    expect(isLoginLinkVisible).toBe(true);
});