Feature: Login en SauceDemo

    Background:
        Given I'm at SauceDemo's login page

    @login @loginSuccess
    Scenario Outline: Login successful
        When I enter username "<username>" and password "<password>"
        Then it should successfully access the products page

        # Data-Driven Testing, parametrizar scenario con varias entradas
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |

    @login @loginFailed
    Scenario: Login failed due to locked out user
        When I enter username "locked_out_user" and password "secret_sauce"
        Then it should display error message "Epic sadface: Sorry, this user has been locked out."

    @login @loginError
    Scenario: Login failed due to invalid credentials
        When I enter username "username-invalid" and password "password-invalid"
        Then it should display error message "Epic sadface: Username and password do not match any user in this service"

    @login @loginError
    Scenario: Login failed due to no username entered
        When I enter username "" and password "secret_sauce"
        Then it should display error message "Epic sadface: Username is required"
    
    @login @loginError
    Scenario: Login failed due to no password entered
        When I enter username "standard_user" and password ""
        Then it should display error message "Epic sadface: Password is required"