import { ReactChatModule } from './react-chat.module';

describe('ReactChatModule', () => {
  let reactChatModule: ReactChatModule;

  beforeEach(() => {
    reactChatModule = new ReactChatModule();
  });

  it('should create an instance', () => {
    expect(reactChatModule).toBeTruthy();
  });
});
