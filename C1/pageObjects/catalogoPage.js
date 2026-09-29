import Page from "./page";

class CatalogoPage extends Page {
    get catalogTable() { return $('table.catalog-table') }

    // Detalle del libro
    get detalleTitulo() { return $('h1.book-detail__title') }
    get detalleEstado() { return $('p.book-detail__status') }
    get btnPrestarDetalle() { return $('button.book-detail__loan-btn') }

    // Modal "Confirmar préstamo"
    get modalPrestamo() { return $('#loan-modal') }
    get modalTituloLibro() { return $('#loan-book-title') }
    get inputFechaDevolucion() { return $('#loan-due-date') }
    get btnAbrirCalendario() { return $('#btn-open-calendar') }
    get calendario() { return $('#loan-calendar') }
    get textoPlazo() { return $('#loan-modal p.muted') }
    get btnConfirmar() { return $('//div[@id="loan-modal"]//button[normalize-space()="Confirmar"]') }
    get btnCancelar() { return $('//div[@id="loan-modal"]//button[normalize-space()="Cancelar"]') }

    // Navegación del calendario (los 2 primeros botones son mes anterior / siguiente)
    get btnMesAnterior() { return $('(//div[@id="loan-calendar"]//button)[1]') }
    get btnMesSiguiente() { return $('(//div[@id="loan-calendar"]//button)[2]') }

    get linkMisPrestamos() { return $('=Mis préstamos') }

    diaCalendario(fecha) {
        const yyyy = fecha.getFullYear()
        const mm = String(fecha.getMonth() + 1).padStart(2, '0')
        const dd = String(fecha.getDate()).padStart(2, '0')
        return $(`#loan-calendar button[data-date="${yyyy}-${mm}-${dd}"]`)
    }

    async open() {
        await super.open('catalogo')
    }

    async isLoaded() {
        try {
            await $('table.catalog-table tbody tr').waitForDisplayed({ timeout: 10000 })
            return true
        } catch {
            return false
        }
    }

    filaLibro(titulo) {
        return $(`//table[contains(@class,"catalog-table")]//tr[td[normalize-space()="${titulo}"]]`)
    }

    async abrirDetalle(titulo) {
        const fila = this.filaLibro(titulo)
        await fila.waitForDisplayed({ timeout: 10000 })
        await fila.$('.//a[contains(.,"Ver detalle")]').click()
    }

    async getTituloDetalle() {
        await this.detalleTitulo.waitForDisplayed({ timeout: 10000 })
        return await this.detalleTitulo.getText()
    }

    // ---------- Utilidades de fecha ----------
    sumarDias(dias) {
        const fecha = new Date()
        fecha.setDate(fecha.getDate() + dias)
        return fecha
    }

    // Date -> "dd/mm/yyyy"
    formatearFecha(fecha) {
        const dd = String(fecha.getDate()).padStart(2, '0')
        const mm = String(fecha.getMonth() + 1).padStart(2, '0')
        return `${dd}/${mm}/${fecha.getFullYear()}`
    }

    // "dd/mm/yyyy" -> Date
    parsearFecha(texto) {
        const [dd, mm, yyyy] = texto.split('/').map(Number)
        return new Date(yyyy, mm - 1, dd)
    }

    // ---------- Acciones ----------
    async abrirModalPrestamo() {
        await this.btnPrestarDetalle.waitForClickable({ timeout: 10000 })
        await this.btnPrestarDetalle.click()
        await this.modalPrestamo.waitForDisplayed({ timeout: 5000 })
    }

    async seleccionarFechaDevolucion(dias) {
        const destino = this.sumarDias(dias)

        // El calendario abre en el mes de la fecha por defecto que trae el input
        const valorInicial = await this.inputFechaDevolucion.getValue()
        const inicial = this.parsearFecha(valorInicial)

        await this.btnAbrirCalendario.click()
        await this.calendario.waitForDisplayed({ timeout: 5000 })

        // Navegar meses si el destino cae en otro mes
        const diffMeses = (destino.getFullYear() - inicial.getFullYear()) * 12
            + (destino.getMonth() - inicial.getMonth())
        for (let i = 0; i < Math.abs(diffMeses); i++) {
            const btn = diffMeses > 0 ? this.btnMesSiguiente : this.btnMesAnterior
            await btn.click()
        }

        const dia = this.diaCalendario(destino)
        await dia.waitForClickable({ timeout: 5000 })
        await dia.click()
    }

    async getFechaDevolucion() {
        return await this.inputFechaDevolucion.getValue()
    }

    async getTextoPlazo() {
        await this.textoPlazo.waitForDisplayed({ timeout: 5000 })
        return await this.textoPlazo.getText()
    }

    async confirmarPrestamo() {
        await this.btnConfirmar.waitForClickable({ timeout: 5000 })
        await this.btnConfirmar.click()
        await this.modalPrestamo.waitForDisplayed({ timeout: 5000, reverse: true })
    }

    async irAMisPrestamos() {
        await this.linkMisPrestamos.click()
    }
}

export default new CatalogoPage()