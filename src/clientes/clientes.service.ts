import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClienDto,UpdateClientDto } from 'src/dto/clien.dto';
import { ClienM } from 'src/schemas/clientes.schema';

@Injectable()
export class ClientesService {
    constructor (@InjectModel(ClienM.name)private clienModel: Model<ClienM>){
        console.log('ClientesService constructor');
    }

    async create(createClienDto:CreateClienDto){
        const clien=await this.clienModel.create(createClienDto);
        return clien;
    }

    async findAll(){
        return await this.clienModel.find().exec();
    }

    async findOne(id:string){
        const clien =(await this.clienModel.findById(id));
        if(!clien){
            throw new NotFoundException ('Cliente Not Found');
        }
        return clien;
    }

    async update(id:string, updateClientDto:UpdateClientDto){
        const clien= await this.findOne(id);
        await clien.updateOne(updateClientDto, {new: true});
        return{...clien.toJSON(),...updateClientDto};
    }

    async remove(id:string){
        const clien=await this.findOne(id);
        return clien;
    }

}    