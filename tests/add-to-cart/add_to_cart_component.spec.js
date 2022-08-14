// @ts-check
const { test } = require('../../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Add to cart', () => {
  test('Add to cart', async ({ page }) => {

    // Navigate to base url
    await page.goto('https://ecommerce-playground.lambdatest.io')

    // Click Shop by Category
    await page.locator('text=Shop by Category').click();

    // Click Components
    await page.locator('text=Components').first().click();

    // Hover over product
    await page.locator('text=Add to Cart Add to Wish List Nikon D300 $98.00 Engineered with pro-level feature').hover()
    
    // Wait for element
    await expect(page.locator('text=Add to Cart Add to Wish List Nikon D300 $98.00 Engineered with pro-level feature >> button >> nth=0')).toBeVisible()

    await page.waitForTimeout(2000)

    // Click add to cart
    await page.locator('text=Add to Cart Add to Wish List Nikon D300 $98.00 Engineered with pro-level feature >> button').first().click()
    
    // Click view cart
    await page.locator('text=View Cart').click()

    // Assert correct product added to cart
    await expect(page.locator('#content >> text=Nikon D300')).toBeVisible()
  })
});