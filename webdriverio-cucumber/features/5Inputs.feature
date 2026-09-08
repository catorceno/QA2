Feature: Inputs en HerokuApp

@inputs
Scenario: Incrementar y decrementar un valor numérico
    Given estoy en la página de inputs
    When escribo el valor "25" en el input numérico
    And incremento el valor con la flecha hacia arriba
    Then el valor del input debería ser "26"
    When decremento el valor con la flecha hacia abajo dos veces
    Then el valor del input debería ser "24"
