Feature: Sign in


    @Dev
    Scenario: As a user I want to sign into my account

        Given The user is on the homepage
        When The user signs in
        Then The user is signed in
