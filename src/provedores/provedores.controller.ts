import { Controller, Get, Post, Param,Body, Delete, Patch } from '@nestjs/common';
import { CreateProveDto,UpdateProveDto } from 'src/dto/prove.dto';
import { ProvedoresService } from './provedores.service';

@Controller('provedor')
export class ProvedoresController {
    constructor (private readonly provedoresService:  ProvedoresService){}
    @Get()
    findAllCliens(){
        return this.provedoresService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id:string){
        return this.provedoresService.findOne(id);
    }

    @Post()
    create(@Body()createProveDto: CreateProveDto){
        return this.provedoresService.create(createProveDto);
    }

    @Delete(':id')
    remove(@Param('id')id:string){
        return this.provedoresService.remove(id);
    }

    @Patch(':id')
    update(@Param('id')id:string,@Body()updateProveDto :UpdateProveDto ){
        return this.provedoresService.update(id,updateProveDto)
    }

   
    
}
