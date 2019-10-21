$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GmailLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail lon in",
  "description": "",
  "id": "gmail-lon-in",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "im testing gmail login page",
  "description": "",
  "id": "gmail-lon-in;im-testing-gmail-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@current"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I lunch gmail URL in \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I enter \u003cusername\u003eusername",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on the username next button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter user \u003cpassword\u003e password",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on the password next button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Validate page title",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify compose button",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "gmail-lon-in;im-testing-gmail-login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 45,
      "id": "gmail-lon-in;im-testing-gmail-login-page;;1"
    },
    {
      "cells": [
        "nagasesha999",
        "darling143"
      ],
      "line": 46,
      "id": "gmail-lon-in;im-testing-gmail-login-page;;2"
    },
    {
      "cells": [
        "nagasesha9999",
        "darling143"
      ],
      "line": 47,
      "id": "gmail-lon-in;im-testing-gmail-login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "im testing gmail login page",
  "description": "",
  "id": "gmail-lon-in;im-testing-gmail-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@current"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I lunch gmail URL in \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I enter nagasesha999username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on the username next button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter user darling143 password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on the password next button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Validate page title",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify compose button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 22
    }
  ],
  "location": "stepDefinitions.i_lunch_gmail_URL_in_browser(String)"
});
formatter.result({
  "duration": 29958537285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "999",
      "offset": 17
    }
  ],
  "location": "stepDefinitions.i_enter_nagasesha_username(String)"
});
formatter.result({
  "duration": 821132218,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_the_username_next_button()"
});
formatter.result({
  "duration": 5169741235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "143",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.i_enter_user_darling_password(String)"
});
formatter.result({
  "duration": 3338226631,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.i_enter_user_darling_password(stepDefinitions.java:93)\r\n\tat ✽.And I enter user darling143 password(GmailLogin.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_the_password_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.validate_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.verify_compose_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 47,
  "name": "im testing gmail login page",
  "description": "",
  "id": "gmail-lon-in;im-testing-gmail-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@current"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I lunch gmail URL in \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I enter nagasesha9999username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on the username next button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter user darling143 password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on the password next button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Validate page title",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify compose button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 22
    }
  ],
  "location": "stepDefinitions.i_lunch_gmail_URL_in_browser(String)"
});
formatter.result({
  "duration": 18470344633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999",
      "offset": 17
    }
  ],
  "location": "stepDefinitions.i_enter_nagasesha_username(String)"
});
formatter.result({
  "duration": 189989380,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_the_username_next_button()"
});
formatter.result({
  "duration": 6551409695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "143",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.i_enter_user_darling_password(String)"
});
formatter.result({
  "duration": 6909249098,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.i_enter_user_darling_password(stepDefinitions.java:93)\r\n\tat ✽.And I enter user darling143 password(GmailLogin.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_the_password_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.validate_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.verify_compose_button()"
});
formatter.result({
  "status": "skipped"
});
});