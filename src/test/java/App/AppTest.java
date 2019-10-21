package App;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

public class AppTest {
public WebDriver driver;
	@Test
	public void Check() throws Exception {

		

		
		System.setProperty("webdriver.chrome.driver", "E:\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://mail.google.com/mail/u/0/#inbox");
		Thread.sleep(5000);
		driver.findElement(By.name("identifier")).clear();
		driver.findElement(By.name("identifier")).sendKeys("nagasesha999");
		driver.findElement(By.id("identifierNext")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@name='password']")).clear();
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("darling143");
		driver.findElement(By.id("passwordNext")).click();
		Thread.sleep(5000);
		WebElement compose = driver.findElement(By.xpath("//*[text()='Compose']"));
		if (compose.isDisplayed()) {
			System.out.println("compose displayed ");
		} else {
			System.out.println("compose not displayed ");
		}

	
	

	}

}
