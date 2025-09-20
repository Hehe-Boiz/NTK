import { UsersService } from 'src/users/users.service';
import { AdminGuard } from './auth.guard';
import { DatabaseService } from 'src/database/database.service';

describe('AdminGuard', () => {
  it('should be defined', () => {
    expect(new AdminGuard(new UsersService(new DatabaseService()))).toBeDefined();
  });
});
