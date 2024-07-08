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
  IsInt,
  Min,
  Max,
} from "class-validator";
import { AdWhereUniqueInput } from "../../ad/base/AdWhereUniqueInput";
import { Type } from "class-transformer";
import { TransactionUpdateManyWithoutServicesInput } from "./TransactionUpdateManyWithoutServicesInput";

@InputType()
class ServiceUpdateInput {
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
    type: () => TransactionUpdateManyWithoutServicesInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutServicesInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutServicesInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutServicesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  prismaService?: number | null;
}

export { ServiceUpdateInput as ServiceUpdateInput };
