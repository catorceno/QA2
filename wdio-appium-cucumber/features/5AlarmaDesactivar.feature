Feature: Desactivar alarma
Background:
    Given Estoy en la pestaña de alarmas

  @deactivateAlarm
  Scenario: Desactivar una alarma
    When Creo una alarma a las "11" horas y "30" minutos
    And Desactivo la alarma con descripción "11:30 AM alarm"
    Then El texto "Not scheduled" debería estar visible en la pantalla
