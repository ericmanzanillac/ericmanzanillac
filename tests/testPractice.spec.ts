import { test, expect } from '@playwright/test';

test.describe('Acciones en el SANDBOX de automation', () => {
    
    test('Click en el boton ID Dinamico', async ({ page }) => {
        // 1. Navegar a la URL (IMPORTANTE: Agregué el await que faltaba)
        await page.goto('https://google.com');

        // 2. Aquí puedes agregar la interacción, por ejemplo:
        // await page.getByRole('button', { name: 'Dinamico' }).click();
    });

});