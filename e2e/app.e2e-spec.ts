import { AiPuzzlePage } from './app.po';

describe('ai-puzzle App', () => {
  let page: AiPuzzlePage;

  beforeEach(() => {
    page = new AiPuzzlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
