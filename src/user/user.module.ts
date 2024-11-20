import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { user, UserSchema } from './user.schema';
import { UserResolver} from './user.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: user.name, schema: UserSchema }]), 
  ],
  providers: [UserService,UserResolver],
  exports: [UserService], // If other modules need to use UserService
})
export class UserModule {}
