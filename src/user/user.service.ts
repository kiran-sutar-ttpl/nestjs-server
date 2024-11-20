import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './user.schema';
import { UserDTO } from './user.dto';
import { UserResponse } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(user.name) private readonly userModel: Model<user>,
  ) {}

  async create(userDTO: UserDTO): Promise<UserResponse> {
    const newuser = new this.userModel(userDTO);
    return await newuser.save();
  }

  async findall() {
    return this.userModel.find().exec();
  }

  async upadteUser(id: string, updateUserData: UserDTO): Promise<UserResponse> {
    const existinguser = await this.userModel
      .findByIdAndUpdate(id, updateUserData)
      .exec();
    if (!existinguser) {
      throw new Error('User Not Exist');
    } else {
      console.log("User Updated Sucessfully");
    }
    return existinguser;
  }

  async findById(id: string) {
    const foundID = await this.userModel.findById(id).exec();
    if (!foundID) {
      throw new Error('Invalid ID');
    }
    return foundID;
  }

  async deleteuser(id: string) {
    const foundID = await this.userModel.findByIdAndDelete(id).exec();
    if (!foundID) {
      throw new Error('Invalid ID');
    }else{
    console.log("User Deleted Sucessfully");
    }
    return foundID;
  }
}
