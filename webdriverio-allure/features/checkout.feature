Feature: Proceso de checkout en SauceDemo

  Background:
    Given inicio sesión como "standard_user" en SauceDemo
    And agrego el producto "Sauce Labs Backpack" al carrito
    And abro el carrito de compras
    And presiono el botón de checkout

  @checkout
  Scenario: Completar el checkout con información válida
    When completo el formulario con nombre "Juan", apellido "Perez" y código postal "12345"
    And presiono continuar con el checkout
    Then debería ver el resumen del pedido
    When finalizo la compra
    Then debería ver el mensaje "Thank you for your order!"

  @checkout @error
  Scenario Outline: Error al completar el checkout con datos incompletos
    When completo el formulario con nombre "<nombre>", apellido "<apellido>" y código postal "<cp>"
    And presiono continuar con el checkout
    Then debería ver el mensaje de error de checkout "<mensaje>"

    Examples:
      | nombre | apellido | cp    | mensaje                        |
      |        | Perez    | 12345 | Error: First Name is required  |
      | Juan   |          | 12345 | Error: Last Name is required   |
      | Juan   | Perez    |       | Error: Postal Code is required |

  @checkout
  Scenario: Cancelar el checkout desde el formulario de información
    When cancelo el checkout
    Then debería regresar al carrito de compras

  @checkout
  Scenario: Verificar totales en el resumen del pedido
    When completo el formulario con nombre "Juan", apellido "Perez" y código postal "12345"
    And presiono continuar con el checkout
    Then el total del pedido debería ser igual al subtotal más el impuesto
