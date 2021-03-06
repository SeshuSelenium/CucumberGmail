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
  "name": "I enter \"\u003cusername\u003e\" usernames",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on the username next button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter user \"\u003cpassword\u003e\" passwords",
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
        "9515599998",
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
  "name": "I enter \"9515599998\" usernames",
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
  "name": "I enter user \"darling143\" passwords",
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
  "duration": 19346996759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9515599998",
      "offset": 9
    }
  ],
  "location": "stepDefinitions.i_enter_usernames(String)"
});
formatter.result({
  "duration": 271938477,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_the_username_next_button()"
});
formatter.result({
  "duration": 5179389456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "darling143",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.i_enter_user_passwords(String)"
});
formatter.result({
  "duration": 185784821,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_the_password_next_button()"
});
formatter.result({
  "duration": 173394540,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.validate_page_title()"
});
formatter.result({
  "duration": 7433757,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_compose_button()"
});
formatter.result({
  "duration": 65605629422,
  "status": "passed"
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
  "name": "I enter \"nagasesha9999\" usernames",
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
  "name": "I enter user \"darling143\" passwords",
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
  "duration": 43523491055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nagasesha9999",
      "offset": 9
    }
  ],
  "location": "stepDefinitions.i_enter_usernames(String)"
});
formatter.result({
  "duration": 331014258,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_the_username_next_button()"
});
formatter.result({
  "duration": 5181640505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "darling143",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.i_enter_user_passwords(String)"
});
formatter.result({
  "duration": 3550259469,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_the_password_next_button()"
});
formatter.result({
  "duration": 298334203,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.validate_page_title()"
});
formatter.result({
  "duration": 3874436,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_compose_button()"
});
formatter.result({
  "duration": 20178470839,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Compose\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-IHTLCOE\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\SUDHAR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63997}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f1ad5a2d6b24fc9b05c69f83f0534df7\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Compose\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepDefinitions.stepDefinitions.verify_compose_button(stepDefinitions.java:140)\r\n\tat ✽.Then Verify compose button(GmailLogin.feature:40)\r\n",
  "status": "failed"
});
});