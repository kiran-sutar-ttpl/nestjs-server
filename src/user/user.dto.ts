import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserDTO {
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
