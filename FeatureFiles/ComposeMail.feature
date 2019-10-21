Feature: Compose mail in gmail 

@gmailCompose 
Scenario: testing compose madudle 

	Given I lunch gmail URL in "chrome" browser
	When I enter "nagasesha999"username
	And I click on the username next button
	And I enter user "darling143"password
	And I click on the password next button
	Then Validate page title
	Then Verify compose button
	And I enter to mail 
	And I enter subject 
	And I enter massege 
	And I Attach resume 
	And I click on send button 
	
