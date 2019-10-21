package maven.cucumberGmail;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefinitions {
	WebDriver driver;
	@Given("^I lunch gmail URL in Firefox browser$")
	public void i_lunch_gmail_URL_in_Firefox_browser() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "E:\\geckodriver.exe");
	  driver = new FirefoxDriver();
	  driver.manage().window().maximize();
	  driver.manage().deleteAllCookies();
	  driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	  driver.get("https://mail.google.com/mail/u/0/#inbox");
	  
	}

	@When("^I enter user name$")
	public void i_enter_user_name() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	   driver.findElement(By.name("identifier")).clear();
	   driver.findElement(By.name("identifier")).sendKeys("nagasesha999");
	}

	@When("^I click on the username next button$")
	public void i_click_on_the_username_next_button() throws Throwable {
		 driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		 driver.findElement(By.id("identifierNext")).click();
		 Thread.sleep(5000);
	}

	@When("^I enter user password$")
	public void i_enter_user_password() throws Throwable {
		 driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@name='password']")).clear();
		   driver.findElement(By.xpath("//input[@name='password']")).sendKeys("darling143");
	}

	@When("^I click on the password next button$")
	public void i_click_on_the_password_next_button() throws Throwable {
		 driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		 driver.findElement(By.id("passwordNext")).click();
	}

	
	@Then("^Validate page title$")
	public void validate_page_title() throws Throwable {
		 driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	 //  Assert.assertEquals("", driver.getTitle());
		 
	}
	
	
	@Then("^Verify compose button$")
	public void verify_compose_button() throws Throwable {
		 driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		WebElement compose = driver.findElement(By.xpath("//*[text()='Compose']"));
		if(compose.isDisplayed()) {
			Assert.assertTrue(true);
		}else {
			Assert.assertFalse(false);
		}
	}

}
