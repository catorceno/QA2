describe('Infinite scroll en HerokuApp', () => {
    it('Debe cargar más párrafos al hacer scroll hacia abajo', async () => {
        await browser.url('https://the-internet.herokuapp.com/infinite_scroll');

        const parrafosIniciales = (await $$('.jscroll-added')).length;

        for(let i=0; i<3; ++i){
            await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
            await browser.pause(1000);
        }

        const parrafosFinales = (await $$('.jscroll-added')).length;

        expect(parrafosFinales).toBeGreaterThan(parrafosIniciales);

    });
});