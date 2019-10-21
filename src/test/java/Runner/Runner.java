package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.lv.Tad;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "FeatureFiles", glue = "stepDefinitions", tags = "@current", plugin = {
		"com.cucumber.listener.ExtentCucumberFormatter:CucumberGmailReports/report.html",
		"html:target/cucumber-reports" })
public class Runner {

}
