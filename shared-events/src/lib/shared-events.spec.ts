import { sharedEvents } from './shared-events.js';

describe('sharedEvents', () => {
  it('should work', () => {
    expect(sharedEvents()).toEqual('shared-events');
  });
});
