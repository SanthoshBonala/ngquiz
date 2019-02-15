import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/#/admin/questions');
  }

  getElements() {
    return element.all(by.tagName('li'));
  }

  AddQuestionBtn() {
    return element(by.xpath('/html/body/app-root/app-questions/div[2]/button[2]'));;
  }

}
