import { browser, protractor } from 'protractor';
import { LoginPage } from './login.po';

describe('workspace-project Login', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('Should login when fill correctly', () => {
    const EC = protractor.ExpectedConditions;
    const expectedUrl = 'http://localhost:4200/';

<<<<<<< HEAD
    page.navigateToLogin();
    page.setEmail('admin');
    page.setPassword('admin');
    page.selectGroupOptionLastValue();

    page.logIn();
=======
    page.makeLogIn({
      email: 'admin',
      password: 'admin'
    });
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5

    // http://www.protractortest.org/#/api?view=ProtractorExpectedConditions.prototype.urlContains
    browser.wait(EC.urlIs(expectedUrl))
      .then(() => expect(browser.getCurrentUrl()).toEqual(expectedUrl));

  });
});
