Feature: CRUD para users

  Background:
    * url 'https://gorest.co.in/public/v2'
    * header Accept = 'application/json'
    * header Content-Type = 'application/json'
    * header Authorization = 'Bearer 587af75efde5f56f7b05bdf01877ca04490016ec9ffc5611020013e2f46df5e1'
    * def req_headers = {Authorization: 'Bearer 587af75efde5f56f7b05bdf01877ca04490016ec9ffc5611020013e2f46df5e1'}
    * def dataGenerator = Java.type('Utils.DataGenerator')
    * def payload =
      """
        {
          "gender": "male",
          "status": "active"
        }
      """
    * payload.name = dataGenerator.getUserRandom().name
    * payload.email = dataGenerator.getUserRandom().email

  Scenario: Obtener Usuarios
    Given path 'users'
    When method Get
    Then status 200

  Scenario: Obtener un Usuario
    Given path 'users'
    And request payload
    When method Post
    Then status 201
    * def userId = response.id
    Given path 'users', userId
    And headers req_headers
    When method Get
    Then status 200
    And match response.email == payload.email

  Scenario: Crear un Usuario
    Given path 'users'
    And request payload
    When method Post
    Then status 201
    And match response ==
    """
      {
        "id": "#number",
        "name": "#string",
        "email": "#string",
        "gender": "#string",
        "status": "#string"
      }
    """

  Scenario: Editar un Usuario
    Given path 'users'
    And request payload
    When method Post
    Then status 201
    * def userId = response.id
    Given path 'users', userId
    And headers req_headers
    When method Put
    Then status 200
    And match response ==
    """
      {
        "id": "#number",
        "name": "#string",
        "email": "#string",
        "gender": "#string",
        "status": "#string"
      }
    """

  Scenario: Eliminar un Usuario
    Given path 'users'
    And request payload
    When method Post
    Then status 201
    * def userId = response.id
    Given path 'users', userId
    And headers req_headers
    When method Delete
    Then status 204