import {test,expect} from '@playwright/test'

test('Handle Frames', async({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
    const allFrames = page.frames()
    console.log("Total no. of frames", allFrames.length)

    //using name/url of the page
    // const frame1 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    // await frame1.fill("input[name='mytext1']", "Hello")


    //using framelocator

    const inputBox = page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await inputBox.fill("Hello")

    await page.waitForTimeout(5000)

})