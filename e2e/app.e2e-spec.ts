import { NgBasicPage } from './app.po';

describe('ng-basic App', () => {
  let page: NgBasicPage;

  beforeEach(() => {
    page = new NgBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
