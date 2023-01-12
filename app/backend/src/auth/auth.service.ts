import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

const compare = async (password: string, hash: string) =>
  bcrypt.compare(password, hash);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    const isMatch = await compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user['_doc'];
      return result;
    }
    return null;
  }
}
