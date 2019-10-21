Feature: Gmail lon in

@gmail
Scenario: im testing gmail login page

	Given I lunch gmail URL in Firefox browser
	When I enter user name
	And I click on the username next button
	And I enter user password
	And I click on the password next button
	Then Validate page title
	Then Verify compose button
	