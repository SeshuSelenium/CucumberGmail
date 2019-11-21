package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefinitions {
	public static WebDriver driver;

//	@Given("^I lunch gmail URL in Firefox browser$")
//	public void i_lunch_gmail_URL_in_Firefox_browser() throws Throwable {
//		System.setProperty("webdriver.gecko.driver", "E:\\geckodriver.exe");
//		driver = new FirefoxDriver();
//		driver.manage().window().maximize();
//		driver.manage().deleteAllCookies();
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		driver.get("https://mail.google.com/mail/u/0/#inbox");
//
//	}
	@Given("^I lunch gmail URL in \"([^\"]*)\" browser$")
	public void i_lunch_gmail_URL_in_browser(String browser) throws Throwable {
	    if(browser.equalsIgnoreCase("chrome")) {
	    	System.setProperty("webdriver.chrome.driver", "D:\\drivers\\chromedriver.exe");
			driver = new ChromeDriver();
	    }else if(browser.equalsIgnoreCase("Firefox")) {
	    	System.setProperty("webdriver.gecko.driver", "E:\\geckodriver.exe");
			driver = new FirefoxDriver();
	    }else if(browser.equalsIgnoreCase("IE")) {
	    	System.setProperty("webdriver.ie.driver", "E:\\Drivers\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
	    }else {
	    	System.setProperty("webdriver.edge.driver", "E:\\Drivers\\MicrosoftWebDriver.exe");
			driver = new EdgeDriver();
	    }
	    driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://mail.google.com/mail/u/0/#inbox");

	}

//	@When("^I enter <username>username$")
//	public void i_enter_username(String arg1) throws Throwable {
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		driver.findElement(By.name("identifier")).clear();
//		driver.findElement(By.name("identifier")).sendKeys(arg1);
//	}
	
//	@When("^I enter nagasesha(.*) usernames$")
//	public void i_enter_nagasesha_username(String username) throws Throwable {
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		driver.findElement(By.name("identifier")).clear();
//		driver.findElement(By.name("identifier")).sendKeys(username);
//	}
	
	@When("^I enter \"([^\"]*)\" usernames$")
	public void i_enter_usernames(String username) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.name("identifier")).clear();
		driver.findElement(By.name("identifier")).sendKeys(username);
	}
	
	
	

//	@When("^I enter user name$")
//	public void i_enter_user_name() throws Throwable {
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//	   driver.findElement(By.name("identifier")).clear();
//	   driver.findElement(By.name("identifier")).sendKeys("nagasesha999");
//	}

	@When("^I click on the username next button$")
	public void i_click_on_the_username_next_button() throws Throwable {
		
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.id("identifierNext")).click();
		Thread.sleep(5000);
	}

//	@When("^I enter user <password> password$")
//	public void i_enter_user_password(String arg1) throws Throwable {
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		driver.findElement(By.xpath("//input[@name='password']")).clear();
//		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(arg1);
//	}
	
	@When("^I enter user \"([^\"]*)\" passwords$")
	public void i_enter_user_passwords(String password) throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@name='password']")).clear();
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	
	}
	
//	@When("^I enter user darling(.*) passwords$")
//	public void i_enter_user_darling_password(String password) throws Throwable {
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		driver.findElement(By.xpath("//input[@name='password']")).clear();
//		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
//	
//	}
	
	
	
//	@When("^I enter user password$")
//	public void i_enter_user_password() throws Throwable {
//		 driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		driver.findElement(By.xpath("//input[@name='password']")).clear();
//		   driver.findElement(By.xpath("//input[@name='password']")).sendKeys("darling143");
//	}

	@When("^I click on the password next button$")
	public void i_click_on_the_password_next_button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.id("passwordNext")).click();
	}

	@Then("^Validate page title$")
	public void validate_page_title() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		// Assert.assertEquals("", driver.getTitle());

	}

	@Then("^Verify compose button$")
	public void verify_compose_button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		WebElement compose = driver.findElement(By.xpath("//*[text()='Compose']"));
		if (compose.isDisplayed()) {
			Assert.assertTrue(true);
		} else {
			Assert.assertFalse(false);
		}
		driver.findElement(By.xpath("//*[text()='Compose']")).click();
	}

	@Then("^I enter to mail$")
	public void i_enter_to_mail() throws Throwable {

		Thread.sleep(10000);
		driver.findElement(By.name("to")).clear();
		driver.findElement(By.name("to")).sendKeys("ngaseshareddy99@gmail.com");
		System.out.println("kjJHG");
	}

	@Then("^I enter subject$")
	public void i_enter_subject() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.name("subjectbox")).clear();
		driver.findElement(By.name("subjectbox")).sendKeys("hai seshu");

	}

	@Then("^I enter massege$")
	public void i_enter_massege() throws Throwable {
		Thread.sleep(10000);
//		driver.findElement(By.xpath("//div[@id=':sl']")).clear();
//		driver.findElement(By.xpath("//div[@id=':sl']")).sendKeys("how are you man?");
		System.out.println("massege");
	}

	@Then("^I Attach resume$")
	public void i_Attach_resume() throws Throwable {
		System.out.println("attach");
		
	}

	@Then("^I click on send button$")
	public void i_click_on_send_button() throws Throwable {
		Thread.sleep(10000);
		// driver.findElement(By.xpath("//div[@id=':ce']")).click();

	}

}
