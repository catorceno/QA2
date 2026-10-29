@inciso2
Feature: Préstamo de un libro en Biblioteca QA

Background:
    Given estoy en la página de login de Biblioteca QA
    When ingreso el usuario "jperez" y la contraseña "Lector123!"
    Then debería acceder correctamente a la página de catálogo

@inciso2 @prestarLibro
Scenario: Ver el detalle de un libro y prestarlo por 18 días
    When abro el detalle del libro "Alicia en el país de las maravillas"
    Then debería ver el detalle del libro "Alicia en el país de las maravillas"
    When solicito el préstamo del libro
    And selecciono la fecha de devolución a 18 días
    Then debería ver un plazo de préstamo de 18 días
    When confirmo el préstamo
    Then debería ver el libro "Alicia en el país de las maravillas" en mis préstamos