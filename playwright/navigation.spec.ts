import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Welcome to ArenaBook!' }),
  ).toBeVisible();

  // test if logo is visible
  await expect(
    page.getByRole('img', { name: 'arena-book-logo' }),
  ).toBeVisible();

  await page.getByRole('button', { name: 'hamburger menu' }).click();

  await page.getByRole('link', { name: 'Login' }).nth(1).click();
  await page.waitForURL('/login');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
});
