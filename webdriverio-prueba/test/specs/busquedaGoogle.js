describe('Búsqueda en Google', () => {
    it('debería buscar la palabra "aseguramiento"', async () => {
        // 1. Abrir Google
        await browser.url('https://www.google.com');

        // 2. Manejar popup de cookies (si aparece)
        const agreeBtn = await $('#L2AGLb');
        if (await agreeBtn.isExisting() && await agreeBtn.isDisplayed()) {
            await agreeBtn.click();
        }

        // 3. Localizar el campo de búsqueda por ID
        const searchBox = await $('#ti6dpd'); 

        // 4. Esperar que aparezca
        await searchBox.waitForDisplayed({ timeout: 5000 });

        // 5. Escribir texto y presionar Enter
        await searchBox.setValue('aseguramiento');
        await browser.keys('Enter');

        // 6. Esperar resultados
        await browser.pause(2000);

        // 7. Obtener título
        const title = await browser.getTitle();
        console.log('Título de la página:', title);

        // 8. Validar que el título contenga la palabra buscada
        await expect(title).toContain('aseguramiento');
    });
});