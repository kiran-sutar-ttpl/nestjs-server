import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Promise } from 'mongoose';
import { UserDTO } from './user.dto';
import { UserResponse } from './user.interface';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserResponse) // Define the return type as User
  async createuser(@Args('createuserdto') createuserdto: UserDTO): Promise<UserResponse> {
    // service here
    return await this.userService.create(createuserdto);
  }

  @Mutation(() => UserResponse)
  async updateuser(@Args('id') id: string, @Args('updateUserDto') updateUserDto: UserDTO) {
    return await this.userService.upadteUser(id, updateUserDto);
  }

 @Mutation(() => UserResponse)
  async deleteUser(@Args('id') id: string) {
    return await this.userService.deleteuser(id);
  }

  @Query(() => [UserResponse]) // This defines a query that returns a list of users
  async users(): Promise<UserResponse[]> {
    return this.userService.findall();
  }

  @Query(() => UserResponse) // This defines a query that returns a list of users
  async usersByID(@Args('id') id: string): Promise<UserResponse> {
    return await this.userService.findById(id);
}
}