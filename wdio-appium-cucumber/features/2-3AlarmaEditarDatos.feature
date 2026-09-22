Feature: Editar datos de alarma
Background:
    Given Estoy en la pestaña de alarmas

  @editAlarmName
  Scenario: Editar el nombre de una alarma
    When Creo una alarma a las "11" horas y "30" minutos
    And Edito el nombre de la alarma a "New Name"
    Then El texto "New Name" debería estar visible en la pantalla

  @editAlarmTime
  Scenario: Editar la hora de una alarma existente
    When Creo una alarma a las "11" horas y "30" minutos
    And Edito la hora de la alarma a las "12" horas y "00" minutos
    Then El texto "12:00" debería estar visible en la pantalla