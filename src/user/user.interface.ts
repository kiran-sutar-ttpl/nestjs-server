import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true }) // Allow email to be nullable
  email?: string;

  @Field()
  address: string;

  @Field()
  gender: string;

  @Field({ nullable: true })
  age: string;
}
