import {test, expect} from '@playwright/test'

test('double click test', async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    page.once('dialog',async(dialog)=>{
        expect(dialog.message()).toBe('You double clicked me.. Thank You..');
        await dialog.accept();
    })
    await page.getByRole('button',{name:'Double-Click Me To See Alert'}).dblclick();

})