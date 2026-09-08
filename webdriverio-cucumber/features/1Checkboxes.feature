Feature: Checkboxes en HerokuApp

@checkboxes
Scenario: Cambiar el estado de los checkboxes
    Given estoy en la página de checkboxes
    When marco el primer checkbox
    And desmarco el segundo checkbox
    Then el primer checkbox debería estar marcado
    And el segundo checkbox debería estar desmarcado
