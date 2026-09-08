Feature: Drag and Drop en HerokuApp

@dragAndDrop
Scenario: Intercambiar el contenido de los cuadros A y B
    Given estoy en la página de drag and drop
    When arrastro el cuadro A hacia el cuadro B
    Then el contenido de los cuadros debería estar intercambiado
