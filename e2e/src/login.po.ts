import { browser, by, element } from 'protractor';

export class LoginPage {
<<<<<<< HEAD
  selectors = {
    'email' : 'input[name="email"]',
    'password' : 'input[name="password"]',
    'selectGroup' : 'mat-select[name="group"]',
    'buttonLogin': 'mat-card button',
    'form' : 'form'
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  setEmail(text) {
    element(by.css(this.selectors['email'])).sendKeys(text);
  }

  setPassword(text) {
    element(by.css(this.selectors['password'])).sendKeys(text);
  }

  selectGroupOptionLastValue() {
    element(by.css(this.selectors['selectGroup'])).click()
    .then(() => element.all(by.css('mat-option')).last().click());
  }

  logIn() {
      element(by.css(this.selectors['form'])).submit();
  }
=======
    selectors = {
        'email': 'input[name="email"]',
        'password': 'input[name="password"]',
        'selectGroup': 'mat-select[name="group"]',
        'form' : 'form'
    };

    navigateToLogin() {
        return browser.get('/login');
    }

    setEmail(text) {
        element(by.css(this.selectors.email)).sendKeys(text);
    }

    setPassword(text) {
        element(by.css(this.selectors.password)).sendKeys(text);
    }

    selectGroupOptionLastValue() {
        element(by.css(this.selectors.selectGroup)).click()
        .then(() => element.all(by.css('mat-option')).last().click());
    }

    makeLogIn({ email, password }) {
        this.navigateToLogin();
        this.setEmail(email);
        this.setPassword(password);
        this.selectGroupOptionLastValue();

        element(by.css(this.selectors['form'])).submit();
    }
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
}
