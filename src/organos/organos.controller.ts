import { Controller, Get, Post, Param,Body, Delete, Patch } from '@nestjs/common';
import { OrganosService } from './organos.service';
import { CreateOrganDto, UpdateOrganDto, VerifyQualityDto } from 'src/dto/organ.dto';

@Controller('organos')
export class OrganosController {
    constructor (private readonly organosService: OrganosService){}
    @Get()
    findAllOrgans(){
        return this.organosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id:string){
        return this.organosService.findOne(id);
    }

    @Post()
    create(@Body()createOrganDto: CreateOrganDto){
        return this.organosService.create(createOrganDto);
    }

    @Delete(':id')
    remove(@Param('id')id:string){
        return this.organosService.remove(id);
    }

    @Patch(':id')
    update(@Param('id')id:string,@Body()updateOrganDto:UpdateOrganDto){
        return this.organosService.update(id,updateOrganDto)
    }

    @Post('verify-quality/:id')
    verifyQuality( @Param('id') id: string,
    @Body() verifyQualitDto: VerifyQualityDto){
        return this.organosService.verifyQuality(id, verifyQualitDto);
    }
    
}
