import {test,expect} from '@playwright/test'

test.skip('Mouse Right Click', async({page}) =>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const button = page.locator("//span[@class='context-menu-one btn btn-neutral']")
    await button.click({button:"right"})
    await page.waitForTimeout(3000)
})

test('Mouse Left Click', async({page}) =>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo/trigger-left-click.html')

    const button = page.locator("//span[@class='context-menu-one btn btn-neutral']")
    await button.click({button:"left"})
    await page.waitForTimeout(3000)
})

