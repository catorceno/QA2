@inciso3
Feature: Registro de usuario nuevo y préstamo de un libro en Biblioteca QA

Background:
    Given estoy en la página de registro de Biblioteca QA

@inciso3 @registroPrestamo
Scenario: Registrar un usuario nuevo, ver el detalle de un libro y prestarlo por 6 días
    When completo el formulario de registro con nombre "Camila Catorceno", correo "camila@gmail.com", usuario "catorceno", contraseña "Lector123!" y tipo de usuario "Estudiante"
    And acepto los términos y condiciones
    And creo la cuenta
    Then debería acceder correctamente a la página de catálogo
    And debería ver el nombre "Camila Catorceno" en la cabecera
    When abro el detalle del libro "Alicia en el país de las maravillas"
    Then debería ver el detalle del libro "Alicia en el país de las maravillas"
    When solicito el préstamo del libro
    And selecciono la fecha de devolución a 10 días
    Then debería ver un plazo de préstamo de 10 días
    When confirmo el préstamo
    Then debería ver el libro "Alicia en el país de las maravillas" en mis préstamos