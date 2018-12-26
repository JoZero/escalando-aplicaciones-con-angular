import { browser, protractor } from 'protractor';
import { AppPage } from './app.po';
import { LoginPage } from './login.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let login: LoginPage;

  beforeEach(() => {
    page = new AppPage();
    login = new LoginPage();
  });

  it('should display welcome message', () => {
    const EC = protractor.ExpectedConditions;
    const expectedUrl = 'http://localhost:4200/';

    login.makeLogIn({
      email: 'admin',
      password: 'admin'
    });

    browser.wait(EC.urlIs(expectedUrl))
      .then(() => {
        expect(page.getTitleText()).toEqual('App');
        expect(browser.getCurrentUrl()).toEqual(expectedUrl);
      });
  });

  it('should have correct titles', () => {
    const titles = [
      'What is Lorem Ipsum?',
      'What is Lorem Ipsum?'
    ];
    const titilesList = page.getcardTitles();

    titles.forEach((title, index) => {
      expect(titilesList.get(index).getText()).toEqual(title);
    });
  });

  it('should have the right titles', () => {
    const titles = [
      'What is Lorem Ipsum?',
      'What is Lorem Ipsum?'
    ];

    page.navigateTo();

    const elements = page.getDashBoardTitles();

    titles.forEach((title, index ) => {
      expect(elements.get(index).getText()).toEqual(title);
    });
  });
});
