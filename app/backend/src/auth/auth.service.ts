import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

const compare = async (password: string, hash: string) =>
  bcrypt.compare(password, hash);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    const isMatch = await compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user['_doc'];
      return result;
    }
    return null;
  }

  async login(userDto: CreateUserDto) {
    const payload = { username: userDto.username, sub: userDto._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
