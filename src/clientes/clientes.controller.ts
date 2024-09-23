import { Controller, Get, Post, Param,Body, Delete, Patch } from '@nestjs/common';
import { CreateClienDto, UpdateClientDto } from 'src/dto/clien.dto';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
    constructor (private readonly clientesService:  ClientesService){}
    @Get()
    findAllCliens(){
        return this.clientesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id:string){
        return this.clientesService.findOne(id);
    }

    @Post()
    create(@Body()createClienDto: CreateClienDto){
        return this.clientesService.create(createClienDto);
    }

    @Delete(':id')
    remove(@Param('id')id:string){
        return this.clientesService.remove(id);
    }

    @Patch(':id')
    update(@Param('id')id:string,@Body()updateClientDto :UpdateClientDto ){
        return this.clientesService.update(id,updateClientDto )
    }

   
    
}
