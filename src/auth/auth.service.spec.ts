import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
      imports: [UsersModule],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should know ola', async () => {
    expect(await service.validateUser('Ola', 'lotte123')).toEqual({
      userId: 4,
      username: 'Ola',
      email: 'ola@ccl.de',
      role: 'host',
    });
  });
});
