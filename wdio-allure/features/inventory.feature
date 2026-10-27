Feature: Catálogo de productos en SauceDemo

  Background:
    Given inicio sesión como "standard_user" en SauceDemo

  @inventory
  Scenario: Visualizar el listado completo de productos
    Then debería ver 6 productos en el listado

  @inventory @sort
  Scenario Outline: Ordenar productos del catálogo
    When ordeno los productos por "<criterio>"
    Then los productos deberían quedar ordenados por "<criterio>"

    Examples:
      | criterio             |
      | Name (A to Z)        |
      | Name (Z to A)        |
      | Price (low to high)  |
      | Price (high to low)  |

  @inventory @cart
  Scenario: Agregar un producto al carrito desde el catálogo
    When agrego el producto "Sauce Labs Backpack" al carrito
    Then el ícono del carrito debería mostrar "1" producto(s)

  @inventory @cart
  Scenario: Agregar varios productos al carrito
    When agrego el producto "Sauce Labs Backpack" al carrito
    And agrego el producto "Sauce Labs Bike Light" al carrito
    And agrego el producto "Sauce Labs Bolt T-Shirt" al carrito
    Then el ícono del carrito debería mostrar "3" producto(s)

  @inventory @cart
  Scenario: Quitar un producto del carrito desde el catálogo
    Given agrego el producto "Sauce Labs Backpack" al carrito
    When quito el producto "Sauce Labs Backpack" del carrito
    Then el ícono del carrito no debería mostrar contador

  @inventory @detail
  Scenario: Ver el detalle de un producto
    When abro el detalle del producto "Sauce Labs Backpack"
    Then debería ver la página de detalle del producto "Sauce Labs Backpack"

  @inventory @logout
  Scenario: Cerrar sesión desde el menú lateral
    When cierro sesión desde el menú lateral
    Then debería regresar a la página de login
