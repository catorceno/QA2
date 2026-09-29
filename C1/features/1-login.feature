Feature: Login a Biblioteca QA

Background:
    Given estoy en la página de login de Biblioteca QA

@login @loginExitoso
Scenario: Login exitoso
    When ingreso el usuario "jperez" y la contraseña "Lector123!"
    Then debería acceder correctamente a la página de catálogo

