import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto);
    createdUser.password = await hash(createUserDto.password, 10);
    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }

  async findOne(id: number): Promise<UserDocument> {
    return this.userModel.findById(id);
  }

  async findByUsername(username: string): Promise<UserDocument> {
    return this.userModel.findOne({ username });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userModel.findByIdAndRemove(id);
  }
}
