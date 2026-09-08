Feature: Dropdown en HerokuApp

@dropdown
Scenario Outline: Seleccionar una opción del dropdown
    Given estoy en la página del dropdown
    When selecciono la opción "<opcion>"
    Then el valor seleccionado debería ser "<valor>"

    Examples:
      | opcion   | valor |
      | Option 1 | 1     |
      | Option 2 | 2     |
