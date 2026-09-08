Feature: Infinite Scroll en HerokuApp

@infiniteScroll
Scenario: Cargar más contenido al hacer scroll
    Given estoy en la página de infinite scroll
    When hago scroll hacia abajo 3 veces
    Then debería haberse agregado más párrafos
