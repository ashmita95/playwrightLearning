import {test,expect} from '@playwright/test'

test('Handle Frames', async({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
    const allFrames = page.frames()
    console.log("Total no. of frames", allFrames.length)

    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    await frame3.locator("input[name='mytext3']").fill('Welcome')

    //nested frame
    const childframes = await frame3.childFrames()
    await childframes[0].waitForSelector('//*[@id="i6"]/div[3]')
    await childframes[0].locator('//*[@id="i6"]/div[3]').check()

    await page.waitForTimeout(5000)

})