import { Type } from "class-transformer";
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from "class-validator";
import { CreateAddressDto } from "./CreateAddressDto";
export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  //validate nested
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
