import { AppPage } from './app.po';
import { browser } from "protractor";
import { protractor } from 'protractor/built/ptor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.wait(page.navigateTo(), 1000)
  });

  it('should display welcome message', () => {
    expect(page.getElements().count()).toBe(0);
  });

  it('should go to add a question page', () =>{
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(page.AddQuestionBtn()), 2000)
    page.AddQuestionBtn().click()
    browser.sleep(2000)
    expect(browser.wait(browser.getCurrentUrl(), 100)).toEqual("http://localhost:3000/#/admin/question/add")
  })

});
