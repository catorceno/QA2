describe('Login en HerokuApp', () => {
    it('Debe iniciar sesión exitosamente con credenciales válidas', async () => {
        // 1. Ir a la página de login
        await browser.url('https://the-internet.herokuapp.com/login');

        // 2. Completar campos
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');

        // 3. Clic en el botón de Login
        await $('button[type="submit"]').click();

        // 4. Validar que el login fue exitoso
        const successMessage = await $('#flash');
        await expect(successMessage).toBeDisplayed();
        await expect(successMessage).toHaveText(expect.stringContaining('You logged into a secure area!'));
    });
});