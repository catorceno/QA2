Feature: Carrito de compras en SauceDemo

  Background:
    Given inicio sesión como "standard_user" en SauceDemo
    And agrego el producto "Sauce Labs Backpack" al carrito
    And agrego el producto "Sauce Labs Bike Light" al carrito
    And abro el carrito de compras

  @cart
  Scenario: Visualizar los productos agregados en el carrito
    Then debería ver 2 producto(s) en el carrito
    And debería ver el producto "Sauce Labs Backpack" en el carrito
    And debería ver el producto "Sauce Labs Bike Light" en el carrito

  @cart
  Scenario: Eliminar un producto desde el carrito
    When elimino el producto "Sauce Labs Backpack" del carrito
    Then debería ver 1 producto(s) en el carrito

  @cart
  Scenario: Continuar comprando desde el carrito
    When presiono continuar comprando
    Then debería regresar a la página de productos

  @cart @checkout
  Scenario: Proceder al checkout desde el carrito
    When presiono el botón de checkout
    Then debería ver el formulario de información de envío
