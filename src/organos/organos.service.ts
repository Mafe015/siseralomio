import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrganDto,UpdateOrganDto,VerifyQualityDto } from 'src/dto/organ.dto';
import { OrganM } from 'src/schemas/organos.schema';

@Injectable()
export class OrganosService {
    constructor (@InjectModel(OrganM.name)private organModel: Model<OrganM>){
        console.log('OrganService constructor');
    }

    async create(createOrganDto: CreateOrganDto){
        const organ=await this.organModel.create(createOrganDto);
        return organ;
    }

    async findAll(){
        return await this.organModel.find().populate('provedor');
    }

    async findOne(id:string){
        const organ =(await this.organModel.findById(id)).populated('provedor');
        if(!organ){
            throw new NotFoundException ('Organ Not Found');
        }
        return organ;
    }

    async update(id:string, updateOrganDto:UpdateOrganDto){
        const organ= await this.findOne(id);
        await organ.updateOne(updateOrganDto, {new: true});
        return{...organ.toJSON(),...updateOrganDto};
    }

    async remove(id:string){
        const organ=await this.findOne(id);
        return organ;
    }

    async verifyQuality(id:string, verifyQualitDto:VerifyQualityDto){
        const organ = await this.organModel.findById(id);
        if(!organ){
            throw new NotFoundException ('Organ Not Found');
        }

        const Uporgan= await this.organModel.findByIdAndUpdate(
            id,
            {
                qualityVerified: true,
                docDocumento: verifyQualitDto.documentoDoctor,
                docInfo:verifyQualitDto.doctorInfo,
                donadorInfo: verifyQualitDto.donaInfo,
            },
            {new: true}
        );
        return{
            message: 'Verificacion de calidad completada',
            organ:UpdateOrganDto,
        };
    }

}
