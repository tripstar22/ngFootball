import { StreamlineCaExamplePage } from './app.po';

describe('streamline-ca-example App', function() {
  let page: StreamlineCaExamplePage;

  beforeEach(() => {
    page = new StreamlineCaExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
