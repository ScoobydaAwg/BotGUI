from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
import  subprocess


def open_orbix_project(keyword):
    url = f"http://localhost:8000/{keyword[0]}.html"

    # Set up Chrome options
    chrome_options = Options()
    chrome_options.add_argument("--start-fullscreen")  # Open in full screen
    chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])  # Hide the automation banner
    chrome_options.add_experimental_option("useAutomationExtension", False)  # Disable automation extension
    chrome_options.add_experimental_option("detach", True)  # Keep the browser open after script ends

    # Set up the Chrome WebDriver
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)

    # Open the URL
    driver.get(url)



#def close_orbix_project():
    # This is specific to Windows. For other OS, you might need a different command.
    #subprocess.call(['taskkill', '/F', '/T', '/IM', 'chrome.exe'])
