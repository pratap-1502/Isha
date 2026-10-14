import {test, expect} from '@playwright/test'

test('upload file',async({page})=>{
    await page.goto("https://recruiter.foundit.in/create-profile-page/")
   // await page.getByRole('img', { name: 'FoundIt Logo' }).click()
    await page.locator('#imgInp').setInputFiles('testdata/Final.png');

})
