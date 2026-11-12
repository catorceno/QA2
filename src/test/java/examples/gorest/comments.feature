Feature: CRUD para comments

  Background:
    * url 'https://gorest.co.in/public/v2'
    * header Accept = 'application/json'
    * header Content-Type = 'application/json'
    * header Authorization = 'Bearer 587af75efde5f56f7b05bdf01877ca04490016ec9ffc5611020013e2f46df5e1'
    * def req_headers = {Authorization: 'Bearer 587af75efde5f56f7b05bdf01877ca04490016ec9ffc5611020013e2f46df5e1'}
    
  Scenario: Obtener Comentarios
    Given path 'comments'
    When method Get
    Then status 200
