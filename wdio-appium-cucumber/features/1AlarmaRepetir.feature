Feature: Repetición de alarma
Background:
    Given Estoy en la pestaña de alarmas

  @repeatAlarm
  Scenario: Crear una alarma con repetición semanal en el día Lunes
    When Creo una alarma a las "11" horas y "30" minutos
    And Configuro la repetición de la alarma para el día número "1"
    Then El texto "Monday" debería estar visible en la pantalla