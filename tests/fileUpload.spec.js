import {test,expect} from '@playwright/test'

test('Upload single files', async({page}) =>{
    await page.goto('https://practice.expandtesting.com/upload')

    await page.waitForSelector('#fileInput')
    await page.locator('#fileInput').setInputFiles('tests/uploadFiles/Profile (65).pdf')

    await page.waitForTimeout(5000)
})

test.only('Upload multiple files', async({page}) =>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload')
    .setInputFiles(['tests/uploadFiles/Profile (65).pdf',
                    'tests/uploadFiles/Profile (66).pdf'])

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Profile (65).pdf')
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Profile (66).pdf')
    await page.waitForTimeout(5000)

    //removing files
    await page.locator('#filesToUpload').setInputFiles([])
    await expect(page.locator('#fileList li')).toHaveText('No Files Selected')

    await page.waitForTimeout(5000)
})


