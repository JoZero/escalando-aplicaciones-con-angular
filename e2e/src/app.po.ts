import { browser, by, element } from 'protractor';

export class AppPage {
  selectors = {
    'title' : 'app-root h1',
<<<<<<< HEAD
    'dash-titles' : 'app-dash mat-card-title'
=======
    'card-titles': 'mat-card-title'
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
  };

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css(this.selectors['title'])).getText();
  }

<<<<<<< HEAD
  getDashBoardTitles() {
    return element.all(by.css(this.selectors['dash-titles']));
=======
  getcardTitles() {
    return element.all(by.css(this.selectors['card-titles']));
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
  }
}
