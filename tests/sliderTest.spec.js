import {test,expect} from '@playwright/test';

test.beforeEach(async({page}) =>{
        await page.goto('https://playground.bondaracademy.com')
        await expect(page).toHaveURL('https://playground.bondaracademy.com/pages/iot-dashboard')
})

test.describe('slider', ()=>{
        test('slider', async({page}) =>{       
                // by setting attribute

                // const tempGuage = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
                // await tempGuage.evaluate(node =>{
                //         node.setAttribute('cx','232.630')
                //         node.setAttribute('cy','232.630')
                // })
                // await tempGuage.click()

                // by mouse hover
                const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
                await tempBox.scrollIntoViewIfNeeded()
                const box = await tempBox.boundingBox()
                const x = box.x + box.width/2
                const y = box.y + box.height/2

                await page.mouse.move(x,y)
                await page.mouse.down()
                await page.mouse.move(x+100,y)
                await page.mouse.move(x+100,y+100)
                await page.mouse.up()

                await expect(tempBox).toContainText('30')

                await page.waitForTimeout(5000)
        })
})

// explanation of the above calculation
//Imagine your web page as a big grid

// In browsers, the (0, 0) coordinate starts at the top-left corner of the entire page.

// x-axis → increases to the right

// y-axis → increases downward

// 🧱 Now, your element (slider box) is somewhere on that page

// Let’s say Playwright gives you this result from boundingBox():

// {
//   x: 200,       // starts 200px from the left edge of the page
//   y: 400,       // starts 400px from the top of the page
//   width: 150,   // box is 150px wide
//   height: 40    // box is 40px tall
// }


// So the box covers this rectangular area:

// Top-left corner:  (200, 400)
// Top-right corner: (350, 400)
// Bottom-left:      (200, 440)
// Bottom-right:     (350, 440)

// 🧮 Step 1: Find the horizontal center

// The box starts at x = 200 and is 150px wide.

// To reach the center horizontally:

// 200 + (150 / 2) = 275


// So, x = 275 is the middle of the element horizontally.

// 🧮 Step 2: Find the vertical center

// The box starts at y = 400 and is 40px tall.

// To reach the center vertically:

// 400 + (40 / 2) = 420


// So, y = 420 is the middle of the element vertically.

// 🎯 Step 3: Center point

// The center of your element is therefore:

// (x, y) = (275, 420)


// That’s the exact point on the screen where Playwright moves the mouse to start dragging:

// await page.mouse.move(275, 420);

// 💡 Think of it like this:
// +------------------------------ Page -----------------------------+
// |                                                                 |
// |                                                                 |
// |              (200,400) ---------------------------              |
// |                         |         Element         |              |
// |                         |        (150x40)         |              |
// |                         ---------------------------              |
// |                               ↑                ↑                 |
// |                         x=275, y=420     ←  center point         |
// |                                                                 |
// +-----------------------------------------------------------------+