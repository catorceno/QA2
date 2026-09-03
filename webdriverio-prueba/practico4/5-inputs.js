describe('Inputs en HerokuApp', () => {
    it('Debe aceptar y modificar valores numéticos en el campo', async () => {
        await browser.url('https://the-internet.herokuapp.com/inputs');

        const input = await $('input[type="number"]');

        await input.setValue('25');
        await expect(input).toHaveValue('25');

        await input.click();
        await browser.keys('ArrowUp');
        await expect(input).toHaveValue('26');

        await browser.keys('ArrowDown');
        await browser.keys('ArrowDown');
        await expect(input).toHaveValue('24');
    });
});