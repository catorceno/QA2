Feature: Inicio de sesión en SauceDemo

  Como usuario de SauceDemo
  Quiero iniciar sesión en la aplicación
  Para poder acceder al catálogo de productos

  Background:
    Given estoy en la página de login de SauceDemo

  @login @loginValido
  Scenario Outline: Login exitoso con distintos usuarios válidos
    When ingreso el usuario "<usuario>" y la contraseña "<password>"
    Then debería acceder correctamente a la página de productos

    Examples:
      | usuario                 | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | visual_user             | secret_sauce |

  @login @loginInvalido
  Scenario: Login fallido con usuario bloqueado
    When ingreso el usuario "locked_out_user" y la contraseña "secret_sauce"
    Then debería ver el mensaje de error "Epic sadface: Sorry, this user has been locked out."

  @login @loginInvalido
  Scenario: Login fallido con credenciales inválidas
    When ingreso el usuario "usuario_invalido" y la contraseña "clave_invalida"
    Then debería ver el mensaje de error "Epic sadface: Username and password do not match any user in this service"

  @login @loginInvalido
  Scenario: Login fallido sin ingresar usuario
    When ingreso el usuario "" y la contraseña "secret_sauce"
    Then debería ver el mensaje de error "Epic sadface: Username is required"

  @login @loginInvalido
  Scenario: Login fallido sin ingresar contraseña
    When ingreso el usuario "standard_user" y la contraseña ""
    Then debería ver el mensaje de error "Epic sadface: Password is required"
