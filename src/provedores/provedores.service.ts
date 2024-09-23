import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProveDto,UpdateProveDto } from 'src/dto/prove.dto';
import { ProveM } from 'src/schemas/provedores.schema';

@Injectable()
export class ProvedoresService {
    constructor (@InjectModel(ProveM.name)private proveModel: Model<ProveM>){
        console.log('ProvedoresService constructor');
    }

    async create(createProveDto:CreateProveDto){
        const prove=await this.proveModel.create(createProveDto);
        return prove;
    }

    async findAll(){
        return await this.proveModel.find().populate('organo');
    }

    async findOne(id:string){
        const prove =(await this.proveModel.findById(id)).populate('organo');
        if(!prove){
            throw new NotFoundException ('Provedor Not Found');
        }
        return prove;
    }

    async update(id:string, updateProveDto:UpdateProveDto){
        const prove= await this.findOne(id);
        await prove.updateOne( updateProveDto, {new: true});
        return{...prove.toJSON(),... updateProveDto};
    }

    async remove(id:string){
        const prove=await this.findOne(id);
        return prove;
    }

}    