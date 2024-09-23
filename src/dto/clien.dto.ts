import { IsString,IsNotEmpty,IsNumber } from "class-validator";


export class CreateClienDto{
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    pais: string;

    @IsString()
    @IsNotEmpty()
    ciudad: string;

    @IsNumber()
    @IsNotEmpty()
    edad: number;
}

export class UpdateClientDto extends (CreateClienDto) {}