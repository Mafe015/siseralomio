import { IsString,IsNotEmpty } from "class-validator";
export class CreateProveDto{
    @IsString()
    @IsNotEmpty()
    nombre:string;
    @IsString()
    @IsNotEmpty()
    ciudad: string;
    @IsString()
    @IsNotEmpty()
    pais: string;

}
export class UpdateProveDto extends (CreateProveDto) {}