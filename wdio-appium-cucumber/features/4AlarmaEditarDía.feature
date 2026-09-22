Feature: Programar alarma
Background:
    Given Estoy en la pestaña de alarmas

  @scheduleAlarmDate
  Scenario: Programar una alarma para una fecha específica del calendario
    When Creo una alarma a las "11" horas y "30" minutos
    And Programo la alarma para el día "30" del calendario
    Then El texto "Scheduled for September 30" debería estar visible en la pantalla

  @cancelScheduleAlarmDate
  Scenario: Cancelar la programación de fecha de una alarma
    When Creo una alarma a las "11" horas y "30" minutos
    And Programo la alarma para el día "30" del calendario
    And Cancelo la programación de la alarma
    Then El texto "Today" debería estar visible en la pantalla