import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  // navigateToThanks(){
  //   return browser.get('/thanks');
  // }

  getParagraphText() {
    return element(by.css('app-footer span')).getText();
  }

  getAboutMeButton() {
    return element(by.css('[routerlink="thanks"]'));
  }

  getThanksPageText(){
    return element(by.css('app-thanks h1')).getText();
  }

}
