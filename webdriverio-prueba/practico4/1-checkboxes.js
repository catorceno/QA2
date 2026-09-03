describe('Checkboxes en HerokuApp', () => {
    it('Debe cambiar el estado de los checkboxes correctamente', async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes');

        const checkboxes = await $$('#checkboxes input[type="checkbox"]');

        await expect(checkboxes[0]).not.toBeSelected();
        await expect(checkboxes[1]).toBeSelected();

        await checkboxes[0].click();
        await expect(checkboxes[0]).toBeSelected();

        await checkboxes[1].click();
        await expect(checkboxes[1]).not.toBeSelected();
    });
});