import { AdminGuard } from './auth.guard';

describe('AdminGuard', () => {
  it('should be defined', () => {
    expect(new AdminGuard()).toBeDefined();
  });
});
