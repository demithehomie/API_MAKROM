/* eslint-disable prettier/prettier */
import { IsString, IsEmail, MinLength, MaxLength, IsOptional, IsDateString, IsEnum } from "class-validator";
import { Role } from "src/enums/role.enum";

export class CreateUserDTO {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    cpfCnpj   :string; 

    @IsString()
    company   :string; 

    @IsString()
    mobilePhone   :string;  

    @IsString()
    phone     :string; 
    
    @IsString()
    postalCode       :string;
    
    @IsString()
    address   :string; 

    @IsString()
    province     :string;     
    
    @IsString()
    state     :string;     
    
    @IsString()
    city      :string; 
    
    @IsString()   
    addressNumber    :string;

    @IsString()   
    additionalEmails :string;
  
    @IsOptional() 
    @IsDateString()
    birthAt: string;

    @IsOptional()
    @IsEnum(Role)
    role: number;


    @IsString()   
    observations :string;
}
//