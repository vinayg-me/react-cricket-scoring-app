import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Cricket Scoring App/)
})

test('app loads successfully', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Cricket Scoring/i })).toBeVisible()
}) 