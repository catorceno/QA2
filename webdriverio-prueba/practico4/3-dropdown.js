describe('Dropdown en HerokuApp', () => {
    it('', async () => {
        await browser.url('https://the-internet.herokuapp.com/dropdown');

        const dropdown = await $('#dropdown');

        await dropdown.selectByVisibleText('Option 1');
        await expect(dropdown).toHaveValue('1');

        await dropdown.selectByAttribute('value', '2');
        await expect(dropdown).toHaveValue('2');
    });
});