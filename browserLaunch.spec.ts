import {chromium,test} from '@playwright/test';

test('Open google chrome', async () => {

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()


    await page.goto('https://www.redbus.in/');

        await page.waitForTimeout(3000);
    
});