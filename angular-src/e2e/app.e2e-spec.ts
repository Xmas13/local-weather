import { LocalWeatherPage } from './app.po';

describe('local-weather App', () => {
  let page: LocalWeatherPage;

  beforeEach(() => {
    page = new LocalWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
