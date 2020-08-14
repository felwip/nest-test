import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'John',
        email: 'john@web.de',
        role: 'admin',
        password: 'lotte123',
      },
      {
        userId: 2,
        username: 'Paul',
        email: 'paul@bademeister.de',
        role: 'participant',
        password: 'lotte123',
      },
      {
        userId: 3,
        username: 'Valeria',
        email: 'valeria@ccl.de',
        role: 'host',
        password: 'lotte123',
      },
      {
        userId: 4,
        username: 'Ola',
        email: 'ola@ccl.de',
        role: 'host',
        password: 'lotte123',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
