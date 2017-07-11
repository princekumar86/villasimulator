import { VillasimulationPage } from './app.po';

describe('villasimulation App', () => {
  let page: VillasimulationPage;

  beforeEach(() => {
    page = new VillasimulationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
