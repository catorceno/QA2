describe('Drag and drop en HerokuApp', () => {
    it('Debe intercambiar el contenido de los cuadros A y B', async () => {
        await browser.url('https://the-internet.herokuapp.com/drag_and_drop');

        const boxA = await $('#column-a');
        const boxB = await $('#column-b');

        const textoInicialA = await boxA.getText();
        const textoInicialB = await boxB.getText();

        await boxA.dragAndDrop(boxB);

        await expect(boxA).toHaveText(textoInicialB);
        await expect(boxB).toHaveText(textoInicialA);
    });
});