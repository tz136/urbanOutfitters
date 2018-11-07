import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home Page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('About Me');
  });

  it('should display AboutMe button',()=>{
    page.navigateTo();
    expect(page.getAboutMeButton().getText()).toEqual('About Me');
  })

  it('should route to thanks page',()=>{
    page.navigateTo();
    page.getAboutMeButton().click();
    expect(page.getThanksPageText()).toEqual('Hope You Like This Simple Webapp!!');
  })
});
