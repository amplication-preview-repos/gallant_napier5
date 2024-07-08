/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { AdWhereUniqueInput } from "../../ad/base/AdWhereUniqueInput";
import { Type } from "class-transformer";
import { TransactionCreateNestedManyWithoutServicesInput } from "./TransactionCreateNestedManyWithoutServicesInput";

@InputType()
class ServiceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => AdWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdWhereUniqueInput)
  @IsOptional()
  @Field(() => AdWhereUniqueInput, {
    nullable: true,
  })
  ad?: AdWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutServicesInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutServicesInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutServicesInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutServicesInput;
}

export { ServiceCreateInput as ServiceCreateInput };
