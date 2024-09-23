import { PartialType} from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsEnum, IsObject, IsNumber, ValidateNested, Min} from 'class-validator';
import { Type } from 'class-transformer';

enum CalidadOrgan{
    Excelente="Menos de 24H",
    Decente="Entre 24H y 36H",
    Mala= "Entre 36hH y 48H"
}


class DocInfo {
    @IsString()
    @IsNotEmpty()
    nomDoc:string;
}

class  DonadorInfo{
     @IsNumber()
     @IsNotEmpty()
     edad: number;

     @IsString()
     @IsNotEmpty()
     tipoSangre: string;

     @IsString()
     @IsNotEmpty()
     historialMedico: string;

 }


export class CreateOrganDto{

    @IsString()
    @IsNotEmpty()
    tipo: string;
    @IsString()
    @IsNotEmpty()
    descripcion: string ;
    @IsEnum(CalidadOrgan)
    @IsNotEmpty()
    calidad:string;
    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    precio: number;

}
export class UpdateOrganDto extends (CreateOrganDto) {}

export class VerifyQualityDto{
    @IsString()
    @IsNotEmpty()
    documentoDoctor:string;

    @IsObject()
    @ValidateNested()
    @Type(()=>DocInfo)
    doctorInfo: DocInfo;

    @IsObject()
    @ValidateNested()
    @Type(()=>DonadorInfo)
    donaInfo: DonadorInfo

}

