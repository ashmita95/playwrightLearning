import {test,expect} from '@playwright/test'

test('Drag and Drop', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const draggable = await page.locator('#draggable')
    const target = await page.locator('#droppable')

    //approach 1
    // await draggable.hover() // Move mouse over draggable element
    // await page.mouse.down() // Click and hold

    // await target.hover()  // Move mouse to drop target
    // await page.mouse.up()  // Release to drop

    //approach 2

    //await draggable.dragTo(target)

    //approach 3
    await page.dragAndDrop('#draggable', '#droppable')

    await expect(target).toHaveText(/Dropped!/)
    await page.waitForTimeout(3000)
})