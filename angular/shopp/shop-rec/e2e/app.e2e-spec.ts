import { ShopRecPage } from './app.po';

describe('shop-rec App', () => {
  let page: ShopRecPage;

  beforeEach(() => {
    page = new ShopRecPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
