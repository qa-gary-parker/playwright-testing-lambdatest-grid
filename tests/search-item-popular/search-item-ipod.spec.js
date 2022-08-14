// @ts-check
const { test } = require('../../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Search item popular', () => {
  test('Add to cart', async ({ page }) => {

    // Navigate to base url
    await page.goto('https://ecommerce-playground.lambdatest.io')

    // Fill [placeholder="Search For Products"]
    await page.locator('[placeholder="Search For Products"]').first().fill('ipod');

    // Click text=Search
    await page.locator('text=Search').click()

    // Click sort by 'Popular'
    await page.locator('#input-sort-212464').selectOption({index: 2})

    // Hover over product
    await page.locator('.lazy-load').first().hover()
    
    // Wait for element
    await expect(page.locator('.product-action > button').first()).toBeVisible()

    await page.waitForTimeout(2000)

    // Click add to cart
    await page.locator('.product-action > button').first().click()
    
    // Click view cart
    await page.locator('text=View Cart').click()

    // Assert correct product added to cart
    await expect(page.locator('#content >> text=iPod Nano')).toBeVisible()
  })
});