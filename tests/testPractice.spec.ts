import {test, Browser, Page} from '@playwright/test';

(async () => {
    letbrowser: Browser;
    let page: Page;
    test.describe('Acciones en el SANDOBOX de automation', () => {
        test('Click en el boton ID Dinamico', async ({page}) => {
            page.goto('http://localhost:3000/sandbox-automation-testing');

        }});