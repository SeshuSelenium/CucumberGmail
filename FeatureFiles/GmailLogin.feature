Feature: Gmail lon in


Scenario Outline: im testing gmail login page

	Given I lunch gmail URL in "chrome" browser
	When I enter "nagasesha999"username
	And I click on the username next button
	And I enter user "darling143"password
	And I click on the password next button
	Then Validate page title
	Then Verify compose button

	Examples:      
	|username |password |                		
	|nagasesha999 | darling143 |
	|nagasesha9999 | darling143|

Scenario Outline: im testing gmail login page	
	Given I lunch gmail URL in "Firefox" browser
	When I enter "nagasesha999"username
	And I click on the username next button
	And I enter user "darling143"password
	And I click on the password next button
	Then Validate page title
	Then Verify compose button
	Examples:      
	|username |password |                		
	|nagasesha999 | darling143 |
	|nagasesha9999 | darling143|
@current	
Scenario Outline: im testing gmail login page	
	
	Given I lunch gmail URL in "chrome" browser
	When I enter <username>username
	And I click on the username next button
	And I enter user <password> password
	And I click on the password next button
	Then Validate page title
	Then Verify compose button
	
	
	
	Examples:      
	|username |password |                		
	|nagasesha999 | darling143 |
	|nagasesha9999 | darling143|
	

